const groseriesList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const listItems = document.querySelectorAll("li.task");
const input = document.querySelector("input");

const renderList = () => {
    groseriesList.forEach((toDoElement, key) => {
        toDoElement.id = key;
        ul.appendChild(toDoElement);
    })
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    groseriesList.splice(index, 1);
    const liItems2 = document.querySelectorAll("li.task").length;
    taskNumber.textContent = liItems2;
    ul.textContent = "";
    renderList()
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = titleTask + "<button>Delete</button>";
    groseriesList.push(task);
    ul.textContent = "";
    renderList()
    ul.appendChild(task);
    input.value = "";
    const liItems = document.querySelectorAll("li.task").length;
    taskNumber.textContent = liItems;
    task.querySelector("button").addEventListener("click", removeTask);
}

form.addEventListener("submit", addTask)