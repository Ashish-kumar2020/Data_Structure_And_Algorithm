// Filter Objects Manually From [{id:1},{id:2},{id:3}] create a new array of objects whose id > 1 without .filter.


function manualFilterObject(arr){
    let res = [];
    let j = 0;
    for(let i = 0;i < arr.length;i++){
        if(arr[i].id > 1){
            res[j] = arr[i];
            j++;
        }
    }
    return res;
}

const arr = [{id:1}, {id:2}, {id:3}];
console.log(manualFilterObject(arr));