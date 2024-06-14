// in this problem the array contains both positive and negative number

const maxSubarraySum = (nums, n) => {
  let sum = 0;
  let maxi = -Infinity;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    maxi = Math.max(maxi, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxi;
};

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums = [1];
const n = nums.length;
console.log(maxSubarraySum(nums, n));
