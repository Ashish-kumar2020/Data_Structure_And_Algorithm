var singleNumber = function (nums) {
  let singleNum = {};

  // Iterate over the array to build the frequency map
  for (let num of nums) {
    if (singleNum[num] === undefined) {
      singleNum[num] = 1;
    } else {
      singleNum[num] += 1;
    }
  }

  // Iterate over the frequency map to find the element with frequency 1
  for (let ele in singleNum) {
    if (singleNum[ele] === 1) {
      return parseInt(ele);
    }
  }

  // Return -1 if no such element is found (though based on problem constraints this shouldn't happen)
  return -1;
};

const nums = [2, 2, 1];
console.log(singleNumber(nums));
