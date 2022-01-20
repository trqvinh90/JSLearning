import { Item } from "./Item";
import { Pages } from "./pages";

export class Comics extends Item {
    private title: string;
    private author: string;
    private artist: string;

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super(pages);
        this.title = title;
        this.author = author;
        this.artist = artist;
        this.pages = pages;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.length}`;
    }
}
