const bubbleSort = (arr, n) => {
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

const arr = [13, 46, 24, 52, 20, 9];
const n = arr.length;
console.log(bubbleSort(arr, n));
