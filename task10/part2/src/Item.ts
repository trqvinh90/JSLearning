import { PagesIterablesMixins } from "./PagesIterable";

export abstract class Item extends PagesIterablesMixins(Object) {
    abstract toString(): string;
}
