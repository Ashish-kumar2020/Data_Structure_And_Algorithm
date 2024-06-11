var findMaxConsecutiveOnes = function (nums) {
  let maxOnes = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      maxOnes += 1;
      result = Math.max(maxOnes, result);
    } else {
      maxOnes = 0;
    }
  }
  return result;
};
const nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
