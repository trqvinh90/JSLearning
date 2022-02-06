import { Shipment } from "../Shipment";

export class ShipmentDecorator extends Shipment {
    protected wrappee: Shipment;
    
    constructor(shipment: Shipment) {
        super(shipment.stateInfo);
        this.wrappee = shipment;
    }

    public getMarks(): string[] {
        return this.wrappee.getMarks();
    }
}
