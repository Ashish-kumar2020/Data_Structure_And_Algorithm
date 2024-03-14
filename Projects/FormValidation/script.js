console.log("Form Validation");
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userPassword = document.querySelector("#userPassword");
let confirmPassword = document.querySelector("#confirmPassword");
let phoneNumber = document.querySelector("#phoneNumber");
let count = 1;

let details = {
  name: "Ashish Singh",
  email: "ashishsinghk2020@gmail.com",
  password: "12345",
  phoneNumber: "07302433809",
};
details.confirmPassword = details.password;
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
    localStorage.setItem("userData", JSON.stringify(user));
    count++;

    validateData(user);
  }
}
function validateData(userDetails) {
  if (
    userDetails.userName === details.name &&
    userDetails.userEmail === details.email &&
    userDetails.userPassword === details.password &&
    userDetails.confirmPassword === details.password &&
    userDetails.phoneNumber === details.phoneNumber
  ) {
    console.log("User Login");
    window.location.href = "login.html";
  } else {
    console.log("User details do not match.");
    window.location.href = "register.html";
  }
}
