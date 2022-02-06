import { ShipmentDecorator } from "./ShipmentDecorator";

const MARKED_LABEL = "**MARK FRAGILE**";

export class FragileShipmentDecorator extends ShipmentDecorator {
    public getMarks(): string[] {
        return [...this.wrappee.getMarks(), MARKED_LABEL];
    }
}
