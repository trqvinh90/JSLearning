import { Pages } from "./pages";

export const PagesIterablesMixins = (superClass: any) => class extends superClass {
    pages: Pages;

    constructor(pages: Pages) {
        super();
        this.pages = pages;
    }

    *[Symbol.iterator]() {
        for (const page of (<any>this).pages.pages) {
            yield `${this.toString()}, ${page.toString()}`;
        }
    }
}

