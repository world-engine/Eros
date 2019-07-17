import { Seed } from './seed';
import { ComponentTypes } from './component-types';

export abstract class InputSeed<T> extends Seed {
    value: T;

    constructor(config: {
        name: string,
        type: ComponentTypes
        value?: T
    }) {
        super(config);
        this.value = config.value;
    }
}
