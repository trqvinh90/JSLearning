import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        if (first._weight > second._weight) {
            return 1;
        } else if (first._weight < second._weight) {
            return -1;
        } else {
            return first.compareTo(second);
        }
    }
}
