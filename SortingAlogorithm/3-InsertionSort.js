const insertionSort = (arr, n) => {
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  return arr;
};

const arr = [6, 5, 4, 3, 2, 1];
const n = arr.length;
console.log(insertionSort(arr, n));
