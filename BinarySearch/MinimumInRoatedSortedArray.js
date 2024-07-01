var findMinBrute = function (nums) {
  let minEle = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minEle) {
      minEle = nums[i];
    }
  }
  return minEle;
};

var findMinOptimal = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let minEle = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] < minEle) {
      minEle = nums[mid];
    }
    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return minEle;
};

const nums = [3, 4, 5, 1, 2];

console.log(findMinOptimal(nums));
