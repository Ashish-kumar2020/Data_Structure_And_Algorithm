/*

    TC = O(n/2) / O(n)
    
*/

const reverseArray = (i, j, arr) => {
  if (i >= j) return arr;
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return reverseArray(i + 1, j - 1, arr);
};

const i = 0;
const arr = [1, 2, 3, 4, 5];
const j = arr.length - 1;
console.log(reverseArray(i, j, arr));
