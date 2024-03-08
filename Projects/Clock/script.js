console.log("Stopwatch");

let displayTime = document.querySelector(".displayTime");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".seconds");
let startBtn = document.querySelector(".startBtn");
let stopBtn = document.querySelector(".stopBtn");

function updateTime() {
  let currentDate = new Date();
  hour.textContent = currentDate.getHours();
  minute.textContent = currentDate.getMinutes();
  seconds.textContent = currentDate.getSeconds();
}

let timer;

function stopTimer() {
  console.log("stop");
  clearInterval(timer);
}

function startTimer() {
  console.log("start");
  timer = setInterval(updateTime, 1000);
}
