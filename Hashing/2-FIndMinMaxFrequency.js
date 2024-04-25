const minMaxFrequency = (arr) => {
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

const arr = [1, 2, 1, 2, 3, 4, 5, 6, 6];
const res = minMaxFrequency(arr);

let maxEle = null;
let minEle = null;

// we are using object.entries bcoz this will convert the object into array and it is easir to loop through an array then object
Object.entries(res).forEach((element, index) => {
  if (index === 0) {
    maxEle = element;
    minEle = element;
  } else {
    if (element[1] > maxEle[1]) {
      maxEle = element;
    } else if (element[1] < minEle[1]) {
      minEle = element;
    }
  }
});
console.log(maxEle, minEle);
