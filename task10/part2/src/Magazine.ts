import { Item } from "./Item";
import { Pages } from "./pages";

export class Magazine extends Item {
    private title: string;

    constructor(title: string, pages: Pages) {
        super(pages);
        this.title = title;
        this.pages = pages;
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.length}`;
    }
}