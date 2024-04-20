/*
    first we will store the orignal number in a variable
    then we will reverse the number
    after reversing the number we will compare the reverse number with the orginal number and check if both are equal then the given number is palindrome and if they are not equal then the given number is not palindrome
*/

const palindrome = (n) => {
  let ogNum = n;
  let val = 0;
  while (n) {
    let lastDigit = Math.floor(n % 10);
    val = val * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  if (ogNum === val) {
    console.log("isPalindrome");
  } else {
    console.log("Not Palindrome");
  }
};

palindrome(1212);
