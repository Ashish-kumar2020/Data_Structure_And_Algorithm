// Remove an element at a given index and shift remaining elements manually.

function deleteArrayElement(arr,n,idx){
    for(let i = idx; i < n - 1;i++){
        arr[i] = arr[i+1];
    }
    arr.length = n-1;
    return arr;
};

const arr = [1,2,3,4,5,6];
const n = arr.length;
const idx = 3;

console.log(deleteArrayElement(arr,n,idx));