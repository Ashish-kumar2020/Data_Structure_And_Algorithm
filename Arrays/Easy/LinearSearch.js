const linearSearch = (nums, n, target) => {
  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      return true;
    }
  }
  return false;
};

const nums = [1, 3, 4, 2, 5, 6, 8, 4];
const n = nums.length;
const target = 4;
console.log(linearSearch(nums, n, target));
