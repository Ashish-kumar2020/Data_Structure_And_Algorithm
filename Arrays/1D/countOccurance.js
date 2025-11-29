/*
    Count Occurrences of a Value
    Given an array, count how many times x appears.
*/

function countElement(arr,n,ele){
    let count = 0;
    for(let i = 0; i < n;i++){
        if(arr[i] === ele){
            count++;
        }
    }
    return count;
};

const arr = [1,2,3,3,3,4,5,6,3];
const n = arr.length;
const ele = 3;
console.log(countElement(arr,n,ele));