import { AirEeastShipper, ChicagoSprintShipper, PacificParcelShipper, Shipper } from "./Shipper";
import { State } from "./State";

let uniqueId = 1;

export enum ShipmentType {
    Package,
    Letter,
    Oversize,
}

export interface IShipment {
    // how to hide these props? currently only need in the Shipment class
    state: State;
    shipper: Shipper;
    shipmentType: ShipmentType;

    addMark(mark?: string): void;
    ship(): string;
    getShipmentId(): string
}

export const STANDARD_LETTER_MAX_WEIGHT = 15; // ounces
export const STANDARD_PACKAGE_MAX_WEIGHT = 160; // ounces

export class Shipment implements IShipment {
    // private state: State;
    // private shipper: Shipper;
    // private shipmentType: ShipmentType;
    state: State;
    shipper: Shipper;
    shipmentType: ShipmentType;

    constructor(state: State) {
        if (!state.shipmentId) {
            state.shipmentId = uniqueId;
            uniqueId++;
        }
        this.state = state;

        // identify shipper
        const zipCodeFirstChar = state.fromZipCode[0] ?? '';
        switch (zipCodeFirstChar) {
            case '1':
            case '2':
            case '3':
                {
                    this.shipper = new AirEeastShipper();
                    break;
                }
            case '4':
            case '5':
            case '6':
                {
                    this.shipper = new ChicagoSprintShipper();
                    break;
                }
            case '7':
            case '8':
            case '9':
                {
                    this.shipper = new PacificParcelShipper();
                    break;
                }
            default:
                {
                    this.shipper = new AirEeastShipper();
                    break;
                }
        }

        // identify shipment type
        const { weight } = state;
        if (weight <= STANDARD_LETTER_MAX_WEIGHT) {
            this.shipmentType = ShipmentType.Letter;
        } else if (weight <= STANDARD_PACKAGE_MAX_WEIGHT) {
            this.shipmentType = ShipmentType.Package;
        } else {
            this.shipmentType = ShipmentType.Oversize;
        }
    }

    public addMark(mark?: string): void {
        console.log(mark);
        if (!mark) {
            return;
        }
        if (!this.state.marks) {
            this.state.marks = [];
        }
        this.state.marks.push(mark);
    }
    
    public getShipmentId(): string {
        return this.state.shipmentId.toString();
    }

    public ship(): string {
        const { shipmentId, fromAddress, fromZipCode, toAddress, toZipCode, marks, weight } = this.state;
        const cost = this.shipper.getCost(this.shipmentType, weight);
        return `Shipment with the ID ${shipmentId} will be picked up from ${fromAddress} ${fromZipCode} to ${toAddress} ${toZipCode}
        \nCost = ${cost}
        ${marks?.length ? `\n${marks.join('\n')}`: ''}`;
    }
}
