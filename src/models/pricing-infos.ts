export class PricingInfos {
    period: string;
    yearlyIptu: string;
    price: string;
    rentalTotalPrice: string;
    businessType: string;
    monthlyCondoFee: string;

    constructor(init?: Partial<PricingInfos>) {
        Object.assign(this, init);
    }
}