const arrayRoatedTimes = (nums) => {
  let count = 0;
  let pivotIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      pivotIdx = i;
      break;
    }
  }

  if (pivotIdx === 0) {
    return 0;
  }

  for (let i = pivotIdx; i < nums.length; i++) {
    count++;
  }
  return count;
};

const arrayRoatedTimesOptimal = (nums) => {
  let low = 0;
  let high = nums.length - 1;
  let minEle = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] < minEle) {
      minEle = mid;
    }
    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return minEle;
};

const arr = [5, 6, 7, 0, 1, 2, 3, 4];
console.log(arrayRoatedTimesOptimal(arr));
