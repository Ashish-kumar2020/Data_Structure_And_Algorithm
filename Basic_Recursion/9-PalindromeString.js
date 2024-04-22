const palindrome = (i, n, str) => {
  if (i >= n / 2) return true;
  if (str[i] != str[n - i - 1]) return false;
  return palindrome(i + 1, n, str);
};

const i = 0;
const str = "madam";
const n = str.length;
console.log(palindrome(i, n, str));
