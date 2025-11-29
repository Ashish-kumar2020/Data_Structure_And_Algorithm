/*
4. Search in a 2D Array (No built-ins)
    Problem:
    Given a 2D array and a target value, search for the value manually using loops.
*/

function searchIn2DArray(arr,ele){
    for(let i = 0; i < arr.length;i++){
        for(let j = 0; j < arr[i].length;j++){
            if(arr[i][j] === ele){
                return [i,j];
            }
        }
    }
}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(searchIn2DArray(arr,3));