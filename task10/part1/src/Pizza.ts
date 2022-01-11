import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    numberOfSlices: number;
    slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super('Pizza', 1, 1, spoiled);
        this.numberOfSlices = numberOfSlices;
    }

    public eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            if (this.slicesEaten >= this.numberOfSlices) {
                this.consumed = true;
            }

            return "You eat a slice of the pizza";
        } else {
            return "";
        }
    }
}