import { STANDARD_PACKAGE_MAX_WEIGHT } from "../Shipment";
import { ShipmentType } from "../ShipmentType";
import { Shipper } from "./Shipper";

export class ChicagoSprintShipper extends Shipper {
    getCost(shipmentType: ShipmentType, weight: number): number {
        switch (shipmentType) {
            // .42 per ounce
            case ShipmentType.Letter:
                return 0.42 * weight;
            // .20 per ounce
            case ShipmentType.Package:
                return 0.25 * weight;
            // no charge
            default:
                return (0.25 * STANDARD_PACKAGE_MAX_WEIGHT);
        }
    }
    getType(): string {
        return 'Chicago Sprint';
    }
}