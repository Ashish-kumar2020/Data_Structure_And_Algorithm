/*
    Prime Number - A number which is divisible by itself and one is known as prime number.
    if(num <= 1) then number is not prime
    and if (num % 2 == 0) then it is also not a prime number
*/
const checkPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % 2 == 0) {
      return false;
    }
  }
  return true;
};

console.log(checkPrime(26));
