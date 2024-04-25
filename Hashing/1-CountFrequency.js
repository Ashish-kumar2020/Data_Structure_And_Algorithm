/*
    for this i have used two methods one is using objects and other is using map. the complexity of the code will be same O(N). the major difference is when we use map we gets faster performance and also it provides us result in specific order

*/

// using object
const countFrequency = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
};

// using map

const countFrequencyUsingMap = (arr) => {
  let mpp = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (mpp.has(arr[i])) {
      mpp.set(arr[i], mpp.get(arr[i]) + 1);
    } else {
      mpp.set(arr[i], 1);
    }
  }
  return mpp;
};

const arr = [10, 5, 10, 5, 13, 12];
console.log(countFrequencyUsingMap(arr));
