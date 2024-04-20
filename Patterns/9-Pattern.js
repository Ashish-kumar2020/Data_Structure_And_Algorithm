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

const printInvertedPattern = () => {
  for (let i = 0; i < row; i++) {
    let pattern = "";
    let space = "";
    for (let j = 0; j < i; j++) {
      space += " ";
    }
    for (let k = 0; k < 2 * row - (2 * i + 1); k++) {
      pattern += "* ";
    }
    for (let j = 0; j < i; j++) {
      space += " ";
    }

    console.log(space, pattern);
  }
};

const row = 5;

printPattern(row);
printInvertedPattern(row);

// for(int j=0;j< 2*N -(2*i +1);j++){

// cout<<"*";
// }
