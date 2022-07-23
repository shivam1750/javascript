//------------- Mutate an Array Declared with const ---------

//01

// const s = [5, 7, 2];
// function editInPlace() {
//   // Using s = [2, 5, 7] would be invalid
//   s[0]=2;
//   s[1]=5;
//   s[2]=7;
//   console.log(s);
// }
// editInPlace();

//02

// const s = [5, 6, 7];
// s = [1, 2, 3];
// s[2] = 45;
// console.log(s);


// ---------- Prevent Object Mutation -------------
//Object.freeze to prevent data mutation.

//01
// let obj = {
//     name:"FreeCodeCamp",
//     review:"Awesome"
//   };
//   Object.freeze(obj);
//   obj.review = "bad";
//   obj.newProp = "Test";
//   console.log(obj);

//-------------Use Arrow Functions to Write Concise Anonymous Functions (create arrow function) ----------
//NOTES : arrow function work only in const variable
//formate     const .... = (parameter) =>{ }

//01
// const myFunc = function() {
//     const myVar = "value";
//     return myVar;
//   }
//   ES6 provides us with the syntactic sugar to not have to write anonymous
//  functions this way. Instead, you can use arrow function syntax:
  
//02
//   const myFunc = () => {
//     const myVar = "value";
//     return myVar;
//   }
//When there is no function body, and only a return value, arrow 
// function syntax allows you to omit the keyword return as well as 
// the brackets surrounding the code. This helps simplify smaller functions 
// into one-line statements:
  
//03
//   const myFunc = () => "value";
//   console.log(myFunc);
//   This code will still return the string value by default.
  
  
//--------------Write Arrow Functions with Parameters--------------
//01
// const multiplier = (item, multi) => item * multi;
// multiplier(4, 2);

//02
// const myConcat = (arr1, arr2)=> {
//     return arr1.concat(arr2);
// }
// console.log(myConcat([1, 2], [3, 4, 5]));


// ----------- Set Default Parameters for Your Functions ------------

//01

// const greeting = (name = "Anonymous") => "Hello " + name;
// console.log(greeting("John"));
// console.log(greeting());

//02
// const increment = (number, value=1) => number + value;

//----------------- Use the Rest Parameter with Function Parameters ----------- 
// function howMany(...args) {
//     return "You have passed " + args.length + " arguments.";
//   }
//   console.log(howMany(0, 1, 2));
//   console.log(howMany("string", null, [1, 2, 3], { }));

// ------------------- Use the Spread Operator to Evaluate Arrays In-Place ---------------------
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// arr2 = [...arr1];  // Change this line
// console.log(arr2);

// -------------- Use Destructuring Assignment to Extract Values from Objects -----------

// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
// };
// // const today = HIGH_TEMPERATURES.today;
// // const tomorrow = HIGH_TEMPERATURES.tomorrow;
// const {today ,tomorrow} = HIGH_TEMPERATURES;

// -------------------- Use Destructuring Assignment to Assign Variables from Objects ---------
// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
// };
//   // change code below this line  
//   const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
//   // change code above this line
// console.log(highToday); // should be 77
// console.log(highTomorrow); // should be 80

// --------------- Use Destructuring Assignment to Assign Variables from Nested Objects ---------
// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };
  
//   // Only change code below this line
// const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
//   // Only change code above this line

// ------------ Use Destructuring Assignment to Assign Variables from Nested Objects --------- 
// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };
//   // const lowToday = LOCAL_FORECAST.today.low;
//   // const highToday = LOCAL_FORECAST.today.high;
//   const {today:{low:lowToday,high:highToday}}=LOCAL_FORECAST;


  