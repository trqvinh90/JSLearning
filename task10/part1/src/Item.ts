import { Comparable } from './Comparable';

let id = 0;
let numberOfItems = 0;

export abstract class Item implements Comparable<Item> {
    _id: number;
    _value: number;
    _name: string;
    _weight: number;

    constructor(name: string, value: number, weight: number) {
        this._id = id++;
        this._value = value;
        this._name = name;
        this._weight = weight;
        numberOfItems++;
    }

    public compareTo(other: Item): number {
        if (this._value > other._value) { 
            return 1;
        } else if (this._value < other._value) {
            return - 1;
        } else {
            this._name.localeCompare(other._name);
        }
    }

    public toString(): string {
        return `${this._name} - Value: ${this._value}, Weight: ${this._weight.toFixed(2)}`;
    }

    public abstract use(): void;

    public reset(): void {
        numberOfItems = 0;
    }
}
