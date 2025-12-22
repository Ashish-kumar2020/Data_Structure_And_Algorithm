/*
    Time Complexity => O(n^2)
    Space Complexity => O(1)
*/


function selectionSort(arr){
    let n = arr.length;
    for(let i = 0; i < n-1;i++){
        let minIdx = i;
        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j;
            }
        }

        if(minIdx !== i){
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
};

let array = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(array));