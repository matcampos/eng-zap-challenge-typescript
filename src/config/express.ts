import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import httpStatus from 'http-status';
import expressWinston from 'express-winston';
import expressValidation from 'express-validation';
import helmet from 'helmet';
import winstonInstance from './winston';
import routes from '../routes';
import config from './config';
import { APIError } from '../helpers';

const app = express();

if (config.env === 'development') {
    app.use(logger('dev'));
}

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// enable detailed API logging in dev env
if (config.env === 'development') {
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(expressWinston.logger({
        winstonInstance,
        meta: true, // optional: log meta data about request (defaults to true)
        msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
        colorize: true
    }));
}

// mount all routes on /api path
app.use('/api', routes);

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        // validation error contains errors which is an array of error each containing message[]
        const message = {
            code: -1,
            messages: []
        };
        err.details.query.map(error => {
            if (error['type'] == 'object.unknown') {
                message.messages.push({
                    field: error['context']['label'],
                    en: `Field '${error['context']['label']}' is invalid.`,
                    pt: `Campo '${error['context']['label']}' é inválido.`
                })
            } else {
                message.messages.push({
                    field: error['context']['label'],
                    en: `Field '${error['context']['label']}' has an invalid value.`,
                    pt: `Campo '${error['context']['label']}' possuí um valor inválido.`
                })
            }
        });
        const error = new APIError(message, err.statusCode, true);
        return next(error);
    } else if (!(err instanceof APIError)) {
        const message = {
            code: -3,
            messages: [{
                en: err.message,
                pt: err.status === 401 ? 'Não autorizado' : err.message
            }]
        }
        const apiError = new APIError(message, err.status, true);
        return next(apiError);
    }
    return next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const message = {
        code: -2,
        messages: [{
            en: 'Route not found',
            pt: 'Rota não encontrada.'
        }]
    }
    const err = new APIError(message, httpStatus.NOT_FOUND, true);
    return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => // eslint-disable-line no-unused-vars
{
    const status = err.status || httpStatus.INTERNAL_SERVER_ERROR;
    res.status(status).json({
        message: err.isPublic ? err.message : httpStatus[err.status],
        stack: config.env === 'development' ? err.stack : {}
    })
}
);

export default app;
