import { InputSeed } from './input-seed';
import { ComponentTypes } from './component-types';

export class Checkbox extends InputSeed<boolean> {
    label: string;

    constructor(config: {
        name: string,
        type: ComponentTypes,
        value?: boolean,
        label?: string
    }) {
        super(config);
        this.label = config.label;
    }
}
