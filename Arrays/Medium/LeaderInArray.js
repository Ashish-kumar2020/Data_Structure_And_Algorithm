const leaderInArray = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let leader = true;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        leader = false;
        break;
      }
    }
    if (leader) {
      ans.push(nums[i]);
    }
  }
  return ans;
};

const leaderInArrayOptimal = (nums) => {
  let maxi = -Infinity;
  let ans = [];
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] > maxi) {
      maxi = nums[i];
      ans.push(maxi);
    }
  }
  return ans;
};

const nums = [10, 22, 12, 3, 0, 6];
console.log(leaderInArrayOptimal(nums));
