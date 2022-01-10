import { Item } from './Item';
import { ItemComparator } from './ItemComparator';
import { ItemWeightComparator } from './ItemWeightComparator';

export class Inventory {
    _items: Array<Item>;

    constructor() {
        this._items = [];
    }

    public sort(): void;
    public sort(comparator: ItemComparator): void;
    public sort(comparator?: ItemComparator): void {
        if (comparator && comparator instanceof ItemWeightComparator) {
            this._items.sort((item1, item2) => comparator.compare(item1, item2));
        } else {
            this._items.sort((item1, item2) => item1.compareTo(item2));
        }
    }

    public toString(): string {
        return this._items.join(', ');
    }

    public addItem(item: Item): void {
        this._items.push(item);
    }
} 