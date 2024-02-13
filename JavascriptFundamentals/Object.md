# Objects

- Objects are associative arrays with several special features.

- They store properties (key-value pairs), where:

- Property keys must be strings or symbols (usually strings).
- Values can be of any type.
- To access a property, we can use:

- The dot notation: obj.property.
- Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].

# Additional operators:

- To delete a property: delete obj.prop.
- To check if a property with the given key exists: "key" in obj.
- To iterate over an object: for (let key in obj) loop.

# There are many other kinds of objects in JavaScript:

- Array to store ordered data collections,
- Date to store the information about the date and time,
- Error to store the information about an error.

# Note - They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

Functions that are stored in object properties are called “methods”.
Methods allow objects to “act” like object.doSomething().
Methods can reference the object as this.
The value of this is defined at run-time.

When a function is declared, it may use this, but that this has no value until the function is called.
A function can be copied between objects.
When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.

# Objects conversion rules

- There’s no conversion to boolean. All objects are true in a boolean context, as simple as that. There exist only numeric and string conversions.
- The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is the time difference between two dates.
- As for the string conversion – it usually happens when we output an object with alert(obj) and in similar contexts
