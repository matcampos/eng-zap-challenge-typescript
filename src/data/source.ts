import { Immobile } from "../models/immobile";
import axios from 'axios';

export default class SourceData {
    static data: Array<Immobile> = [];

    async loadData(): Promise<void> {
        try {
            const response = await axios.get<Array<Immobile>>(process.env.SOURCE_URL)
            SourceData.data = response.data;
        } catch (error) {
            throw error
        }
    }
}