const largestElement = (arr, n) => {
  let maxEle = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > maxEle) {
      maxEle = arr[i];
    }
  }
  return maxEle;
};

const arr = [2, 5, 1, 3, 0];
const n = arr.length;
console.log(largestElement(arr, n));
