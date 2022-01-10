import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    _numberOfSlices: number;
    _slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super('Pizza', 1, 1, spoiled);
        this._numberOfSlices = numberOfSlices;
    }

    public eat(): string {
        if (this._slicesEaten < this._numberOfSlices) {
            this._slicesEaten++;

            if (this._slicesEaten >= this._numberOfSlices) {
                this._consumed = true;
            }

            return "You eat a slice of the pizza";
        } else {
            return "";
        }
    }
}