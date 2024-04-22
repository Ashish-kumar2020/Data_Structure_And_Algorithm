/*
    TC = O(2^n)
*/

const fibonnaci = (n) => {
  if (n === 0 || n === 1) return n;
  return fibonnaci(n - 1) + fibonnaci(n - 2);
};

const n = 7;
console.log(fibonnaci(n));
