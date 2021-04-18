export class SearchQuery {
    page: number = 1;
    pageSize: number = 30;
    offset: number = 0;
    limit: number = 30;
    platform: string;

    constructor(init?: Partial<SearchQuery>) {
        Object.assign(this, init);
    }
}