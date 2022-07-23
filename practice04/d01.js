// ------------ Understanding the Differences between the freeCodeCamp and Browser Console ----------
// let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
// console.log(output);
// console.clear()

// ---------------- Use typeof to Check the Type of a Variable -----------------
// // typeof
// let seven = 7;
// let three = "3";
// console.log(seven + three);

// console.log(typeof seven);
// console.log(typeof three);
// // console.log(typeof [])
// // console.log(typeof '3')

// ------------ Catch Unclosed Parentheses, Brackets, Braces and Quotes ----------- 

// let myArray = [1, 2, 3];
// let arraySum = myArray.reduce((previous, current) =>  (previous + current));
// console.log(`Sum of array values is: ${arraySum}`);

// -------------- Catch Use of Assignment Operator Instead of Equality Operator ------------
// let x = 7;
// let y = 9;
// let result = "to come";

// if(x == y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }

// console.log(result);

// -------------- Use Caution When Reinitializing Variables Inside a Loop ------------

// function zeroArray(m, n) {
//     let newArray = [];
//     for (let i = 0; i < m; i++) {
//       let row = []; 
//       for (let j = 0; j < n; j++) {
//         row.push(0);
//       }
//       newArray.push(row);
//     }
//     return newArray;
// }
// let matrix = zeroArray(3, 2);
// console.log(matrix);

// ------------------