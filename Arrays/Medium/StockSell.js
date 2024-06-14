// pass 154/202 test case
var maxProfit = function (nums) {
  let minVal = Infinity;
  let maxVal = -Infinity;
  let minIdx = 0;
  let profit = 0;
  // finding minimum value
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minVal) {
      minVal = nums[i];
      minIdx = i;
    }
  }

  if (minIdx === nums.length) return profit;
  // finding maximum value
  for (let i = minIdx; i < nums.length; i++) {
    if (nums[i] > maxVal) {
      maxVal = nums[i];
    }
  }

  // calculate profit
  return (profit = maxVal - minVal);
};

// using optimal approcah
const sellStock = (nums, n) => {
  let maxProfit = 0;
  let minVal = nums[0];
  for (let i = 1; i < n; i++) {
    let cost = nums[i] - minVal;
    maxProfit = Math.max(maxProfit, cost);
    minVal = Math.min(minVal, nums[i]);
  }
  return maxProfit;
};

const nums = [7, 1, 5, 3, 6, 4];
const n = nums.length;
console.log(sellStock(nums, n));
