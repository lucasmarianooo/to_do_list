const inputElement = document.querySelector(".new-task-input")
const addTaskButton = document.querySelector(".new-task-button")

const validateInput = () => inputElement.value.trim().lenght > 0;

const handleAddTask = () => {
    const inputValid = validateInput();

    console.log(inputElementIsValid);

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }
};

const handleImputChange = () => {
    const imputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
}

addTaskButton.addEventListener("click", () => handleAdd Task ());

inputElement.addEventListener('change', () => handleInputChance())
