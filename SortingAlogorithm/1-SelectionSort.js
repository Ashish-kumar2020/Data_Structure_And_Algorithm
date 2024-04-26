const selectionSOrt = (arr, n) => {
  for (let i = 0; i <= n - 2; i++) {
    let minELe = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[minELe]) {
        minELe = j;
      }
    }
    [arr[minELe], arr[i]] = [arr[i], arr[minELe]];
  }
  return arr;
};

const arr = [13, 46, 24, 52, 20, 9];
const n = arr.length;
console.log(selectionSOrt(arr, n));
