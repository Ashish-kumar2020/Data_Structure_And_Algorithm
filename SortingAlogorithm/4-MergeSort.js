const merge = (arr, low, mid, high) => {
  let temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  // if any element is left in any of the array
  //   for left side
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  // for right side
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // now push back the temp element into the original array
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
  return arr;
};

const mergeSort = (arr, low, high) => {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  return merge(arr, low, mid, high);
};

const arr = [3, 2, 4, 1, 3, 5, 0, 2];
const low = 0;
const high = arr.length - 1;
console.log(mergeSort(arr, low, high));
