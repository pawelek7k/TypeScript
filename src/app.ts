
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button")

type Category = "general" | "work" | "hobby" | "gym";

interface Task {
    title: string;
    done: boolean;
    category?: Category;
}

const categories: string[] = ["general", "work", "gym", "hobby"]


const tasks: Task[] = [
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
]

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const render = () => {
    tasksContainerElement.innerHTML = ''
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement
        ("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const labelElement: HTMLLabelElement = document.createElement("label");
        const id: string = `task-${index}`
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.title;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done
        })

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement)

        tasksContainerElement.appendChild(taskElement)

    })
};

const addTask = (task: Task) => {
    tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
    const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked");
    const selectedCategory: Category = selectedRadioElement.value as Category;
    event.preventDefault();
    addTask({title: taskNameInputElement.value, done: false, category: selectedCategory });
    render()
    taskNameInputElement.value = "";
})

addTask({title: "specjalne zadania od szefa",category: "gym", done: false})
render()