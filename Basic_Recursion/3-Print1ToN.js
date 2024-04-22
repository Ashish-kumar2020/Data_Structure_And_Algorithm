const print1ToN = (n, count) => {
  if (count === n) return;
  console.log(count);
  print1ToN(n, count + 1);
};

const n = 10;
const count = 0;
print1ToN(n, count);
