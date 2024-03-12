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

    unorderedTask.append(li);
    container.appendChild(unorderedTask);
  }

  console.log(inputValue);
  todoinputBox.value = "";
}

//  <ul class="list-group">
//     <li class="list-group-item">An item</li>
//     <li class="list-group-item">A second item</li>
//     <li class="list-group-item">A third item</li>
//     <li class="list-group-item">A fourth item</li>
//     <li class="list-group-item">And a fifth one</li>
//   </ul>;
