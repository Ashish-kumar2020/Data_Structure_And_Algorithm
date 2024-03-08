// create a object

let user = new Object(); // constructor method

// Add property to object
user.name = "Ashish";
user.age = 23;

// delete a property
delete user.age;

// adding multiword key
user["is Admin"] = true;

// Accesing multi word property
// console.log(user["is Admin"]);

// Object property shorthand
function makeUser(name, age) {
  return {
    name,
    age,
  };
}
// console.log(makeUser("ashish", 23));

// Iterating over object
let newUser = {
  name: "Ashish",
  age: 23,
  address: "Noida",
  company: "Pragmatic Play",
};

// for (let key in newUser) {
//   console.log(key, " - ", newUser[key]);
// }

// Object reference and copying
let obj1 = {};
let obj2 = {};
// console.log(obj1 == obj2); // false: because the memory address of both the objec6 are not same

// cloning an object
let clone = {};
for (let key in newUser) {
  clone[key] = newUser[key];
}
clone.company = "Arries Solutions Pvt.Ltd";
for (let key in clone) {
  console.log(key + " - " + clone[key]);
}

// Object.assign
let p1 = { canTalk: true };
let p2 = { canListne: false };
Object.assign(newUser, p1, p2);
console.log(newUser);
