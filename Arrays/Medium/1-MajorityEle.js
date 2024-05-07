let majorityElement = (nums) => {
  let obj = {};
  for (let num in nums) {
    if (!obj[nums[num]]) {
      obj[nums[num]] = 1;
    } else {
      obj[nums[num]] += 1;
    }
  }

  //   let values = Object.values(obj);
  //   //    let maxValue = (...values)
  //   console.log(...values);
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

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
