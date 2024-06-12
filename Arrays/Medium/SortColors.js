var sortColors = function (nums) {
  let left = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    switch (nums[mid]) {
      case 0:
        [nums[left], nums[mid]] = [nums[mid], nums[left]];
        left++;
        mid++;
        break;
      case 2:
        [nums[mid], nums[high]] = [nums[high], nums[mid]];

        high--;
        break;
      default:
        mid++;
        break;
    }
  }
  return nums;
};

const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
