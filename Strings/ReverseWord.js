// Reverse Words in a String

var reverseWords = function (s) {
  let word = s.split(" ");
  let result = "";
  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i].length === 0) continue;
    else {
      if (result.length === 0) {
        result += word[i];
      } else {
        result += " " + word[i];
      }
    }
  }
  return result;
};

const s = "the sky is blue";
console.log(reverseWords(s));
