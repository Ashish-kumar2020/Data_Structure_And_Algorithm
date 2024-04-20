/*
    1
    1 2
    1 2 3 
    1 2 3 4
    1 2 3 4 5

*/

const printPattern = (row) => {
  for (let i = 0; i <= row; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    console.log(pattern);
  }
};

const row = 5;

printPattern(row);
