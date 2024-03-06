console.log("Stopwatch");

let displayTime = document.querySelector(".displayTime");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".seconds");

function updateTime() {
  let currentDate = new Date();
  hour.textContent = currentDate.getHours();
  minute.textContent = currentDate.getMinutes();
  seconds.textContent = currentDate.getSeconds();
}

setInterval(updateTime, 1000);
