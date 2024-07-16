const RightRotateByOnePlace = (nums) => {
  let lastEle = nums.pop();
  for (let i = nums.length - 1; i >= 0; i--) {
    console.log(nums[i]);
    nums[i + 1] = nums[i];
  }
  nums[0] = lastEle;
  return nums;
};

const nums = [1, 2, 3, 4];
// console.log(RightRotateByOnePlace(nums));
console.log(nums.length - 1);
