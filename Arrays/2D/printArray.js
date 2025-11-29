/*
    1.Print 2D Array
    Given a 2D array, print all elements row-wise.
*/

function print2DArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let row = "";
    for (let j = 0; j < arr[i].length; j++) {
      row += arr[i][j] + "";
    }
    console.log(row.trim())
  }
  return arr;
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

print2DArray(arr)