const upperBound = (nums, n, x) => {
  let low = 0;
  let high = n;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

let nums = [3, 5, 8, 9, 15, 19];
let n = nums.length;
let x = 9;
console.log(upperBound(nums, n, x));
