// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);
console.log(json);

const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

console.log(JSON.stringify(1)); // 1

// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify("test")); // "test"

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify([1, 2, 3])); // [1,2,3]
