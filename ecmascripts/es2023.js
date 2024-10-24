//* ==========================================
//*    ECMAScript Features (2022) / ES13
//* =========================================

//? List of new useful features added in ES8  👇
// Array.findLast()
// Array.findLastIndex()
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start, deleteCount, ...items)
// Array.prototype.with(index, value)

//* ===============================================
//*  Array.findLast() & Array.findLastIndex()
//* ==============================================
//? This function will allow us to find element from the last to first of the array based on a condition.
// const array = [1, 2, 3, 4, 5, 6, 4];
// const lastElement = array.findLast((element) => element > 3);
// console.log(lastElement); // Output: 6
// const lastIndex = array.findLastIndex((element) => element > 3);
// console.log(lastIndex); // Output: 5
//? This function will return the index of the last element that satisfies the provided testing function.

//* ===============================================
//*  New Array.prototype functions
//* ==============================================

const myNames = ["vinod", "bahadur", "thapa", "kodyfier"];

//? Array.prototype.toReversed();
console.log(myNames.toReversed()); // Output: ["kodyfier", "thapa", "bahadur", "vinod"]

//? Array.prototype.toSorted(compareFn);
console.log(myNames.toSorted());

//? Array.prototype.toSpliced(start, deleteCount, ...items);
console.log(myNames.toSpliced(1, 1, "RK"))
console.log("original",myNames)

//? Array.prototype.with(index, value);

console.log(myNames.with(1, "RK"))

//* The with() method in JavaScript is used to change the value of an element at a specific index in an array. It takes two arguments: the index of the element to be changed and the new value. It returns a new array with the changed element, leaving the original array unchanged.
