// Compute the length of an array without using .length.

function printLength(arr){
    let count = 0;
    while(arr[count] !== undefined){
        count++;
    }
    return count;
};

const arr = [1,2,3,4,5,6,7,8];
console.log(printLength(arr));