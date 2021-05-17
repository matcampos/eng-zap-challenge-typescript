import { NextFunction, Request, Response } from "express";
import { SearchQuery } from "../models";
import { propertiesService } from '../services'

async function findProperties(req: Request, res: Response, next: NextFunction) {
    try {
        const query = new SearchQuery({
            page: Number(req.query.page),
            pageSize: Number(req.query.pageSize),
            offset: Number(req.query.offset),
            limit: Number(req.query.limit),
            platform: req.query.platform ? req.query.platform.toString() : undefined
        });

        const responseData = propertiesService.findProperties(query);

        return res.json(responseData);
    } catch (error) {
        return next(error);
    }
}

export {
    findProperties
}