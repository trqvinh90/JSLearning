import { ShipmentDecorator } from "./ShipmentDecorator";

const MARKED_LABEL = "**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**";

export class DoNotLeaveShipmentDecorator extends ShipmentDecorator {
    public getMarks(): string[] {
        return [...this.wrappee.getMarks(), MARKED_LABEL];
    }
}