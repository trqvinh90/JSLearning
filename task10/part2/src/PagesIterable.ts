import { Pages } from "./pages";

export const PagesIterablesMixins = (superclass: any) => class extends superclass {
    pages: Pages;

    constructor(pages: Pages) {
        super();
        this.pages = pages;
    }

    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                if (index < this.pages.length) {
                    let outputString = this.toString();
                    outputString += `, ${this.pages.printPageDetail(index)}`;
                    index++;
                    return { value: outputString, done: false }
                } else {
                    return { value: '', done: true }
                }
            }
        }
    }
}

