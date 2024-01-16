const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        title: "wyrzucić śmieci",
        done: false,
        category: "general"
    },
    {
        title: "Pójść na siłownie",
        done: true,
        category: "gym"
    }
];
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
const tasksContainerElement = document.querySelector(".tasks");
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const labelElement = document.createElement("label");
        const id = `task-${index}`;
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.title;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
    event.preventDefault();
    if (taskNameInputElement.value.trim() !== "") {
        addTask({
            title: taskNameInputElement.value,
            done: false,
            category: selectedCategory
        });
        render();
        taskNameInputElement.value = "";
    }
});
addTask({ title: "specjalne zadania od szefa", category: "gym", done: false });
renderCategories();
render();
export {};
