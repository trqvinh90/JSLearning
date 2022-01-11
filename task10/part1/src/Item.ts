import { Comparable } from './Comparable';

let id = 0;
let numberOfItems = 0;

export abstract class Item implements Comparable<Item> {
    id: number;
    value: number;
    name: string;
    weight: number;

    constructor(name: string, value: number, weight: number) {
        this.id = id++;
        this.value = value;
        this.name = name;
        this.weight = weight;
        numberOfItems++;
    }

    public compareTo(other: Item): number {
        if (this.value > other.value) { 
            return 1;
        } else if (this.value < other.value) {
            return - 1;
        } else {
            this.name.localeCompare(other.name);
        }
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(2)}`;
    }

    public abstract use(): void;

    public reset(): void {
        numberOfItems = 0;
    }
}
