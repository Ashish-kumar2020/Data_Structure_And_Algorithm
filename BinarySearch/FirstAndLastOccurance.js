/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const firstOccurrence = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

const lastOccurrence = (nums, target) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

var searchRange = function (nums, target) {
  let firstOccur = firstOccurrence(nums, target);
  let lastOccur = lastOccurrence(nums, target);
  return [firstOccur, lastOccur];
};

var searchRangeOptimal = function (nums, target) {
  const findFirst = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    let ans = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        ans = mid;
        high = mid - 1;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return ans;
  };

  const findLast = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    let ans = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        ans = mid;
        low = mid + 1;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return ans;
  };

  let firstOccur = findFirst(nums, target);
  let lastOccur = findLast(nums, target);
  return [firstOccur, lastOccur];
};
