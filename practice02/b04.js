
// ------------------ Use export to Share a Code Block ---------

// You want to use this function in several different JavaScript files. 
// In order to share it with these other files, you first need to export it

//01
// export const add = (x, y) => {
//     return x + y;
//   }

//02
// const uppercaseString = (string) => {
//     return string.toUpperCase();
//   }
  
//   const lowercaseString = (string) => {
//     return string.toLowerCase()
//   }
//   export{uppercaseString,lowercaseString};


// --------------- Reuse JavaScript Code Using import ------
// import will find add in math_functions.js, import just that function 
// for you to use, and ignore the rest. The ./ tells the import to look for 
// the math_functions.js file in the same folder as the current file

// 01
// import {uppercaseString,lowercaseString}from'./string_functions.js';
// uppercaseString("hello");
// lowercaseString("WORLD!");

// 02
// import { add, subtract } from './math_functions.js';

//--------------- Use * to Import Everything from a File ------------
// 01
// import * as myMathModule from "./math_functions.js";
// myMathModule.add(2,3);
// myMathModule.subtract(5,3);

// 02
// import * as stringFunctions from './string_functions.js';
// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");

// --------------- Create an Export Fallback with export default -------------
// Usually you will use this syntax if only one value 
// is being exported from a file. It is also used to create a 
// fallback value for a file or module.

// export default function subtract(x, y) {
//     return x - y;
//   }

// ------------ Import a Default Export ----------
// import subtract from './math_functions.js';
// subtract(7,4);

// ------------------ Complete a Promise with resolve and reject ----------
// three states: pending, fulfilled, and rejected. The promise you created in the 
// last challenge is forever stuck in the pending state because you did not add a 
// way to complete the promise. The resolve and reject parameters given to the promise 
// argument are used to do this. resolve is used when you want your promise to succeed,
//  and reject is used when you want it to fail. These are methods that take an argument, 
//  as seen below.

// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer represents a response from a server
//     let responseFromServer;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {	
//       reject("Data not received");
//     }
//   });

// ------------- Handle a Fulfilled Promise with then----------
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to false to represent an unsuccessful response from a server
//     let responseFromServer = false;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
  
//   makeServerRequest.then(result => {
//     console.log(result);
//   });

// ------------------- Handle a Rejected Promise with catch-------------
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });