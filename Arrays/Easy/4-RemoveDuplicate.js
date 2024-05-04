const bruteRemoveDuplicate = (arr) => {
  return new Set(arr);
};

const arr = [1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 6];
console.log(bruteRemoveDuplicate(arr));
