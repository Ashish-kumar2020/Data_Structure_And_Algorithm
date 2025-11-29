// Print each element using only a loop.

function printArrayValues(arr,n){
    for(let i = 0; i < n; i++){
        console.log(arr[i]);
    }
};

const arr = [1,2,3,4,5,6,7,8,9];
const n = arr.length;
printArrayValues(arr,n)