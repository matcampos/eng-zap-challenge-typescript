import { Immobile, PropertiesResponse, SearchQuery } from "../models";
import SourceData from "../data/source";
import { filterData } from "../helpers";

function findProperties(query: SearchQuery): PropertiesResponse {
    let allData = [...SourceData.data];
    let filteredData: Array<Immobile> = allData;
    let paginatedData: Array<Immobile> = [];

    filteredData = filterData(allData, query);

    paginatedData = filteredData.slice(query.offset, query.limit);

    return new PropertiesResponse({
        pageNumber: query.page,
        pageSize: query.pageSize,
        totalCount: filteredData.length,
        listings: paginatedData
    });
}

export default {
    findProperties
}