var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] == target) {
      return true;
    }
    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low++;
      high--;
    }
    // left half sorted
    else if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // right half sorted
    else {
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};

const nums = [2, 5, 6, 0, 0, 1, 2];
const target = 0;
console.log(search(nums, target));
