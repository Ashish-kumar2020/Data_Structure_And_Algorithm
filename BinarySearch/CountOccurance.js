const countOccuranceBrute = (nums, target) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      count++;
    }
  }
  return count;
};

const firstOccurance = (nums, target) => {
  let low = 0;
  let high = nums.length;
  let first = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      first = mid;
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return first;
};

const lastOccurance = (nums, target) => {
  let low = 0;
  let high = nums.length;
  let last = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      last = mid;
      low = mid + 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return last;
};

const firstAndLastCount = (nums, target) => {
  let firstOccr = firstOccurance(nums, target);
  if (firstOccr === -1) return [-1, -1];
  let lastOccur = lastOccurance(nums, target);
  return [firstOccr, lastOccur];
};

const countOccuranceOptimal = (nums, target) => {
  let [first, last] = firstAndLastCount(nums, target);
  if (first === -1) return 0;
  return last - first + 1;
};

const nums = [2, 4, 6, 8, 8, 8, 11, 13];
const target = 8;
console.log(countOccuranceOptimal(nums, target));
