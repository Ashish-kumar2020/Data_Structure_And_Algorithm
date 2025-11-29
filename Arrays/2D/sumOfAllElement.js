/*
    2. Sum of All Elements in a 2D Array (No built-ins)
    Given a 2D array, compute the total sum of all elements.
*/

function printSumOfArray(arr){
    let sum = 0;
    for(let i =0;i < arr.length;i++){
        for(let j = 0; j < arr[i].length;j++){
            sum += arr[i][j];
        }
    }
    return sum;
};

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(printSumOfArray(arr));