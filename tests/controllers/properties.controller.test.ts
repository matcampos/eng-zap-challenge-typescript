import { NextFunction, Request, Response } from 'express';
import { propertiesController } from '../../src/controllers';
import { propertiesService } from '../../src/services';
import sinon from 'sinon';
import { PropertiesResponse } from '../../src/models';

const mockRequest = function (error?: boolean) {
    const mockRequest = {
        query: {
            platform: error ? 'AAAA' : undefined
        }
    } as unknown as Request;

    return mockRequest
}

const mockResponse = () => {
    const res = {
        send: () => res,
        status: (number) => res,
        json: (content) => res
    } as Response;
    return res
}

const mockNext = () => {
    const next = (() => '') as NextFunction;
    return next
}

describe('Get properties paginated', function () {
    it("Should return 200", async function () {
        const req = mockRequest();

        const resSpy = jasmine.createSpyObj(["send", "status", "json"])

        await propertiesController.findProperties(req, resSpy, mockNext);

        expect(resSpy.json).toHaveBeenCalledTimes(1);
    })


    it("Should return error", async function () {
        const req = mockRequest(true);
        const res = mockResponse();
        const nextSpy = jasmine.createSpy('next', mockNext);

        const stub = sinon.stub(propertiesService, 'findProperties').callsFake(function (query) {
            {
                if (query.platform == 'AAAA') {
                    throw new Error('error')
                }

                return new PropertiesResponse({
                    pageNumber: 1,
                    pageSize: 50,
                    totalCount: 0,
                    listings: []
                })
            }
        });

        await propertiesController.findProperties(req, res, nextSpy);

        stub.restore();

        expect(nextSpy).toHaveBeenCalledTimes(1);
    });
});