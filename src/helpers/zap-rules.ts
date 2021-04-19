import { Immobile } from "../models";

export function isInsideZAPBoundingBox(immobile: Immobile) {

    return immobile.address.geoLocation.location.lat >= -23.568704
        && immobile.address.geoLocation.location.lat <= -23.546686
        && immobile.address.geoLocation.location.lon >= -46.693419
        && immobile.address.geoLocation.location.lon <= -46.641146;

}

function elegibleRules(isInsideZAPBoundingBox: boolean, immobile: Immobile) {
    
    const elegibleInfos = {
        minimumRentalPrice: 3500,
        minimumSalePrice: 600000,
        usableAreaMinPriceValid: (Number(immobile.pricingInfos.price) / immobile.usableAreas) > 3500
    }

    if (immobile.usableAreas == 0) {
        elegibleInfos.usableAreaMinPriceValid = false;
    }

    if (isInsideZAPBoundingBox) {
        elegibleInfos.minimumRentalPrice = elegibleInfos.minimumRentalPrice * 0.9;
        elegibleInfos.minimumSalePrice = elegibleInfos.minimumSalePrice * 0.9;
    }

    return elegibleInfos;
}

export function filterZapData(data: Array<Immobile>) {
    return data.filter(data => {

        const isInsideZAP = isInsideZAPBoundingBox(data);
        const elegibleInfos = elegibleRules(isInsideZAP, data);

        // In case of businessType == 'RENTAL' the price must be upper or equal 3500
        if (data.pricingInfos.businessType == 'RENTAL'
            && Number(data.pricingInfos.rentalTotalPrice) < elegibleInfos.minimumRentalPrice) {
            return false
        }

        // In case of businessType == 'SALE' the price must be upper or equal 600000 AND usableAreas price (usableAreas/ priceInfos.price) must be at minimum 3500
        if (data.pricingInfos.businessType == 'SALE') {

            if (!elegibleInfos.usableAreaMinPriceValid) {
                return false;
            }

            if (Number(data.pricingInfos.price) < elegibleInfos.minimumSalePrice) {
                return false;
            }
        }

        return true;
    })
}