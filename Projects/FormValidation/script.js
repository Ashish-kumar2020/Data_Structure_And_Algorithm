console.log("Form Validation");

let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userPassword = document.querySelector("#userPassword");
let confirmPassword = document.querySelector("#confirmPassword");
let phoneNumber = document.querySelector("#phoneNumber");
let count = 1;
function registerDetails() {
  if (
    userName.value.length === 0 ||
    userEmail.value.length === 0 ||
    userPassword.value.length === 0 ||
    confirmPassword.value.length === 0 ||
    phoneNumber.value.length === 0
  ) {
    alert("Fields cannot be empty");
  } else {
    // setting details in local storage
    let user = {
      userName: userName.value,
      userEmail: userEmail.value,
      userPassword: userPassword.value,
      confirmPassword: confirmPassword.value,
      phoneNumber: phoneNumber.value,
    };
    console.log(user);
    localStorage.setItem(`user${count}`, JSON.stringify(user));
    count++;
  }
}
