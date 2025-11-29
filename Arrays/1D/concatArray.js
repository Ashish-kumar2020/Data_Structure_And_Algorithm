/* Concatenate Two Arrays Manually
    Combine array A and B into C.
*/

function concatArray(arr1,arr2,n,m){
    let res = [];
    for(let i = 0; i < n; i++){
        res[i] = arr1[i];
    }
    for(let j = 0; j < m;j++){
        res[n+j] = arr2[j];
    }
    
    return res;
};

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
const n = arr1.length;
const m = arr2.length;
console.log(concatArray(arr1,arr2,n,m))