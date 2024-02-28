// let currentTime = new Date().getFullYear(); // return the current year
// let currentTime = new Date().getDate(); // return the current date
// let currentTime = new Date().getDay(); // return the current day of week (for moday it is 1 and tuesday -2 same for other)
// let currentTime = new Date().getHours(); // return the current hour
// let currentTime = new Date().getMinutes(); // return current miniute
// let currentTime = new Date().getMonth(); // return the current month but it starts the months counting from 0(ex - January it is 0 for feb it is 1)
// let currentTime = new Date().getTime();
// console.log(currentTime);

// Setting Date component
// let today = new Date();
// today.setHours(0); // this will set the hour to 0
// console.log(today);

// Auto correct : if we put out of index value then it will automatically calculate the next month date
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
// console.log(date);

let now = Date.now();
console.log(now);
