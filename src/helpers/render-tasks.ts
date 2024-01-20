import { Task } from "../types/types";

const render = (tasks: Task[], tasksContainerElement: HTMLElement) => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        // Dodaj warunek sprawdzający, czy nazwa zadania nie jest pusta
        if (task.name.trim() !== "") {
            const taskElement: HTMLElement = document.createElement("li");
            if (task.category) {
                taskElement.classList.add(task.category);
            }
            const id: string = `task-${index}`;

            const labelElement: HTMLLabelElement = document.createElement("label");
            labelElement.innerText = task.name;
            labelElement.setAttribute("for", id);

            const checkboxElement: HTMLInputElement =
                document.createElement("input");
            checkboxElement.type = "checkbox";
            checkboxElement.name = task.name;
            checkboxElement.id = id;
            checkboxElement.checked = task.done;
            checkboxElement.addEventListener("change", () => {
                task.done = !task.done;
            });

            taskElement.appendChild(labelElement);
            taskElement.appendChild(checkboxElement);

            tasksContainerElement.appendChild(taskElement);
        }
    });
    const mainInput = document.querySelector(".input-element")
    mainInput.value = "";
};

export default render;
