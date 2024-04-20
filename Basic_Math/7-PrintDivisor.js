/*
    start a loop from 0 to the given number and checks if the number%i === 0 then push it to an array becoz the ith number is the divisor of that number
*/

const printDivisor = (n) => {
  let num = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      num.push(i);
    }
  }
  return num;
};

console.log(printDivisor(97));
