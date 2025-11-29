// 8. Reverse the Entire Matrix

function reverse2DArray(arr){
    let res = [];
    for(let i = arr.length - 1; i >= 0; i--){
        let newRows = [];
        for(let j= arr[i].length - 1; j >= 0;j--){
            newRows.push(arr[i][j]);
        }
        res.push(newRows)
    }
    return res;
}

const arr = [
    [1, 2, 3],
    [4, 50, 6],
    [7, 8, 9],
  ];
  
  console.log(reverse2DArray(arr));