let items = [];

const itemsDiv = document.getElementById("tasks")
const inputTask = document.getElementById("task_Input")
const storageKey = "items"

function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) {
        items = JSON.parse(oldItems)
    }
    renderItems()
}
function editTasks(idx){
    const newValue = prompt("Edit task:", items[idx]);
    if(newValue === null) return; // اگه cancel زد
    const trimmedValue = newValue.trim();
    if(!trimmedValue){
        alert("Task cannot be empty!");
        return;
    }

    items[idx] = trimmedValue;
    saveItems();
    renderItems();
}
function renderItems(){
    itemsDiv.innerHTML = null;
    for(const [idx, item] of Object.entries(items)){
        const container = document.createElement("div")
        container.classList.add("task_Container")

        const text = document.createElement("div")
        text.classList.add("task")
        text.textContent = item

        const button = document.createElement("button")
        button.classList.add("button_Task")
        button.textContent = "DELETE"
        button.onclick = ()=>removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)
        itemsDiv.appendChild(container)
        const editButton = document.createElement("button");
        editButton.textContent = "EDIT";
        editButton.onclick = () => editTasks(idx);
        container.appendChild(text);
        container.appendChild(editButton);
        container.appendChild(button);
    }
};
function saveItems(){
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}; 
function addTask(){
    const value = inputTask.value;
    if(!value){
        alert("No Task Was Typed!")
        return
    }
    items.push(value)
    renderItems()
    inputTask.value = ""
    saveItems()
}; 
function removeItem(idx){
    items.splice(idx, 1)
    renderItems()
    saveItems()
};
document.addEventListener("DOMContentLoaded", loadItems)
