import { InputSeed } from './input-seed';
import { ComponentTypes } from './component-types';

export class TextField extends InputSeed<string> {
    placeholder: string;

    constructor(config: {
        name: string,
        type: ComponentTypes,
        value?: string,
        placeholder?: string
    }) {
        super(config);
        this.placeholder = config.placeholder;
    }
}
