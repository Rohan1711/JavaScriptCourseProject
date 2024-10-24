//* ===============================
//* Conditional statement Section
//* ===============================

//* ===============================
//* If Statement
//* ===============================

//? If Else:  The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

//? Syntax
// if (condition) {
//   // Code to be executed if the condition is true
// } else {
//   // Code to be executed if the condition is false
// }

//? We can also use an else if clause to check additional conditions:

//* ===============================
//* Interview Question
//* ===============================

//! Requirements:
// If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
// If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
// If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
// If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
// Extended voting eligibility checker with additional conditions
var age = 22;
var citizen = true;
var registered = false;
if (age >= 18) {
  if (citizen) {
    if (registered) {
      console.log("eligible for vote");
    } else {
      console.log("You are eligible to vote but not registered");
    }
  } else {
    console.log("You are not eligible to vote due to citizenship status");
  }
} else {
  console.log("person is younger not eligible for vote");
}

// Assume the user's age, citizenship status, and registration status as inputs
// let userAge = 22;
// let isCitizen = true; // Assume true for citizen, false for non-citizen
// let isRegistered = false; // Assume false for not registered, true for registered
//! Check eligibility using if...else statements with multiple conditions

//* ===============================
//* Interview Questions
//* ===============================
//! 1: Write a program to check if a number is even or odd.
var n = 5;
if (n % 2 === 0) {
  console.log("number is even");
} else {
  console.log("number is odd");
}

//! 2: Write a program to check if a number is prime.
var num=7
var isPrime=true
    for(var i=2;i<num;i++){
        if(num%i===0){
            isPrime=false
            break

        }
        }
        if(isPrime){
        console.log("number is prime")
        }
        else{
            console.log("number is not prime")
        }

//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.

//! 3: Write a program to check if a number is positive, negative, or zero.

var numA = -10;
if (numA === 0) {
  console.log("number is zero");
} else if (numA > 0) {
  console.log("number is positive");
} else {
  console.log("number is negative");
}

//* ===============================
//* Switch Statement
//* ===============================

//? Switch Statement: The switch statement is used to perform different actions based on different conditions.
//? Syntax:
// switch (expression) {
//   case value1:
//     //   Code to be executed if expression === value1
//     break;

//   case value2:
//     //   Code to be executed if expression === value2
//     break;

//   //  More cases can be added as needed

//   default:
//   //  Code to be executed if none of the cases match
// }

//todo let's see the example
//! Explain how the switch statement works and what will be the output when the variable day is set to different values.
var day = "friday";

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("today is thursday");
    break;
  case "friday":
    console.log("today is friday");
    break;
  default:
    console.log("today is weekend");
}

//?=========================
// ? Challenge time
//? ==========================

//! Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.

var a = 5;
var b = 10;
var area = "traingle";
switch (area) {
  case "ractangle":
    console.log(a * b);
    break;
  case "circle":
    var r = 5;
    console.log(3.14 * r * r);
    break;
  case "square":
    console.log(a * a);
    break;
  default:
    console.log("Sorry the shape is not available");
}

//* ===============================
//* While Loop
//* ===============================

// ? While Loop: A while loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specified condition remains true. The loop continues iterating while the condition is true, and it terminates when the condition becomes false.

// while (condition) {
//   // Code to be executed as long as the condition is true
// }

//* Simple while loop to count from 1 to 10 🧑‍💻
var num =1
while (num <= 10) {
    console.log(num);
    num++;
    }

//! practice 🧑‍💻
//? let's create a table of 5
var num5=5
var i =1;
var result
while (i<=10) {
    result=num5*i
    console.log(`${num5} * ${i} = ${result}`);
    i++;
    }


//* ===============================
//* Do-While Loop
//* ===============================

//? Do...While Loop: A do...while loop in JavaScript is similar to a while loop, but it guarantees that the loop body will be executed at least once before checking the loop condition. The loop continues to execute while the specified condition is true, and it terminates when the condition becomes false.

// Syntax: do {
//   // Code to be executed at least once
// } while (condition);

//* Simple do...while loop to count from 1 to 10 🧑‍💻
var i=1
do{
    console.log(i);
    i++;
}while(i<=10);

//? Common Use Cases:
// When you want to guarantee the execution of the loop body at least once.
// When the number of iterations is not known beforehand, and you want to validate the condition after the first iteration.

//? Example: Validating User Input with a Do...While Loop(user need to write a valid number) 🧑‍💻
// var userInput;
// var postiveNumber;
// do {
//     userInput =prompt("enter positive number")
//     postiveNumber=parseFloat(userInput)
// }while(isNaN(postiveNumber)||postiveNumber<0)
//     console.log("you enter number is positive: ",postiveNumber);

//* ===============================
//* For Loop
//* ===============================

//? For Loop: A for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. It's particularly useful when you know the exact number of iterations needed.

// example: for (initialization; condition; iteration) {
//   // Code to be executed in each iteration
// }
// Initialization: Executed before the loop starts. Often used to initialize a counter variable.
// Condition: Evaluated before each iteration. If false, the loop terminates.
// Iteration: Executed after each iteration. Typically used to update the loop control variable.

//* Simple for loop to count from 1 to 10
var i=1
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
//? Key Point:
// The initialization, condition, and iteration expressions are optional. You can omit any or all of them, but you must include the semicolons.
//* The code for (;;) {} represents an infinite loop in JavaScript. This construct is commonly used when you want a loop to run indefinitely or until a break statement is encountered within the loop. It's equivalent to while (true) {}.

//* use case: Game Development:
//? In game development, an infinite loop can be used to continuously update and render game frames until a specific condition (e.g., game over) is met.

// for (;;) {
//   // Update game logic and render frames
// }

//? Common Use Cases:
// When you know the exact number of iterations needed.
// Iterating over elements in an array.
// Performing a task a specific number of times.

//! practice :
//! Calculate the sum of numbers from 1 to 10 using a for loop 🧑‍💻
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum =sum+i;
}
console.log(sum)


//! Generating a Times Table:🧑‍💻
//! Example 3: Generating a times table of 5 with a for loop.

//! Homework ➡️ JavaScript program to print table for given number (8,9,12,15) using for Loop?

//? More Practice
//!1: program To check if a year is a leap year🧑‍💻

// pattern * printing
// for (var i=1;i<=5;i++){
//     var pattern="";
//     for(var j=1;j<=i;j++){
//         pattern=pattern+" * ";
//     }
//     console.log(pattern)
// }


// no . pattern

// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern1 = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // inner loop runs for n
//    for (let num = 1; num <= n; num++) {
//       pattern1 = pattern1+ num + " ";

//    }

//    // Add a new line character after contents of each line
//    pattern1 += "\n";
// }
// console.log(pattern1);

//  

// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += n;
//    }

//    // Add a new line character after contents of each line
//    pattern += "\n";
// }
// console.log(pattern);

// reverser pattern

// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= 6 - n; num++) {
//       pattern += num;
//    }
//    pattern += "\n";
// }
// console.log(pattern);

// traingle pattern

let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // Inner Loop - I -> for the spaces
   for (let space = 1; space <= rows - n; space++) {
      pattern += " ";
   }

   // Inner Loop - II -> for the numbers
   for (let num = 1; num <= 2 * n - 1; num++) {
      pattern += num;
   }

   pattern += "\n";
}
console.log(pattern);