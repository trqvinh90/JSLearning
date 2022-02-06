import { ShipmentType } from "../ShipmentType";

export abstract class Shipper {
    abstract getCost(shipmentType: ShipmentType, weight: number): number;
    abstract getType(): string;
}





