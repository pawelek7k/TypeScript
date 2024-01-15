const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
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
    const selectedCategory = selectedRadioElement.value;
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    render();
    taskNameInputElement.value = "";
});
addTask({ title: "specjalne zadania od szefa", category: "gym", done: false });
render();
