// Note that if any of the operands is a string, then the other one is converted to a string too.

let str1 = "Hi";
let str2 = 123;
// console.log(str2 + str1);
// console.log(typeof (str2 + str1));

// Note:  if the operand is not a number, the unary plus converts it into a number.
// No effect on numbers
let x = 1;
console.log(+x); // 1

let y = -2;
console.log(+y); // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0

// String comparision:To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order. In other words, strings are compared letter-by-letter.

/**
 * The algorithm to compare two strings is simple:

Compare the first character of both strings.
If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
Repeat until the end of either string.
If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

G is the same as G.
l is the same as l.
o is greater than e. Stop here. The first string is greate
 */

// COmparision of different types
// When compare values of different types js convert values to number
