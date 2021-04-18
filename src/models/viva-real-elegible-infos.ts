export class VivaRealElegibleInfos {
    minimumRentalPrice: number;
    minimumSalePrice: number;
    usableAreaMinPriceValid: boolean;

    constructor(init?: Partial<VivaRealElegibleInfos>) {
        Object.assign(this, init);
    }
}