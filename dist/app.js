import { TaskClass } from "./classes/tasks.js";
import { render as renderCategories } from "./helpers/render-categories.js";
import renderTasks from "./helpers/render-tasks.js";
import { Category } from "./types/types.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAL,
];
const tasks = [
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
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});
const task = ["zrobić klatę", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
addTask({ name: taskName, category: taskCategory, done: taskDoneStatus });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
const taskClassInstance = new TaskClass("zadanie", false, Category.GYM);
taskClassInstance.logCreationDate();
