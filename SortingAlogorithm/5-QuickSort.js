const partition = (arr, low, high) => {
  let pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
};

const qs = (arr, low, high) => {
  if (low <= high) {
    let pivotIdx = partition(arr, low, high);
    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, high);
  }
};

const quickSort = (arr) => {
  qs(arr, 0, arr.length - 1);
  return arr;
};

const arr = [4, 1, 7, 9, 3, 0];
console.log(quickSort(arr));
