var check = function (nums) {
  let n = nums.length;
  let rotatedIndex = 0;

  // Find the index where rotation occurs
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      rotatedIndex = i;
      break;
    }
  }

  // If the array was not rotated
  if (rotatedIndex === 0) {
    return true;
  }

  // Check if the array is sorted after rotation
  for (let i = rotatedIndex + 1; i < n + rotatedIndex; i++) {
    const index = i % n;
    const prevIndex = (i - 1) % n;

    if (nums[index] < nums[prevIndex]) {
      return false;
    }
  }

  return true;
};
