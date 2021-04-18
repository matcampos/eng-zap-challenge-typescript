export class Config {

    constructor(init?: Partial<Config>) {
        Object.assign(this, init);
    }

    env: string;
    port: number;
}