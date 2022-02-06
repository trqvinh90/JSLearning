import { Shipment } from './Shipment';
import { DoNotLeaveShipmentDecorator } from './decorators/DoNotLeaveShipmentDecorator';
import { FragileShipmentDecorator } from './decorators/FragileShipmentDecorator';
import { ReturnReceiptShipmentDecorator } from './decorators/ReturnReceiptShipmentDecorator';


let item: Shipment = new Shipment({
    shipmentId: 17263,
    fromAddress: '12292 4th Ave SE, Bellevue, Wa',
    fromZipCode: '92021',
    toAddress: '1313 Mockingbird Lane, Tulsa, Ok',
    toZipCode: '67721',
    weight: 170,
});
item = new FragileShipmentDecorator(item);
item = new DoNotLeaveShipmentDecorator(item);
item = new ReturnReceiptShipmentDecorator(item);
item.ship(); 

