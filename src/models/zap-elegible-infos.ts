export class ZapElegibleInfos {
    minimumRentalPrice: number;
    minimumSalePrice: number;
    usableAreaMinPriceValid: boolean;

    constructor(init?: Partial<ZapElegibleInfos>) {
        Object.assign(this, init);
    }
}