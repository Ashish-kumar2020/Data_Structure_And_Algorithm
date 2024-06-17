// this work on both the case where :
/*
    case 1: both positive and negative elements are equal
    case 2: when either positive elemnet are more than negative lement or negative elemnet are more than positive elment
*/

var rearrangeArray = function (nums) {
  let posEle = [];
  let negEle = [];
  let combineEle = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      posEle.push(nums[i]);
    } else {
      negEle.push(nums[i]);
    }
  }
  let i = 0;
  let j = 0;
  while (i < posEle.length || j < negEle.length) {
    if (i < posEle.length) {
      combineEle.push(posEle[i]);
      i++;
    }
    if (j < negEle.length) {
      combineEle.push(negEle[j]);
      j++;
    }
  }

  return combineEle;
};

// this approch will work only if both positive and negative elements are equal

var rearrangeArrayBetter = function (nums) {
  let posIndex = 0;
  let negIndex = 1;
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      ans[posIndex] = nums[i];
      posIndex += 2;
    } else {
      ans[negIndex] = nums[i];
      negIndex += 2;
    }
  }
  return ans;
};

const nums = [3, 1, -2, -5, 2, -4, 4, 6, -1];

console.log(rearrangeArrayBetter(nums));
