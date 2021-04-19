import { config, app } from './config';
import SourceData from "./data/source";

app.listen(config.port, async () => {
    /* 
        Instance SourceData class and load the json data in a static variaable of the class.
    */
    const sourceData = new SourceData();
    await sourceData.loadData(config.source_url);
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});