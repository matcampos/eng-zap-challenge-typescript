import * as sinon from 'sinon';
import SourceData from '../../src/data/source';
import { Immobile } from '../../src/models';

describe('Get properties from source', function () {
    let sandbox;

    beforeEach(() => sandbox = sinon.createSandbox());

    afterEach(() => sandbox.restore());


    it("Should change data value", async function () {

        process.env.SOURCE_URL = 'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-2.json';

        const sourceData = new SourceData();

        sandbox.stub(sourceData, 'getProperties').returns(Promise.resolve({
            status: 200, data: [
                new Immobile()
            ]
        }));

        await sourceData.loadData();

        expect(SourceData.data.length).toBeGreaterThan(0);
    })


    it("Should throw error", async function () {
        const sourceData = new SourceData();

        process.env.SOURCE_URL = undefined;

        sandbox.stub(sourceData, 'getProperties').returns(Promise.reject(new Error('error')));

        const error = sourceData.loadData('http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-2.json');

        await expectAsync(error).toBeRejectedWithError('error')
    })
});