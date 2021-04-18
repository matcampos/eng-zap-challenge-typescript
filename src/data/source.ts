import { Immobile } from "../models/immobile";
import axios from 'axios';

export default class SourceData {
    static data: Array<Immobile> = [];

    async loadData(): Promise<void> {
        try {
            const response = await axios.get<Array<Immobile>>('http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-2.json')
            SourceData.data = response.data;
        } catch (error) {
            throw error
        }
    }
}