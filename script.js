const lg = console.log;

const userInput = document.querySelector("#user-input");
const addNow = document.querySelector("#add-now");
const todoList = document.querySelector("#todo-list");

// add todo list function

function addToDoList() {
  if (userInput.value !== "") {
    const li = document.createElement("li");
    const todo = document.createElement("SPAN");
    todo.textContent = userInput.value;
    li.appendChild(todo);

    const deleteBtn = document.createElement("SPAN");
    deleteBtn.textContent = "❌";
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    saveDataToLocalStorage();
  } else {
    alert("Please enter a todo list");
  }

  userInput.value = "";
}
addNow.addEventListener("click", () => addToDoList());

todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveDataToLocalStorage();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveDataToLocalStorage();
  }
});



function saveDataToLocalStorage(){
    localStorage.setItem("data", todoList.innerHTML);
}

// get data from local storage

function getDataFromLocalStorage(){
    const localData = localStorage.getItem("data");
    todoList.innerHTML = localData;
    lg(localData)
}
getDataFromLocalStorage()