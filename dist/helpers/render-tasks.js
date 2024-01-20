const render = (tasks, tasksContainerElement) => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        // Dodaj warunek sprawdzający, czy nazwa zadania nie jest pusta
        if (task.name.trim() !== "") {
            const taskElement = document.createElement("li");
            if (task.category) {
                taskElement.classList.add(task.category);
            }
            const id = `task-${index}`;
            const labelElement = document.createElement("label");
            labelElement.innerText = task.name;
            labelElement.setAttribute("for", id);
            const checkboxElement = document.createElement("input");
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
};
export default render;
