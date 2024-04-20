/*
    1
    2 2
    3 3 3 
    4 4 4 4
    5 5 5 5 5

*/

const printPattern = (row) => {
  for (let i = 1; i <= row; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += i + " ";
    }
    console.log(pattern);
  }
};

const row = 5;

printPattern(row);
