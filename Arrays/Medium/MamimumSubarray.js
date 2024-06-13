var maxSubArray = function (nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(max, sum);
    }
  }
  return max;
};

var maxSubArrayOptimal = function (nums) {
  let maxi = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxi = Math.max(maxi, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxi;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArrayOptimal(nums));
