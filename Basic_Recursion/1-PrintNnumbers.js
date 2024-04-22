const printNNumbers = (n, count) => {
  if (count == n) return;
  console.log(count);
  printNNumbers(n, count + 1);
};

const n = 5;
const count = 0;
printNNumbers(n, count);
