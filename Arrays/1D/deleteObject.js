/*
    Delete Object by Key
    Remove object with id = 5 and shift elements.
*/

function deleteObject(arr,idx){
    let indexToDelete = -1;
    for(let i = 0; i < arr.length;i++){
        if(arr[i].id === idx){
            indexToDelete = i;
            break;
        }
    }
    if(indexToDelete === -1){
        return arr;
    }

    for(let i = indexToDelete; i < arr.length-1;i++){
        arr[i] = arr[i+1];
    }

    arr.length = arr.length - 1;
    return arr;
}

const tasks = [
    { id: 1 }, 
    { id: 3 }, 
    { id: 5 }, 
    { id: 7 }
];

console.log(deleteObject(tasks,1));