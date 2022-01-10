import { Item } from './Item';

export abstract class Consumable extends Item {
    _consumed: boolean;
    _spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this._consumed = false;
        this._spoiled = spoiled;
    }

    public abstract eat(): string;

    public use(): string {
        if (!this._consumed && !this._spoiled) {
            return this.eat();
        }

        let stringOutput: string;
        if (this._consumed) {
            stringOutput = `There is nothing left of the ${this._name} to consume.`;
        } else {
            stringOutput = this.eat();
            if (this._spoiled) {
                stringOutput += `\nYou feel sick.`;
            }
        }
        return stringOutput;
    }
}