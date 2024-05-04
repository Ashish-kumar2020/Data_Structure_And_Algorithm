var moveZeroes = function (nums) {
  let j = -1;
  // find the first zero element
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      j = i;
      break;
    }
  }
  if (j === -1) return nums;
  for (let i = j + 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }

  return nums;
};

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
