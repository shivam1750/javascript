//---------- Iterate with JavaScript While Loops ----------
// const myArray = [];
// let i=5;
// while (i>=0){
//   myArray.push(i);
//   i--;
// }

// ----------- Iterate with JavaScript For Loops ----------
// 01
// const ourArray = [];
// for (let i = 0; i < 10; i ++) {
//   ourArray.push(i);
// }
// console.log(ourArray);

// // 02
// const myArr = [2, 3, 4, 5, 6];
// let total =0 ;
// for (let i=0;i<myArr.length;i++){
//   total+=myArr[i];
// }
// console.log(total);

//  03
// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//         product*=arr[i][j];
//     }
//   }
//     // Only change code above this line
//     return product;
// }
// multiplyAll([[1], [2], [3]]);
// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]);

//-------------- Iterate with JavaScript Do...While Loops ----------
// const myArray = [];
// let i = 10;
// do {
//   myArray.push(i);
//   i++;
// }while (i < 5)

// ----------- Replace Loops using Recursion ---------------

// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }

// replace by recursion

// function sum(arr, n) {
//     if(n <= 0) {
//       return 0;
//     } else {
//       return sum(arr, n - 1) + arr[n - 1];
//     }
//   }

// ------------- Generate Random Fractions with JavaScript --
/* 
avaScript has a Math.random() function that generates a random decimal 
number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can 
return a 0 but never return a 1. */

// function randomFraction() {
//     // Only change code below this line
//     var result = 0;
//     // Math.random() can generate 0. We don't want to     return a 0,
//     // so keep generating random numbers until we get one     that isn't 0
//     while (result === 0) {
//       result = Math.random();
//     }
//     return result;
  
//     // Only change code above this line
//   }

// ---------------- Generate Random Whole Numbers with JavaScript ---------
/*
Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest whole number. */

// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// function randomWholeNum() {

// // Only change code below this line.
// var randomNumberBetween0and9 = Math.floor(Math.random() * 10);

// return Math.floor(Math.random() * 10);
// }

//----------Generate Random Whole Numbers within a Range -------------------
// function randomRange(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
//   }

//---------------- Use the parseInt Function -------------------
// The parseInt() function parses a string and returns an integer.

// function convertToInteger(str) {
//     const a = parseInt(str);
//     return a;
// }
// convertToInteger("56");

// ---------- Use the parseInt Function with a Radix --------------
// function convertToInteger(str) {
//     const x=parseInt(str,2);
//     return x;
//    }
   
//    convertToInteger("10011");
//    convertToInteger("111001");
//    convertToInteger("JamesBond");


// ------------ Use the Conditional (Ternary) Operator --------
// function checkEqual(a, b) {
//     return a != b ? "Not Equal" : "Equal";
// }
// checkEqual(1, 2);
