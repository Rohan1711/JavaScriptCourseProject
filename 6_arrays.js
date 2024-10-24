//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).
// let fruits=[]
// console.log(fruits)
// console.log(typeof fruits)
//? Using Array constructor
// let fruits= new Array("apple","bannana","graphes","mango")
// console.log(fruits)
// //? Using array literal
// let fruits=["apple","bannana","graphes","mango"]
// console.log(fruits)

//? we can also create an empty array

//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.
// let fruits=["apple","bannana","graphes","mango"]
// console.log(fruits[2])
// console.log(fruits["apple"]) // not workinng undefined

//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.
// let fruits=["apple","bannana","graphes","mango"]
// fruits[2]="orange"
// // fruits["mango"]="orange" // not working 
// console.log(fruits)

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays
//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.
// let fruits=["apple","bannana","graphes","mango"]
// for (const item  of fruits) {
//     console.log(item)
// }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.
// let fruits=["apple","bannana","graphes","mango"]
// for (const item  in fruits) {
//     console.log(item)
// }

// ? 3: forEach Method
// * The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.
// let fruits=["apple","bannana","graphes","mango"]
// const myArr=fruits.forEach((item, index, arr) => {   
//    return `${item} ${index}`
//     })
//     console.log(myArr) // undefined 

// ? 4: map function
// let fruits=["apple","bannana","graphes","mango"]
// const myArr=fruits.map((item,index,arr)=>{
//    return `${item} ${index}`
//     // console.log(arr)
// })
// console.log(myArr) // returning array of value and indices [ 'apple 0', 'bannana 1', 'graphes 2', 'mango 3' ] its a diffrence between foreach and map

// console.log(fruits)


//* map() creates a new array from calling a function for every array element. map() does not change the original array.
// let fruits=["apple","bannana","graphes","mango"]
// const myArr=fruits.map((item,index)=>{
//    return `my fav fruit is ${item}`
//     // console.log(arr)
// })
// console.log(myArr)
// console.log(fruits) // original array remains unchanged  [ 'apple', 'bannana
//todo Practice Time
//! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5]

// for(item of numbers){
//     console.log(item*2)
// }
// console.log(numbers)


// forEach -  Performs an action on each element
// const numbers = [1, 2, 3, 4, 5]
// const result= numbers.forEach((item,index,arr)=>{
//     console.log(item*2)
// })
//  console.log(result) // undefined

// map -  Creates a new array with transformed elements
// const numbers = [1, 2, 3, 4, 5]
// const result= numbers.map((item,index,arr)=>{
//     return item*2
// })
//  console.log(result)

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

//? 1: push(): Method that adds one or more elements to the end of an array.
// let fruits=["apple","bannana","graphes","mango"]
// fruits.push("orange")
// console.log(fruits) 

//? 2: pop(): Method that removes the last element from an array.
// let fruits=["apple","bannana","graphes","mango"]
// fruits.pop()
// console.log(fruits)

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// let fruits=["apple","bannana","graphes","mango"]
// fruits.unshift("orange")
// console.log(fruits)

//? 4: shift(): Method that removes the first element from an array.
// let fruits=["orange","apple","bannana","graphes","mango"]
// fruits.shift("orange")
// fruits.shift()
// console.log(fruits)
//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
// ? splice(start, deleteCount, item1, item2, /* …, */ itemN)
// let fruits = ["apple", "orange", "banana", "mango"];

//replace at index 1 position orange= graphe
// fruits.splice(1,1,"graphes")
// console.log(fruits)

//add at index 1 position graphs

// fruits.splice(1,0,"graphes")
// console.log(fruits)

// delete 
// fruits.splice(1,1) //orange detete 
// console.log(fruits) 

// reverse 
// fruits.splice(-1,-2,"stawbery")
// console.log(fruits)


//! what if you want to add the element at the end
// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(fruits.length,0,"stawbery")
// console.log(fruits)

//todo Challenge time
// 1: Add Dec at the end of an array?
// const months = ["Jan", "march", "April", "June", "July"];
// // months.splice(months.length, 0, "Dec"); // using spilce 
// months.push("Dec"); // using push 
// console.log(months); //

// 2: What is the return value of splice method?
// const months = ["Jan", "march", "April", "June", "July"];
// console.log(months.splice()) // empty array

// 3: Update march to March (update)?
// const months = ["Jan", "march", "April", "June", "July"];
// const indexOFMarch = months.indexOf("march")
// months.splice(indexOFMarch, 1, "March")
// console.log(months)
// 4: Delete June from an array?
// const months = ["Jan", "march", "April", "June", "July"];
// const indexOFJune = months.indexOf("June")
// months.splice(indexOFJune, 1,)
// console.log(months)
// const months = ["Jan", "march", "April", "June", "July"];


//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(4)); // 3
// console.log(numbers.indexOf(10)); // -1
// console.log(numbers.indexOf(5,0));//4
// console.log(numbers.indexOf(5,6));//-1


//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const numbers = [1, 2, 3,7, 4, 5, 6, 7, 8, 9];
// console.log(numbers.lastIndexOf(7)); //7
// console.log(numbers.lastIndexOf(7,9)); //7<======found from backward 
// console.log(numbers.lastIndexOf(7,5)); //3<======found from backward 

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)
// const numbers = [1, 2, 3,7, 4, 5, 6, 7, 8, 9];
// const result =numbers.includes(7)
// console.log(result); // true





//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.
// const result =numbers.find((item)=>{
//     return item>6;
//     })
// console.log(result) // 7 given value 
//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const result =numbers.map((item)=>item*5)
// console.log(result)
// const result1 =result.findIndex((item)=>{
//     return item>15;
//     })
// console.log(result1) // give index of next value ans=4

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9]; 
// const result = numbers.filter((item) => {
//     return item > 5;
//     })
//     console.log(result) // [6, 6, 7, 8, 9]
// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let value = 6
// const result = numbers.filter((item) => {
//     return item !== value;
//     })
//     console.log(result) // [1, 2, 3, 4, 5,
// Practice time
// !Example 2: Filtering Products by Price
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];
// Filter products with a price less than or equal to 500
// const result =products.filter((item)=>{
//     return item.price <= 500
// })
// console.log(result)

// //! Filter unique values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// fruits.sort()
// console.log(fruits) // ["Apple", "Banana", "Mango", "Orange"]

// Compare fn 
// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 8, 9];
// 1>2
// 2>4
// 4>3 return 1
// 1 2 3 4

// numbers.sort((a,b)=>{
//     if(a>b) return 1;
//     if(b>a) return -1;
//     // // desensing 
//     // if(a>b) return -1;
//     // if(b>a) return 1;
// })
// console.log(numbers) // [1, 2, 3, 4, 5,

//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.


// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

// Using map to square each number and create a new array
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((item) => item * item);
    console.log(squaredNumbers)
//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

//? Example of reduce method add cart total 

let productPrice = [200,300,400,500,600]
let total = productPrice.reduce((acc,curEle)=>{
    return acc + curEle
},0);
console.log(total) // 2000
