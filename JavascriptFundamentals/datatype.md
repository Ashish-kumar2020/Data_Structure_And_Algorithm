# DataType

    These are the value of certain types. ex - number,string etc
    Note: Javascript is a dynamic typed(loosely typed ) language. we can store any type of value in a vraiable.the varaibel are not of fixed type.

# There are seven type of primitive datatype

- Number:It can represnt both number and floating number
- BigInt: In javascript number can store a maximum value upto (2^53-1) or less than -(2^53-1) for negatives. we want to use bignint then we have append n at the back of the number string.
  ex - const bigInt = 1234567890123456789012345678901234567890n;
- String:
  let str = "Hello";
  let str2 = 'Single quotes are ok too';
  let phrase = `can embed another ${str}`;
  In JavaScript, there are 3 types of quotes.

        Double quotes: "Hello".
        Single quotes: 'Hello'.
        Backticks: `Hello`.

  Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
  let name = "John";

  alert( `Hello, ${name}!` ); // Hello, John!

  alert( `the result is ${1 + 2}` ); // the result is 3

- Boolean(logical type) - The boolean type has only two values: true and false.
  let nameFieldChecked = true; // yes, name field is checked
  let ageFieldChecked = false;

- Null - The special null value does not belong to any of the types described above.It forms a separate type of its own which contains only the null value:
  let age = null;
  In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.It’s just a special value which represents “nothing”, “empty” or “value unknown”.The code above states that age is unknown.

- Undefined -The special value undefined also stands apart. It makes a type of its own, just like null.
  The meaning of undefined is “value is not assigned”.
  If a variable is declared, but not assigned, then its value is undefined:
  let age;

alert(age); // shows "undefined"

# Summary

There are 8 basic data types in JavaScript.

Seven primitive data types:

- number: for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
- bigint for integer numbers of arbitrary length.
- string for strings. A string may have zero or more characters, there’s no separate single-character type.
- boolean for true/false.
- null for unknown values – a standalone type that has a single value null.
- undefined for unassigned values – a standalone type that has a single value undefined.
- symbol for unique identifiers.

# And one non-primitive data type:

- object for more complex data structures.
  The typeof operator allows us to see which type is stored in a variable.

  Usually used as typeof x, but typeof(x) is also possible.
  Returns a string with the name of the type, like "string".
  For null returns "object" – this is an error in the language, it’s not actually an object.
