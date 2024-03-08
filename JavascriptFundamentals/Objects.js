let obj = {
  name: "Ashish",
  age: 23,
  company: "Pragmatic Play",
};

// // to find values from an object
// for (let value of Object.values(obj)) {
//   console.log(value);
// }

// // to find keys from an object
// for (let value of Object.keys(obj)) {
//   console.log(value);
// }

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalary = Object.values(salaries).reduce((acc, curr) => acc + curr);
console.log(sumSalary);

const keysLength = Object.keys(salaries).length;
console.log(keysLength);
