import { Utils } from '../commons/utils';
import { ComponentTypes } from './component-types';

export abstract class Seed {
    name: string;
    type: ComponentTypes;
    private id: string;
    constructor(config: { name: string, type: ComponentTypes }) {
        if (!config) {
            throw new Error('Config can\'t be null');
        }
        this.name = config.name;
        this.type = config.type;
        this.id = Utils.guidGenerator();
    }
}
