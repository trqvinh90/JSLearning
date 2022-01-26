import { Shipment, IShipment, ShipmentType } from "./Shipment";
import { Shipper } from "./Shipper";
import { State } from "./State";

class ShipmentDecorator implements IShipment {
    protected wrappee: Shipment;
    
    // how to hide these props? currently only need in the Shipment class
    state: State;
    shipper: Shipper;
    shipmentType: ShipmentType;

    constructor(shipment: Shipment) {
        this.wrappee = shipment;
    }
    
    public addMark(mark?: string): void {
        this.wrappee.addMark(mark);
    }

    // how to hide these func? currently only need in the Shipment class
    public ship(): string {
        return this.wrappee.ship();
    }
    
    public getShipmentId(): string {
        return this.wrappee.getShipmentId();
    }
}

export class FragileShipmentDecorator extends ShipmentDecorator {
    constructor(shipment: Shipment) {
        super(shipment);
        this.addMark();
    }

    public addMark(mark?: string): void {
        this.wrappee.addMark('**MARK FRAGILE**');
    }
}

export class DoNotLeaveShipmentDecorator extends ShipmentDecorator {
    constructor(shipment: Shipment) {
        super(shipment);
        this.addMark();
    }

    public addMark(mark?: string): void {
        this.wrappee.addMark('**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**');
    }
}

export class ReturnReceiptShipmentDecorator extends ShipmentDecorator {
    constructor(shipment: Shipment) {
        super(shipment);
        this.addMark();
    }

    public addMark(mark?: string): void {
        this.wrappee.addMark('**MARK RETURN RECEIPT REQUESTED**');
    }
}