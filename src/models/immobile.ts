import { Address } from './address'
import { PricingInfos } from './pricing-infos';

export class Immobile {
    constructor(init?: Partial<Immobile>) {
        Object.assign(this, init);
    }

    usableAreas: number;
    listingType: string;
    createdAt: Date;
    listingStatus: string;
    id: string;
    parkingSpaces: 1;
    updatedAt: Date;
    owner: boolean;
    images: Array<string>;
    address: Address;
    bathrooms: number;
    bedrooms: number;
    pricingInfos: PricingInfos;
}
