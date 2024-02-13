let newUser = {
  name: "Ashish",
  age: 23,
  address: "Noida",
  company: "Pragmatic Play",
};

newUser.sayHi = function () {
  console.log("Heeloo");
};
// newUser.sayHi();

let newUser2 = {
  name: "Ashish",
  age: 23,
  address: "Noida",
  company: "Pragmatic Play",
  sayHello() {
    console.log(this.name);
  },
};

// newUser2.sayHello();

let user = {
  name: "Pete",
  sayHii() {
    let arrow = () => console.log(this.name);
    arrow();
  },
};

// user.sayHii();

// Optional chaining  : If an object does not have the property which we are searching for then it will not give the error upfront instead it will return undefined.
console.log(newUser2?.class?.state);
