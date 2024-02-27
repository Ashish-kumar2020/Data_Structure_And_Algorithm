let name = ["Ashish", "Singh"];
let [firstName, lastName] = name;
// console.log(firstName, lastName);

// if we want to skip any value from an array: to skip a value just add empty space it will automatically skip
let name1 = ["Ashish", "Kumar", "Singh"];
let [fName, , LName] = name1;
// console.log(fName, LName);

let [one, two, three] = "123";
// console.log(one, two, three);

let user = {
  name: "Ashish",
  age: 23,
};
for (let [name, age] of Object.entries(user)) {
  //   console.log(name, age);
}

// swapping
let a = "abc";
let b = "xyz";
[a, b] = [b, a];
// console.log(a, b);

// Rest Operator
let [name2, name3, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

// console.log(rest);
// console.log(name2, name3);

// Default value
const [name4 = "Ashish", surname = "Singh"] = ["Kumar"];
// console.log(name4, surname);

// Object destructring

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

const { title, width, height } = options;
console.log(title, width, height);
