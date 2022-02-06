import { STANDARD_PACKAGE_MAX_WEIGHT } from "../Shipment";
import { ShipmentType } from "../ShipmentType";
import { Shipper } from "./Shipper";

export class AirEeastShipper extends Shipper {
    getCost(shipmentType: ShipmentType, weight: number): number {
        switch (shipmentType) {
            // .39 per ounce
            case ShipmentType.Letter:
                return 0.39 * weight;
            // .025 per ounce
            case ShipmentType.Package:
                return 0.25 * weight;
            // $10 flat in addition to standard package charge
            default:
                return (0.25 * STANDARD_PACKAGE_MAX_WEIGHT) + 10;
        }
    }
    getType(): string {
        return 'Air East';
    }
}