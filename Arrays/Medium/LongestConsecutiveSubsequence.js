// brute approach

var ls = (nums, x) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
      return true;
    }
  }
  return false;
};

var longestConsecutive = function (nums) {
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    let x = nums[i];
    while (ls(nums, x + 1) === true) {
      x = x + 1;
      count++;
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};

// Better approach

var longestConsecutiveBetter = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let lastSmaller = Math.min;
  let count = 0;
  let longest = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 === lastSmaller) {
      count++;
      lastSmaller = nums[i];
    } else if (lastSmaller !== nums[i]) {
      count = 1;
      lastSmaller = nums[i];
    }
    longest = Math.max(count, longest);
  }
  return longest;
};
