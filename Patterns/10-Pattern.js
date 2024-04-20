/*
            *     
          * * *    
        * * * * *   
      * * * * * * *  
    * * * * * * * * * 
  * * * * * * * * * * *

*/

const printPattern = (row) => {
  for (let i = 0; i < row; i++) {
    let pattern = "";
    let space = "";
    for (let j = 0; j < row - i - 1; j++) {
      space += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      pattern += "* ";
    }
    for (let j = 0; j < row - i - 1; j++) {
      space += " ";
    }

    console.log(space, pattern);
  }
};

const row = 5;

printPattern(row);
