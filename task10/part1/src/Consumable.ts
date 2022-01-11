import { Item } from './Item';

export abstract class Consumable extends Item {
    consumed: boolean;
    spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this.consumed = false;
        this.spoiled = spoiled;
    }

    public abstract eat(): string;

    public use(): string {
        if (!this.consumed && !this.spoiled) {
            return this.eat();
        }

        let stringOutput: string;
        if (this.consumed) {
            stringOutput = `There is nothing left of the ${this.name} to consume.`;
        } else {
            stringOutput = this.eat();
            if (this.spoiled) {
                stringOutput += `\nYou feel sick.`;
            }
        }
        return stringOutput;
    }
}