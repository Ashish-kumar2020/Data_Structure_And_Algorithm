const longestSubArrayWithSumK = (nums, n, k) => {
  let count = 0;
  let result = 0;
  let currSum = 0;
  for (let i = 0; i < n; i++) {
    currSum += nums[i];
    count++;
    if (currSum === k || currSum > k) {
      result = Math.max(count, result);
      count = 0;
      currSum = 0;
    }
  }
  return result;
};

const longestSubArrayWIthNegative = (nums, n, k) => {
  let hashMap = new Map();
  let sum = 0;
  let maxLen = 0;

  // calculate the prefix sum till index i
  for (let i = 0; i < n; i++) {
    sum += nums[i];

    // if the sum = k, update the maxLen
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }
    // calculate the sum of remaining part i.e. x-k
    let remSum = sum - k;

    // calculate the length and update maxLen
    if (hashMap.has(remSum)) {
      let len = i - hashMap.get(remSum);
      maxLen = Math.max(maxLen, len);
    }
    // finally, update the map checking the conditions
    if (!hashMap.has(sum)) {
      hashMap.set(sum, i);
    }
  }
  return maxLen;
};
// const nums = [2, 3, 5, 1, 9];
const nums = [1, 4, 3, 3, 5, 5];
const n = nums.length;
const k = 16;
// console.log(longestSubArrayWithSumK(nums, n, k));
console.log(longestSubArrayWIthNegative(nums, n, k));
