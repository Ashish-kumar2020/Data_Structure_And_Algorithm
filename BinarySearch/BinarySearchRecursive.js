const binarySearchRecursive = (nums, low, high, target) => {
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) {
      return binarySearchRecursive(nums, low, mid - 1, target);
    } else {
      return binarySearchRecursive(nums, mid + 1, high, target);
    }
  }
  return -1;
};

const nums = [3, 4, 6, 7, 9, 12, 16, 17];
const n = nums.length;
const target = 160;
const low = 0;
const high = n;
console.log(binarySearchRecursive(nums, low, high, target));
