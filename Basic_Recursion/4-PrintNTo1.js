const printNTo1 = (count) => {
  if (count === 0) return;
  console.log(count);
  printNTo1(count - 1);
};

const count = 10;
printNTo1(count);
