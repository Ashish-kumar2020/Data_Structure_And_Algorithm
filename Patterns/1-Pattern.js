/*

    * * * * *
    * * * * *
    * * * * *
    * * * * *
    * * * * *

*/

const printPattern = (row, col) => {
  for (let i = 0; i < row; i++) {
    let pattern = "";
    for (let j = 0; j < col; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
};

const row = 5;
const col = 5;
printPattern(row, col);
