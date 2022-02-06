import { Shipper } from "./shipper/Shipper";
import { AirEeastShipper } from "./shipper/AirEeastShipper";
import { ChicagoSprintShipper } from "./shipper/ChicagoSprintShipper";
import { PacificParcelShipper } from "./shipper/PacificParcelShipper";
import { State } from "./State";
import { ShipmentType } from "./ShipmentType";

export const STANDARD_LETTER_MAX_WEIGHT = 15; // ounces
export const STANDARD_PACKAGE_MAX_WEIGHT = 160; // ounces

let uniqueId = 1;

export class Shipment {
    private state: State;

    constructor(state: State) {
        if (!state.shipmentId) {
            state.shipmentId = uniqueId;
            uniqueId++;
        }
        this.state = state;
    }

    
    public get stateInfo() : State {
        return this.state;
    }
    
    public get shipper() : Shipper {
        const zipCodeFirstChar = this.state.fromZipCode[0] ?? '';
        switch (zipCodeFirstChar) {
            case '1':
            case '2':
            case '3':
                return new AirEeastShipper();

            case '4':
            case '5':
            case '6':
                    return new ChicagoSprintShipper();

            case '7':
            case '8':
            case '9':
                return new PacificParcelShipper();

            default:
                return new AirEeastShipper();
        }
    }
    
    
    public get shipmentType() : ShipmentType {
        const { weight } = this.state;
        if (weight <= STANDARD_LETTER_MAX_WEIGHT) {
            return ShipmentType.Letter;
        } else if (weight <= STANDARD_PACKAGE_MAX_WEIGHT) {
            return ShipmentType.Package;
        } else {
            return ShipmentType.Oversize;
        } 
    }

    public getMarks(): string[] {
        if (!this.state.marks) {
            this.state.marks = [];
        }
        return this.state.marks;
    }
    
    public ship(): string {
        const { shipmentId, fromAddress, fromZipCode, toAddress, toZipCode, weight } = this.state;
        const cost = this.shipper.getCost(this.shipmentType, weight);
        return `Shipment with the ID ${shipmentId} will be picked up from ${fromAddress} ${fromZipCode} to ${toAddress} ${toZipCode}
        \nCost = ${cost}
        \n${this.getMarks().join('\n')}`;
    }
}
