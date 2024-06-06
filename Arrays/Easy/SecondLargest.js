const secondLargest = (arr, n) => {
  let firstMax = -Infinity;
  let secMax = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > firstMax) {
      secMax = firstMax;
      firstMax = arr[i];
    }
    if (secMax < arr[i] && arr[i] < firstMax) {
      secMax = arr[i];
    }
  }
  return secMax;
};

const arr = [2, 5, 1, 309, 100];
const n = arr.length;

console.log(secondLargest(arr, n));
