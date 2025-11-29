/*
    6. Transpose a Matrix (No built-ins)
        Problem: Given a 2D array (matrix), create a new matrix where rows become columns and columns become rows.
*/

function transposeMatrix(arr){
    let maxCols = 0;


    for(let i = 0; i < arr.length;i++){
        if(arr[i].length > maxCols){
            maxCols = arr[i].length;
        }
    }

    let res = [];
    for(let col = 0; col < maxCols;col++){
        let newRow = [];
        for(let row = 0; row < arr.length;row++){
            if(arr[row][col] !== undefined){
                newRow.push(arr[row][col]);
            }
        }
        res.push(newRow);
    }
    return res;
}

const arr = [
    [1, 2, 3],
    [4],
    [7, 8, 9],
];
  
console.log(transposeMatrix(arr,3));