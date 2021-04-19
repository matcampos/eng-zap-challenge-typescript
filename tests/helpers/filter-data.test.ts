import filterData from '../../src/helpers/filter-data';
import { Immobile, PricingInfos, SearchQuery } from '../../src/models';

describe('filterData', function () {
    it("Should return ZAP platform Immobile", async function () {

        const dataMock: Array<Immobile> = new Array<Immobile>(
            new Immobile( {
                "usableAreas": 77,
                "listingType": "USED",
                "createdAt": new Date("2018-05-08T00:29:38.179Z"),
                "listingStatus": "ACTIVE",
                "id": "fed26dbe5881",
                "parkingSpaces": 1,
                "updatedAt": new Date("2018-05-08T00:29:38.179Z"),
                "owner": false,
                "images": [
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/76a9e6394825a55244e77df2acc2478f.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/bf6583b1f9b624f391fc433eda8090d5.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/2039fab0476b6e5cf17dd3132922f326.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/3f428dea9ff9903d88e62694cdc3e282.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/07aa0b09bffbd51cca83f3f76c1483c2.jpg"
                ],
                "address": {
                    "city": "São Paulo",
                    "neighborhood": "Campo Belo",
                    "geoLocation": {
                        "precision": "ROOFTOP",
                        "location": {
                            "lon": -46.672953,
                            "lat": -23.622739
                        }
                    }
                },
                "bathrooms": 3,
                "bedrooms": 3,
                "pricingInfos": {
                    "period": "MONTHLY",
                    "yearlyIptu": "810",
                    "price": "3500",
                    "rentalTotalPrice": "4440",
                    "businessType": "RENTAL",
                    "monthlyCondoFee": "940"
                }
            })
        );

        const query = new SearchQuery({
            page: 1,
            pageSize: 30,
            offset: 0,
            limit: 30,
            platform: 'ZAP'
        });

        const dataFiltered = filterData(dataMock, query);
        expect(dataFiltered.length).toBeGreaterThan(0);
    })


    it("Should return Viva Real platform Immobile", async function () {

        const dataMock: Array<Immobile> = new Array<Immobile>(
            new Immobile( {
                "usableAreas": 77,
                "listingType": "USED",
                "createdAt": new Date("2018-05-08T00:29:38.179Z"),
                "listingStatus": "ACTIVE",
                "id": "fed26dbe5881",
                "parkingSpaces": 1,
                "updatedAt": new Date("2018-05-08T00:29:38.179Z"),
                "owner": false,
                "images": [
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/76a9e6394825a55244e77df2acc2478f.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/bf6583b1f9b624f391fc433eda8090d5.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/2039fab0476b6e5cf17dd3132922f326.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/3f428dea9ff9903d88e62694cdc3e282.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/07aa0b09bffbd51cca83f3f76c1483c2.jpg"
                ],
                "address": {
                    "city": "São Paulo",
                    "neighborhood": "Campo Belo",
                    "geoLocation": {
                        "precision": "ROOFTOP",
                        "location": {
                            "lon": -46.672953,
                            "lat": -23.622739
                        }
                    }
                },
                "bathrooms": 3,
                "bedrooms": 3,
                "pricingInfos": new PricingInfos({
                    "yearlyIptu": "0",
                    "price": "405000",
                    "businessType": "SALE",
                    "monthlyCondoFee": "495"
                })
            })
        );

        const query = new SearchQuery({
            page: 1,
            pageSize: 30,
            offset: 0,
            limit: 30,
            platform: 'VIVA_REAL'
        });

        const dataFiltered = filterData(dataMock, query);
        expect(dataFiltered.length).toBeGreaterThan(0);
    })



    it("Should return none products", async function () {

        const dataMock: Array<Immobile> = new Array<Immobile>(
            new Immobile( {
                "usableAreas": 77,
                "listingType": "USED",
                "createdAt": new Date("2018-05-08T00:29:38.179Z"),
                "listingStatus": "ACTIVE",
                "id": "fed26dbe5881",
                "parkingSpaces": 1,
                "updatedAt": new Date("2018-05-08T00:29:38.179Z"),
                "owner": false,
                "images": [
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/76a9e6394825a55244e77df2acc2478f.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/bf6583b1f9b624f391fc433eda8090d5.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/2039fab0476b6e5cf17dd3132922f326.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/3f428dea9ff9903d88e62694cdc3e282.jpg",
                    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/07aa0b09bffbd51cca83f3f76c1483c2.jpg"
                ],
                "address": {
                    "city": "São Paulo",
                    "neighborhood": "Campo Belo",
                    "geoLocation": {
                        "precision": "ROOFTOP",
                        "location": {
                            "lon": 0,
                            "lat": 0
                        }
                    }
                },
                "bathrooms": 3,
                "bedrooms": 3,
                "pricingInfos": new PricingInfos({
                    "yearlyIptu": "0",
                    "price": "405000",
                    "businessType": "SALE",
                    "monthlyCondoFee": "495"
                })
            })
        );

        const query = new SearchQuery({
            page: 1,
            pageSize: 30,
            offset: 0,
            limit: 30,
            platform: 'VIVA_REAL'
        });

        const dataFiltered = filterData(dataMock, query);
        expect(dataFiltered.length).toEqual(0);
    })
});