const rightRotateByDPlace = (nums, d) => {
  let roatedArr = [];
  for (let i = nums.length - d; i < nums.length; i++) {
    roatedArr.push(nums[i]);
  }
  //   return roatedArr;
  for (let i = 0; i < nums.length - d; i++) {
    roatedArr.push(nums[i]);
  }

  return roatedArr;
};

var rotate = function (nums, k) {
  k = k % nums.length;
  let roatedArr = [];
  for (let i = nums.length - k; i < nums.length; i++) {
    roatedArr.push(nums[i]);
  }
  //   return roatedArr;
  for (let i = 0; i < nums.length - k; i++) {
    roatedArr.push(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = roatedArr[i];
  }
};
const nums = [1, 2, 3, 4, 5, 6, 7];
const d = 3;
console.log(rightRotateByDPlace(nums, d));
