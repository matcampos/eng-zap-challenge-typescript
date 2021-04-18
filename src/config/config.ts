import Joi from 'joi';
import { Config } from '../models';

// require and configure dotenv, will load vars in .env in PROCESS.ENV
import dotenv from 'dotenv';
dotenv.config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
        .allow('development', 'production', 'test', 'provision')
        .default('development'),
    PORT: Joi.number()
        .default(4040),
}).unknown()
    .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = new Config({
    env: envVars.NODE_ENV,
    port: envVars.PORT,
});

export default config;
