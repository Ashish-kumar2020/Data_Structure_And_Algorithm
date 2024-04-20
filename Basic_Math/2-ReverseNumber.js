/*
    we will iterate over the number
    we will take mod of the given number it will return us the last value
    then we add that value to a variable
    and then we will remove the last value from the given number to perform the operation on rest number
*/

const reverseNumber = (n) => {
  let digit = 0;
  while (n) {
    let revNum = Math.floor(n % 10);
    digit = digit * 10 + revNum;
    n = Math.floor(n / 10);
  }
  return digit;
};

console.log(reverseNumber(12345));
