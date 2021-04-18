import { Immobile } from "../models";
import * as zapRules from './zap-rules';

export function elegibleRules(immobile: Immobile) {

    const elegibleInfos = {
        monthlyCondoFeeValid: false,
        maximumRentalPrice: 4000,
        maximumSalePrice: 700000
    }

    if (
        immobile.pricingInfos.monthlyCondoFee != undefined
        && immobile.pricingInfos.monthlyCondoFee != ''
        && immobile.pricingInfos.monthlyCondoFee != null
    ) {
        if (isNaN(Number(immobile.pricingInfos.monthlyCondoFee))) {
            elegibleInfos.monthlyCondoFeeValid = false;
        } else {
            elegibleInfos.monthlyCondoFeeValid = Number(immobile.pricingInfos.monthlyCondoFee) <= (Number(immobile.pricingInfos.rentalTotalPrice) * 0.3);
        }
    }

    if (zapRules.isInsideZAPBoundingBox(immobile)) {
        elegibleInfos.maximumRentalPrice = elegibleInfos.maximumRentalPrice * 1.5;
    }

    return elegibleInfos;
}

export function filterVivaRealData(data: Array<Immobile>): Array<Immobile> {
    return data.filter(data => {

        const elegibleInfos = elegibleRules(data);

        if (data.pricingInfos.businessType == 'RENTAL') {

            if (!elegibleInfos.monthlyCondoFeeValid) {
                return false;
            }

            if (Number(data.pricingInfos.rentalTotalPrice) > elegibleInfos.maximumRentalPrice) {
                return false
            }
        }

        if (data.pricingInfos.businessType == 'SALE') {
            if (Number(data.pricingInfos.price) > elegibleInfos.maximumSalePrice) {
                return false;
            }
        }

        return true;
    });
}