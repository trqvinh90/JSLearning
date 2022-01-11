import { Page } from "./page";

export class Pages {
    private pages: Array<Page>;

    constructor(pages: Array<Page>) {
        this.pages = pages;
    }
   
    public get length() : number {
        return this.pages.length;
    }

    public printPageDetail(index: number) : string {
        return this.pages[index].toString();
    }
}