// TC - O(n)
// when we divide a number by 10 it gives an integer, so we will loop through the number and takes count of each iteration and return that count value
const countDigit = (n) => {
  let count = 0;
  while (n) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
};

// console.log(countDigit(n));

// Bettter Approach: convert the number into string then find the length of that string
// TC - O(1)
const countDigitBetter = (n) => {
  let str = n.toString();
  return str.length;
};
const n = 10000000;
console.log(countDigitBetter(n));
