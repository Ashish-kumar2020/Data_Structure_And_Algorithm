/*
    * * * * * *
    * * * * * 
    * * * * 
    * * * 
    * * 
    * 

*/

const printPattern = (row) => {
  for (let i = row; i > 0; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    console.log(pattern);
  }
};

const row = 5;

printPattern(row);
