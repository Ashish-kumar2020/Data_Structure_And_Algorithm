console.log("Todo-List");

function goToLoginPage() {
  console.log("Login page");
  window.open("Login.html");
}

let todoinputBox = document.querySelector("#todoinputBox");
let submitBtn = document.querySelector("#submitBtn");
let container = document.querySelector("#container");

function addTodo() {
  let inputValue = todoinputBox.value;
  if (inputValue.length === 0) {
    alert("Todo cannot be empty");
  } else {
    let unorderedTask = document.createElement("ul");
    unorderedTask.classList = "list-group";

    let li = document.createElement("li");
    li.classList = "list-group-item";
    li.style.marginBottom = "12px";
    li.textContent = inputValue;

    // delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.classList = "btn btn-danger deleteBtn";
    deleteBtn.innerHTML = "Delete Todo";
    deleteBtn.addEventListener("click", deleteTodo);

    // edit Button
    let editBtn = document.createElement("button");
    editBtn.classList = "btn btn-info editBtn";
    editBtn.innerHTML = "Edit Todo";
    editBtn.addEventListener("click", editTodo);

    li.append(deleteBtn);
    li.append(editBtn);
    unorderedTask.append(li);
    container.appendChild(unorderedTask);
  }

  console.log(inputValue);
  todoinputBox.value = "";
}

function deleteTodo() {
  // this will return the the todo which we have to delete
  let listItem = event.target.parentElement;
  let unorderedTask = listItem.parentElement;
  unorderedTask.removeChild(listItem);
  console.log("Todo Deleted", unorderedTask);
}

function editTodo() {
  console.log("Edit Todo");
}
