// ceil is same as lower bound

const floor = (nums, n, x) => {
  let low = 0;
  let high = n - 1;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] <= x) {
      ans = nums[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
};

let nums = [3, 4, 4, 7, 8, 10];
let n = nums.length;
let x = 5;
console.log(floor(nums, n, x));
