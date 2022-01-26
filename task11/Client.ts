import { Shipment } from './Shipment';
import { DoNotLeaveShipmentDecorator, FragileShipmentDecorator, ReturnReceiptShipmentDecorator } from './ShipmentDecorator';

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
console.log(item);
console.log(item.ship()); // bug: log 3 identical marks instead of different marks