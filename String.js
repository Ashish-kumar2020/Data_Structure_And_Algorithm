// Two write multi line string
// let str = `Guests :
//     * Ashish
//     * Kumar
//     * Singh
// `;

// console.log(str.length);

let str1 = "Ashish";
console.log(str1.length);

// Accessing Character
console.log(str1[2]);

// Modifying the string
str1 = "K" + str1[1];
// console.log(str1);

// searching for a substring
let str2 = "Widget with id";
console.log(str2.indexOf("with"));

// searching of all occurence
let str = "As sly as a fox, as strong as an ox";

let target = "as"; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Found at ${foundPos}`);
  pos = foundPos + 1; // continue the search from the next position
}

// it takes two parameter start and end.but it does not include the last index. it is easy to use
console.log(str.slice(0, 5));

// substring: it takes two parameter start and end.but it does not include the last index
console.log(str.substring(0, 5));

// substr:it takes two parameter start and end.but it does not include the last index. it is not supported by modern browser
console.log(str.substr(0, 5));
