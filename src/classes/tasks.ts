import { Category } from "../types/types";

export class TaskClass {
    name: string;
    done: boolean;
    category?: Category;
    createdAt: Date;

    constructor(
        name: string,
        done: boolean,
        category: Category) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date()
    }

    logCreationDate() {
        console.log(`task został stworzony ${this.createdAt}`)
    }
}
