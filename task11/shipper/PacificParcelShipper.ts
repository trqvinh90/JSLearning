import { STANDARD_PACKAGE_MAX_WEIGHT } from "../Shipment";
import { ShipmentType } from "../ShipmentType";
import { Shipper } from "./Shipper";

export class PacificParcelShipper extends Shipper {
    getCost(shipmentType: ShipmentType, weight: number): number {
        switch (shipmentType) {
            // .51 per ounce
            case ShipmentType.Letter:
                return 0.51 * weight;
            // .19 per ounce
            case ShipmentType.Package:
                return 0.19 * weight;
            // .02 added per ounce in addition to standard package charge
            default:
                return (0.25 * STANDARD_PACKAGE_MAX_WEIGHT) + (0.02 * (weight - STANDARD_PACKAGE_MAX_WEIGHT));
        }
    }
    getType(): string {
        return 'Pacific Parcel';
    }
}