const secondLargest = (arr, n) => {
  let firstMax = -Infinity;
  let secmax = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > firstMax) {
      firstMax = arr[i];
    }
    if (secmax < arr[i] && arr[i] < firstMax) {
      secmax = arr[i];
    }
  }
  return secmax;
};

const arr = [2, 5, 1, 3, 4];
const n = arr.length;
console.log(secondLargest(arr, n));
