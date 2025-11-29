/*
    5. Find the Largest Element in a 2D Array (No built-ins)
        Problem:
        Given a 2D array, find the maximum element manually using nested loops.
*/

function largestElement(arr){
    let maxEle = -Infinity;
    for(let i =0;i<arr.length;i++){
        for(let j = 0; j < arr[i].length;j++){
            if(arr[i][j] > maxEle){
                maxEle = arr[i][j];
            }
        }
    }
    return maxEle;
}

const arr = [
    [1, 2, 3],
    [4, 50, 6],
    [7, 8, 9],
  ];
  
  console.log(largestElement(arr,3));