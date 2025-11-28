
// Ways to Create Array

// There are Two ways to declare the Array

// 1 - Using Contructor Method  -  let arr = new Array();
// 2 - Using Normal Method      -  let arr = [];


// To Access Array Values
let cars = ["Tata","Mahindra","BMW","Audi"];

console.log(cars[0]);  // this will return the element at 0th index, i.e - Tata
console.log(cars[1]); // Mahindra

// To Replace An Existing Element in an array
cars[1] = "Hyundai";
console.log(cars);

// Add One more elemnet to the array
// Whenever you want to add a new Element it will be added at the end of the Array
cars[4] = "Mahindra";
console.log(cars);

// Calculate the length of the Array
console.log(cars.length);


// NOTE : An Array can store Element of any type
let arr = ["Apple", {name: "John"}, true,function(){console.log("Hello World")}];

console.log(arr[3]);


// Get Last Elment of an Array
console.log(cars[cars.length - 1]);
// using at Method
console.log(cars.at(-1));

// Method Pop/Push/Shift/Unshift
/*
    push : Appends Element to the end
    shift : get an element from the beginning,advancing the queue,so that the 2nd element becomes the 1st.
    pop: takes an element from the end;
    unshift : Appends Element at the beginning
*/


// POP
console.log(cars.pop()); // Removes Mahindra
console.log(cars);
// Push
console.log(cars.push("Mahindra")) //  'Tata', 'Hyundai', 'BMW', 'Audi', 'Mahindra'

// Shift
console.log(cars.shift());

//unshift - we can add multiple items in a single time
// unshift return the update length of the array
console.log(cars.unshift("Kia","Citeron"));



// for of loop

for(let car of cars){
    console.log(car)
}