const inputElement = document.querySelector(".new-task-input")
const addTaskButton = document.querySelector(".new-task-button")

const tasksContainer = document.querySelector('.tasks-container')

const validateInput = () => inputElement.value.trim().lenght > 0;

const handleAddTask = () => {
    const inputValid = validateInput();

    console.log(inputElementIsValid);

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }

    const taskItenContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener('click', () => handleClick())

    const deleteItem = document.createElement('i');
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa trash-alt");

    deleteItem.addEventListener('click' , () => 
        handleDeleteClick(taskItemContainer, taskContent)
    );

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);
    
    tasksContainer.appendChild(taskItemContainer);
    
    inputElement.value = "";

    updateLocalStorage();
};

const handleClick = (taskContent) => {
    const tasks = tanksContainer.childNodes;

    for (const task of tasks) {
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)

        if (currentTaskIsBeingClicked) {
            task.firtsChild.classList.toggle("completed");
        }
    }

    updateLocalStorage();
};

const handleDeleteClick = (taskContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        const currentTaskIsBeingClicked = task.firtsChild.isSameNode(taskContent)

        if (currentTaskIsBeingClicked) {
            taskItemContainer.remove();
        }
    }

    updateLocalStorage();
};

const handleImputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.romeve("error");
    }
};

const updateLocalStorage = () => {
    const task = tasksContainer.childNodes;

    const localStorageTasks = [ ... tasks].map(task => {
        const content = task.firtsChild;
        const isCompleted = content.classList.contains('completed')

        return {description: content.innerText, isCompleted: isCompleted}
    });

    localStorage.setItem('tasks', JSON.stringify(localStorageTasks));
};

const refreshTasksUsingLocalStorage = () => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'))

if (!tasksFromLocalStorage) return;

    for (const task of tasksFromLocalStorage) {
        const taskItenContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');
    taskContent.innerText = task.description;

    if (task.isCompleted) {
        taskContent.classList.add('completed');
    }

    taskContent.addEventListener('click', () => handleClick(taskContent));

    const deleteItem = document.createElement('i');
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa trash-alt");

    deleteItem.addEventListener('click' , () => 
        handleDeleteClick(taskItemContainer, taskContent)
    );

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);
    
    tasksContainer.appendChild(taskItemContainer);
    }
};

refreshTasksUsingLocalStorage();

addTaskButton.addEventListener("click", () => handleAdd Task ());

inputElement.addEventListener('change', () => handleInputChance())
