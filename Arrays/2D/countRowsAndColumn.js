/*
3. Count Rows and Columns Without Using .length
    You must manually compute:
        1 - number of rows
        2 - number of columns in each row
*/

function rowAndColumnCount(arr){
    let rowCount = 0;
    while(arr[rowCount] !== undefined){
        rowCount++;
    }

    
    let colCounts = [];
    for(let i = 0; i < rowCount;i++){
        let colCount = 0;
        while(arr[i][colCount] !== undefined){
            colCount++;
        }
        colCounts[i] = colCount
    }

    return {rowCount: rowCount, colCount: colCounts};
}

let arr = [
    [1,2,3],   
    [4,5],     
    [6,7,8,9]  
  ];
  console.log(rowAndColumnCount(arr))