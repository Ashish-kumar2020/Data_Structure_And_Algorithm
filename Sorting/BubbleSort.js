/*
    Time Complexity => O(n^2)
    Space Complexity => O(1)
*/


function bubbleSort(arr){
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < n - 1; i++){
            if(arr[i] > arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return arr;
}


let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));