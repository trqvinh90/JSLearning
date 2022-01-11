import { Pages } from "./pages";

export abstract class Item {
    pages: Pages;

    constructor(pages: Pages) {
        this.pages = pages;
    }

    abstract toString(): string;

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
