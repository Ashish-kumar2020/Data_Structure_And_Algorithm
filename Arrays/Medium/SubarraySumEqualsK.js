var subarraySum = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};

var subarraySumOptimize = function (arr, k) {
  let n = arr.length; // size of the given array
  let prefixSums = new Map(); // to store prefix sums
  let preSum = 0,
    cnt = 0;

  prefixSums.set(0, 1); // Setting 0 in the map

  for (let i = 0; i < n; i++) {
    // add current element to prefix Sum
    preSum += arr[i];

    // Calculate preSum - k
    let remove = preSum - k;

    // Add the number of subarrays to be removed
    if (prefixSums.has(remove)) {
      cnt += prefixSums.get(remove);
    }

    // Update the count of prefix sum in the map
    if (prefixSums.has(preSum)) {
      prefixSums.set(preSum, prefixSums.get(preSum) + 1);
    } else {
      prefixSums.set(preSum, 1);
    }
  }

  return cnt;
};
const nums = [1, -1, 0];
const k = 0;
console.log(subarraySum(nums, k));
