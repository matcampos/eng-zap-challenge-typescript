import { Immobile } from "../models/immobile";
import axios from 'axios';

export default class SourceData {
    static data: Array<Immobile> = [];

    async loadData(url?: string): Promise<void> {
        try {
            let url_api = process.env.SOURCE_URL;

            if (url) {
                url_api = url;
            }

            const response = await this.getProperties(url);
            SourceData.data = response.data;
        } catch (error) {
            throw error
        }
    }

    /* istanbul ignore next */
    async getProperties(url) {
        return axios.get<Array<Immobile>>(url)
    }
}