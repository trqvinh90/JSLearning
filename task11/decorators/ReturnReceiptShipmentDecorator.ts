import { ShipmentDecorator } from "./ShipmentDecorator";

const MARKED_LABEL = "**MARK RETURN RECEIPT REQUESTED**";

export class ReturnReceiptShipmentDecorator extends ShipmentDecorator {
    public getMarks(): string[] {
        return [...this.wrappee.getMarks(), MARKED_LABEL];
    }
}