// Update the value at position i with a new value.

function updateElement(arr,n,idx,ele){
    let res = [];
    for(let i= 0;i < n;i++){
        if(i === idx){
            res.push(ele);
        } else{
            res.push(arr[i]);
        }
    }
    return res;
};

const arr = [1,2,3,4,5,6,7];
const n = arr.length;
const idx = 3;
const ele = 20;
console.log(updateElement(arr,n,idx,ele))