var twoSum = function (nums, target) {
  let mpp = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let moreNeeded = target - num;
    if (mpp.has(moreNeeded)) {
      return [mpp.get(moreNeeded), i];
    }
    mpp.set(num, i);
  }
  return [-1, -1];
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
