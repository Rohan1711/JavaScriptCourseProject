//* ==========================================
//*    ECMAScript Features (2020) / ES11
//* =========================================

//? List of new useful features added in ES8  👇
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.
// promise.allSettled

//* ===================
//*  BigInt
//* ================
//? BigInt: BigInt in JavaScript is a data type used to represent and perform operations on large integers that exceed the limits of regular numbers.

//? Creating BigInts:
//? - Using the `n` suffix:
// let num = 4448723595486436681165565315n
// console.log(num)
// let maxNum = Number.MAX_SAFE_INTEGER
// console.log(maxNum) // 9007199254740991

// Using the BigInt() constructor:
// const anotherLargeNumber = BigInt("123456789012345678901234567890");
// console.log(anotherLargeNumber);
// let add = anotherLargeNumber + 10n
// console.log(add)

//* =======================================
//*  Nullish Coalescing Operator ??
//* ===================================
//? In JavaScript, the nullish coalescing operator (??) is a logical operator that provides a concise way to handle nullish (null or undefined) values. It returns its right-hand operand when its left-hand operand is null or undefined, otherwise, it returns the left-hand operand.

// let favNum = 0 // falsy
// console.log(typeof favNum)
// userFavNum = favNum || 10;
// console.log(userFavNum)

// let myName = null;  
// let text = "missing";
// let result = myName ?? text; 
// console.log(result) //The ?? operator returns the first argument if it is not nullish (null or undefined).Otherwise it returns the second.

// let myName = "rohan";  
// let text = "missing";
// let result = myName ?? text; 
// console.log(result)

//* =======================================
//*  Optional Chaining Operator (?.)
//* ===================================
//? It provides a concise way to access properties of an object without worrying about the existence of intermediate properties. It's particularly useful when working with nested objects or accessing properties of objects that may be null or undefined.

// const person = {
//   name: "John",
//   address: {
//     city: null,
//     zipCode: 12345,
//   },
// };

//? Accessing nested properties without optional chaining
// console.log(person.address.city)
// console.log(person.address.dist)


//? with optional chaining

// let city1 =person?.address?.city ?? "city not present"
// console.log(city1) // null
// let city = person?.address?.dist 
// console.log(city) //undefined

//? One more example
// The optional chaining operator can be chained multiple times to access deeply nested properties:

//* =======================================
//*  Promise.allSettled()
//* ===================================
//? We will cover later in our Promises section part of the video and you gonna love that part.
