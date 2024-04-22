const printName = (name, n, count) => {
  if (count === n) return;
  console.log(name);
  printName(name, n, count + 1);
};

const name = "Ashish";
const n = 5;
const count = 0;
printName(name, n, count);
