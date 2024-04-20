/*
    *
    * *
    * * *
    * * * *
    * * * * *
    * * * * * *

*/

const printPattern = (row) => {
  for (let i = 0; i < row; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
};

const row = 5;

printPattern(row);
