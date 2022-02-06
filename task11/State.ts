export interface State {
    shipmentId: number;
    toAddress: string;
    fromAddress: string;
    toZipCode: string;
    fromZipCode: string;
    weight: number; // per ounces
    marks?: string[];
}