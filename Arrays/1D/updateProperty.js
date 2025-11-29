/*
    2. Update a Property Change the status of a task inside an array of objects using only indexing.

*/

function updateProperty(arr,targetId,newStatus){
    let res = [];
    for(let i= 0; i <arr.length;i++){
        if(arr[i].id === targetId){
            res[i] = {
                id: arr[i].id,
                status: newStatus
            }
        } else{
            res[i] = arr[i];
        }
    }
    return res;
}

const tasks = [
    { id: 1, status: "pending" },
    { id: 2, status: "pending" },
    { id: 3, status: "pending" }
];

console.log(updateProperty(tasks, 3, "done"));