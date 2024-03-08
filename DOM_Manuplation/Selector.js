// Searching: getElement*, querySelector*

// it find the id with given name and search in the dom tree and return that complete element
let search = document.getElementById("search");
// console.dir(search);

// querySelectorAll: it returns a node list of all the elements
let element = document.querySelectorAll("ul > li:last-child");
for (let elem of element) {
  //   console.log(elem);
}

// querySelector - returns the first element for the given CSS selector.

let elem = document.body;
document.body.innerHTML = "Hi";
document.body.innerHTML = "<b>test";
console.log(elem.innerHTML);
console.log(search.textContent);
