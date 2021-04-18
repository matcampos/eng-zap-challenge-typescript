import * as zapRules from "./zap-rules";
import * as vivaRealRules from "./viva-real-rules";
import { Immobile, SearchQuery } from "../models";

export default function filterData(data: Array<Immobile>, query: SearchQuery): Array<Immobile> {

    /* 
        In case of the query.platform is not null or whitespace and lat and lon == 0 remove the immobile.
    */
    if (
        query.platform
        && query.platform != ''
        && query.platform != null
    ) {
        data = data.filter(data => {
            if (data.address.geoLocation.location.lat == 0 && data.address.geoLocation.location.lon == 0) {
                return false
            }

            return true
        });
    }

    /*
        ZAP platform validations;
    */
    if (query.platform == 'ZAP') {
        return zapRules.filterZapData(data);
    }
    /*
        Vida Real platform validations;
    */
    if (query.platform == 'VIVA_REAL') {
        return vivaRealRules.filterVivaRealData(data);
    }

    return data;

}