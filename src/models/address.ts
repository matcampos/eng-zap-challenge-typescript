export class Address {
    city: string;
    neighborhood: string;
    geoLocation: GeoLocation;

    constructor(init?: Partial<Address>) {
        Object.assign(this, init);
    }
}

export class GeoLocation {
    precision: string;
    location: Location;

    constructor(init?: Partial<GeoLocation>) {
        Object.assign(this, init);
    }
}

export class Location {
    lon: number = 0;
    lat: number = 0;

    constructor(init?: Partial<Location>) {
        Object.assign(this, init);
    }
}