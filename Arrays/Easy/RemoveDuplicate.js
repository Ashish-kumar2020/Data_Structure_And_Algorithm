const removeDuplicate = (nums) => {
  let uniqueEle = [];
  for (let i = 0; i < nums.length; i++) {
    if (!uniqueEle.includes(nums[i])) {
      uniqueEle.push(nums[i]);
    }
  }
  return uniqueEle;
};

const removeDuplicateOptimal = (nums) => {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicateOptimal(nums));
