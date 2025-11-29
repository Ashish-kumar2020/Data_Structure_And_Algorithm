// Given an array, insert an element at a specific index without using built-in insert methods.

function insertElement(arr,n,ele,idx) {
    let dummyArray = [];
    for(let i = 0; i < n; i++){
        if(i === idx){
            dummyArray.push(ele);
        }
        dummyArray.push(arr[i]);
    };
    return dummyArray;
};

const arr = [1,2,3,4,5,6,7,8];
const n = arr.length;
const ele = 20;
const idx = 4;

console.log(insertElement(arr,n,ele,idx));