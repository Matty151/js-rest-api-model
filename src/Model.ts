import TestApi from './TestApi';

export default class Model {
    id: number | string;

    #parent: Model;

    constructor(parent?: Model, id?: number | string) {
        this.#parent = parent;
        this.id = id;
    }

    get() {
        const url = this.getUrl();

        console.log(url);

        const result = TestApi.fetch(url);

        if (result == null) {
            return null;
        }

        let output;

        if (Array.isArray(result)) {
            output = [];

            for (let item of result) {
                output.push(this.#castToModel(item));
            }
        } else {
            output = this.#castToModel(result);
        }

        return output;
    }

    getUrl(): string {
        let url = '';

        if (this.#parent != null) {
            url += `${this.#parent.getUrl()}/`;
        }

        url += this.getName();

        if (this.id) {
            url += `/${this.id}`;
        }

        return url;
    }

    getName() {
        return this.constructor.name.toLowerCase() + 's'; // TODO: Properly pluralize name.
    }

    #castToModel(data): Model {
        const model = new this.constructor(this.#parent);

        for (let [prop, value] of Object.entries(data)) {
            model[prop] = value;
        }

        return model;
    }
}

