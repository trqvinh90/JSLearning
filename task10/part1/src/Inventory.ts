import { Item } from './Item';
import { ItemComparator } from './ItemComparator';
import { ItemWeightComparator } from './ItemWeightComparator';

export class Inventory {
    items: Array<Item>;

    constructor() {
        this.items = [];
    }

    public sort(): void;
    public sort(comparator: ItemComparator): void;
    public sort(comparator?: ItemComparator): void {
        if (comparator && comparator instanceof ItemWeightComparator) {
            this.items.sort((item1, item2) => comparator.compare(item1, item2));
        } else {
            this.items.sort((item1, item2) => item1.compareTo(item2));
        }
    }

    public toString(): string {
        return this.items.join(', ');
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }
} 