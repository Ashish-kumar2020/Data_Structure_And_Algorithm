/*
    the problem will be divided into two parts.
    one will be: we need to find the length of the digit and store the length in a variable
    then after find the individual digit and multiply the number by count time(whatever will be the length of the digit). store the value in a variable and compare it with the original number if it is equal then it is a armstrong Number and if not then it is not a armstrong number
*/

const armstrongNumber = (n) => {
  let originalNumber = n;
  let count = 0;
  while (n) {
    n = Math.floor(n / 10);
    count++;
  }
  let ans = 0;
  let temp = originalNumber;
  while (temp) {
    let num = Math.floor(temp % 10);
    ans += Math.pow(num, count);
    temp = Math.floor(temp / 10);
  }
  return ans;
};

const n = 153;

const ans = armstrongNumber(n);
if (ans === n) {
  console.log("Armstrong Number");
} else {
  console.log("Not Armstrong Number");
}
