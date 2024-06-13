let majorityElement = (nums) => {
  let obj = {};
  for (let num in nums) {
    if (!obj[nums[num]]) {
      obj[nums[num]] = 1;
    } else {
      obj[nums[num]] += 1;
    }
  }

  let maxValue = -Infinity;
  let maxKey = null;
  for (const key in obj) {
    if (obj[key] > maxValue) {
      maxKey = key;
      maxValue = obj[key];
    }
  }
  return maxKey;
};

var majorityElementOptimal = function (nums) {
  let ele;
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (cnt === 0) {
      ele = nums[i];
      cnt = 1;
    } else if (nums[i] === ele) {
      cnt++;
    } else {
      cnt--;
    }
  }

  let cnt1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === ele) {
      cnt1++;
    }
  }
  if (cnt1 > nums.length / 2) {
    return ele;
  }
  return -1;
};

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElementOptimal(nums));
