console.log("Calculator.js");

let inputScreen = document.getElementById("input-screen");
let calculator = document.querySelector(".calculator");
let displayScreen = document.querySelector(".display-screen");
let calculationArea = document.querySelector(".calulation-area");
let buttons = document.querySelectorAll(".btn");
let dark = document.querySelector(".dark");
let btnBig = document.querySelector(".btn-big");
let container = document.querySelector(".container");

document.addEventListener("click", function (event) {
  if (event.target.value == "AC") {
    inputScreen.value = " ";
  } else if (event.target.classList.contains("btn")) {
    let btnValue = event.target.innerText;
    console.log(btnValue);
    inputScreen.value += btnValue;
  } else if (event.target.classList.contains("btn-big")) {
    let output = eval(inputScreen.value);
    inputScreen.value = output;
  } else if (event.target.value == "dark") {
    if (calculator.classList.contains("calculator")) {
      calculator.classList.remove("calculator");
      calculator.classList.add("calculator-clicked");

      //   input screen
      inputScreen.style.backgroundColor = "white";
      inputScreen.style.color = "black";
      displayScreen.style.backgroundColor = "white";

      //   calculation area
      calculationArea.style.backgroundColor = "white";

      //   buttons
      buttons.forEach((button) => {
        button.style.backgroundColor = "white";
        button.style.color = "black";
      });

      //   darkBtn
      dark.style.backgroundColor = "white";
      dark.style.color = "black";

      //   btnBig
      btnBig.style.backgroundColor = "white";
      btnBig.style.color = "black";

      //   calculator
      calculator.style.border = "2px solid black";
    } else {
      calculator.classList.remove("calculator-clicked");
      calculator.classList.add("calculator");

      //   input screen
      inputScreen.style.backgroundColor = "black";
      displayScreen.style.backgroundColor = "black";
      inputScreen.style.color = "white";

      //   calculation area
      calculationArea.style.backgroundColor = "black";

      //   buttons
      buttons.forEach((button) => {
        button.style.backgroundColor = "black";
        button.style.color = "white";
      });

      //   darkBtn
      dark.style.backgroundColor = "black";
      dark.style.color = "white";

      //   btnBig
      btnBig.style.backgroundColor = "black";
      btnBig.style.color = "white";

      //   calculator
      calculator.style.border = "2px solid white";
    }
  }
});
