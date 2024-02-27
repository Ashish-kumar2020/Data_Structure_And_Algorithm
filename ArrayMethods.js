// find the element from the array using find method

let arr = [2, 3, 4, 5, 6];
// let res = arr.find((item, index, array) => {
//   if (item === 1) {
//     console.log("Hi");
//   } else {
//     console.log("bye");
//   }
// });

// Filter

let res = arr.filter((item, index, array) => {
  if (item > 5) {
    console.log(`ELement at ${index} is ${item} from the given array ${array}`);
  }
});

let user = [
  {
    id: 1,
    name: "Ashish",
  },
  {
    id: 2,
    name: "Kumar",
  },
  {
    id: 3,
    name: "Singh",
  },
];

user.filter((item, index) => {
  if (item.id >= 2) {
    console.log(item);
  }
});

// Map

arr.map((item, index) => {
  console.log(`Element at index ${index} is ${item}`);
});

// Sort: it sorts the array in asscending or descending order.It mutates the original array
let arr2 = [2, 1, 4, 3, 6, 5];
console.log(arr2.sort((a, b) => b - a));

// Array.isArray
console.log(Array.isArray([]));
