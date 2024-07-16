const arrayRoatedAndSorted = (nums, n) => {
  let roatedIndex = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      roatedIndex = i;
      break;
    }
  }

  if (roatedIndex === 0) {
    return true;
  }

  for (let i = roatedIndex + 1; i < roatedIndex + n; i++) {
    const index = i % n; // current index
    const prevIndex = (i - 1) % n; // prevIndex must be in range
    if (nums[index] < nums[prevIndex]) {
      return false;
    }
  }
  return true;
};
const arr = [3, 4, 5, 1, 2];
const n = arr.length;
console.log(arrayRoatedAndSorted(arr, n));
