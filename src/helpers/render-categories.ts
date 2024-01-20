import { Category } from "../types/types.js";

const handleCategoryChange = (category: Category) => {
    if (category === Category.GENERAL) {
        document.body.style.background = "black";
    } else if (category === Category.GYM) {
        document.body.style.background = "blue";
    } else if (category === Category.HOBBY) {
        document.body.style.background = "pink";
    } else if (category === Category.WORK) {
        document.body.style.background = "purple";
    } else if (category === Category.SOCIAL) {
        document.body.style.background = "orange";
    } else {
        const never: never = category;
        console.log(never);
    }
};

export const render = (
    categories: Category[],
    categoriesContainerElement: HTMLElement,
    inputChangeCallback: (category: Category) => void
) => {
    categories.forEach((category) => {
        const categoryElement: HTMLElement = document.createElement("li");

        const radioInputElement: HTMLInputElement =
            document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);

        categoriesContainerElement.appendChild(categoryElement);
    });
};