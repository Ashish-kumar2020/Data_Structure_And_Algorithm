// brute approach
const unionArray = (nums1, nums2) => {
  let hasset = new Set(nums1, nums2);
  return hasset;
};

// optimal
const unionArrayOptimal = (arr1, arr2) => {
  let i = 0,
    j = 0; // Pointers
  let union = []; // Union array

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      // Case 1 and 2
      if (union.length === 0 || union[union.length - 1] !== arr1[i])
        union.push(arr1[i]);
      i++;
    } else {
      // Case 3
      if (union.length === 0 || union[union.length - 1] !== arr2[j])
        union.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    // If any elements left in arr1
    if (union[union.length - 1] !== arr1[i]) union.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    // If any elements left in arr2
    if (union[union.length - 1] !== arr2[j]) union.push(arr2[j]);
    j++;
  }

  return union;
};

const nums1 = [1, 2, 3, 4, 5];
const nums2 = [1, 2, 3, 4, 4];
console.log(unionArrayOptimal(nums1, nums2));
