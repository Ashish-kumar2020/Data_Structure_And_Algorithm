const arrayRoatedAndSorted = (arr, n) => {
  let roatedIndex = 0;

  // Find the index where rotation occurs
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      roatedIndex = i;
      break;
    }
  }

  // If the array was not rotated
  if (roatedIndex === 0) {
    return true;
  }

  // Check if the array is sorted after rotation
  for (let i = roatedIndex + 1; i < roatedIndex + n; i++) {
    const index = i % n;
    const prevIndex = (i - 1) % n;
    if (arr[index] < arr[prevIndex]) {
      return false;
    }
  }
  return true;
};

const arr = [3, 4, 5, 1, 2];
const n = arr.length;
console.log(arrayRoatedAndSorted(arr, n));
