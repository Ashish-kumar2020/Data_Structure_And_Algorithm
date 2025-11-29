// Create a new array containing the same elements (no .slice, no spread).

function copyArrayElement(arr,n){
    let res = [];
    for(let i = 0; i < n;i++){
        res[i] = arr[i];
    }
    return res;
}


const arr = [1,2,3,4,5,6,7];
const n = arr.length;
console.log(copyArrayElement(arr,n));