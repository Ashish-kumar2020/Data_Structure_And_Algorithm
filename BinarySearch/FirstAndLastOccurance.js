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
