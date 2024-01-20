import { TaskClass } from "./classes/tasks.js";
import { render as renderCategories } from "./helpers/render-categories.js";
import renderTasks from "./helpers/render-tasks.js";
import { Category, Task } from "./types/types.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
    document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAL,
];

const tasks: Task[] = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: Category.HOBBY,
    },
    {
        name: "Pójść na siłkę",
        done: true,
        category: Category.GYM,
    },
    {
        name: "Nakarmić koty",
        done: false,
        category: Category.WORK,
    },
];

const addTask = (task: Task) => {
    tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});

type TaskAsTuple = [string, Category, boolean];


const task: TaskAsTuple = ["zrobić klatę", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2]

addTask({ name: taskName, category: taskCategory, done: taskDoneStatus });
renderCategories(
    categories,
    categoriesContainerElement,
    updateSelectedCategory
);
renderTasks(tasks, tasksContainerElement);

const taskClassInstance = new TaskClass(
    "zadanie",
    false,
    Category.GYM
);

taskClassInstance.logCreationDate()