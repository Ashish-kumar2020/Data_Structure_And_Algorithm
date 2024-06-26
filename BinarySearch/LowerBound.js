const lowerBound = (nums, n, x) => {
  let low = 0;
  let high = n;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

let nums = [3, 5, 8, 15, 19];
let n = nums.length;
let x = 6;
console.log(lowerBound(nums, n, x));
