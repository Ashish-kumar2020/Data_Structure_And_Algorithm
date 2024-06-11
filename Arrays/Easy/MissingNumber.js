var missingNumber = function (nums) {
  let sum = 0;
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let n = nums.length;
  totalSum = (n * (n + 1)) / 2;
  return totalSum - sum;
};
const nums = [3, 0, 1];
console.log(missingNumber(nums));
