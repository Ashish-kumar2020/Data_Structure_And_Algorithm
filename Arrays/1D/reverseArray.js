// Given an array, create a new array that contains the elements of the original array in reverse order.

function reverseArray(arr,n){
    let res = [];
    // for(let i = n-1; i >= 0; i--){
    //     // res[i] = arr[i];
    //     res.push(arr[i]);
    // }

    for(let i = 0; i < n;i++){
        res[i] = arr[n - 1 - i];
    }
    return res;
};

const arr = [1,2,3,4,5,6];
const n = arr.length;
console.log(reverseArray(arr,n));