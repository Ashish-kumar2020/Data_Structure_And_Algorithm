// Map: it is a collection of keyed item just like object but in map key can be of any type

let map = new Map(); // declaration
map.set("1", "Ashish");
map.set(2, "Kumar");
map.set(true, "Singh");

// console.log(map.get(2)); // to get the value from the map/if the value is not present then it will return undefined
// console.log(map.size); // to get the map size

// map[map] = "singh";
// console.log(map);

// iteration over map

// print only the keys
for (let val of map.keys()) {
  //   console.log("keys : ", val);
}

// print only the values
for (let val of map.values()) {
  //   console.log("values : ", val);
}

// print whole map
for (let val of map) {
  //   console.log("value : ", val);
}

// foreach
map.forEach((item, index) => {
  //   console.log(`${index} at ${item}`);
});

// Set : in this we can set value without key. and a single value can be added only once

let set = new Set();

set.add("Ashish");
set.add("Kumar");
set.add("Singh");
set.add("Ashish Kumar SIngh");

for (let val of set) {
  console.log(val);
}

// foreach
set.forEach((item, index) => {
  console.log(index, item);
});
