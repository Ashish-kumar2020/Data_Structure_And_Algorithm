/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.
*/

var searchInsert = function (nums, target) {
  let n = nums.length;
  let low = 0;
  let high = n;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      ans = mid;
      return mid;
    } else if (nums[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

let nums = [1, 3, 5, 6];
let target = 5;
console.log(searchInsert(nums, target));
