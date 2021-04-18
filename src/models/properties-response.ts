import { Immobile } from "./immobile";

export class PropertiesResponse {
    pageNumber: number;
    pageSize: number;
    totalCount: number;
    listings: Array<Immobile>;

    constructor(init?: Partial<PropertiesResponse>) {
        Object.assign(this, init);
    }
}