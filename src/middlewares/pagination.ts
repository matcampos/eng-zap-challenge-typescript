import { NextFunction, Request, Response } from "express";

export default function paginate(req: Request, res: Response, next: NextFunction) {
    let page: string = '1';
    let pageSize: string = '30';

    if (req.query.page && req.query.page != '' && req.query.page != '0' && req.query.page != null) {
        page = req.query.page.toString();
    }
    req.query.page = page;

    if (req.query.pageSize && req.query.pageSize != '' && req.query.pageSize != '0' && req.query.pageSize != null) {
        pageSize = req.query.pageSize.toString();
    }

    if (Number(pageSize) > 30) {
        pageSize = '30';
    }

    req.query.pageSize = pageSize;

    req.query.offset = ((Number(page) - 1) * Number(pageSize)).toString();
    req.query.limit = (Number(req.query.offset) + Number(pageSize)).toString();

    return next();
}