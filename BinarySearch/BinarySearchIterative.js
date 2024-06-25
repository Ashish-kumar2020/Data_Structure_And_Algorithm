const binarySearchIterative = (nums, n, target) => {
  let low = 0;
  let high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) high = mid - 1;
    else {
      low = mid + 1;
    }
  }
  return -1;
};
const nums = [3, 4, 6, 7, 9, 12, 16, 17];
const n = nums.length;
const target = 16;
console.log(binarySearchIterative(nums, n, target));
