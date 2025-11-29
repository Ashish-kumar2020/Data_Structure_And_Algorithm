/*
    Check if Array is Empty
    Without using built-ins.
*/

function isArrayEmpty(arr,n){
    if(n === 0){
        return true;
    }
    return false;
};

const arr = [1,2,3,4,5,6];
const n = arr.length;
console.log(isArrayEmpty(arr,n));