import { ShipmentType, STANDARD_PACKAGE_MAX_WEIGHT } from "./Shipment";

export abstract class Shipper {
    abstract getCost(shipmentType: ShipmentType, weight: number): number;
    abstract getType(): string;
}

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