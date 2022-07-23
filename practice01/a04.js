//--------------Write Reusable JavaScript with Functions---------
// function reusableFunction() {
//     console.log("Hi World");
// }
// reusableFunction(); // to call the function 

// ------------------- Passing Values to Functions with Arguments -------
// function functionWithArgs(a,b){
//     console.log(a+b);
// }
// functionWithArgs(1,2);
// functionWithArgs(7,9);

// --------------- Return a Value from a Function with Return -------------------
// function timesFive(a) {
//     return a*5;
// }
// const x =timesFive(5)
// console.log(x);
// const y =timesFive(2)
// console.log(y);
// const z =timesFive(0)
// console.log(z);

// ---------------- Global Scope and Functions ---------------
//note = Variables which are declared without the
//      (let or const) keywords are automatically created in the global scope.

// const myGlobal=10;
// function fun1() {
//    oopsGlobal =  5;
// }
// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }

//---------------Local Scope and Functions------------
// function myLocalScope() {
//     var myVar;
//   console.log('inside myLocalScope', myVar);
// }
// myLocalScope();
// // myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope', myVar);

// ----------------   Local vs global       -----------
// const outerWear = "T-Shirt";
// function myOutfit() {
//   const outerWear = "sweater";
//   return outerWear;
// }
// myOutfit();

//--------------- Understanding Undefined Value returned from a Function --------
// let sum = 0;
// function addThree() {
//   sum = sum + 3;
// }
// function addFive(){
//   sum = sum +5;
// }
// addThree();
// addFive();
// console.log(sum);

// ----------- Assignment with a Returned Value --------
// let processed = 0;
// function processArg(num) {
//   return (num + 3) / 5;
// }
// processed=processArg(7);
// console.log(processed);

//-------------Stand in Line----------------
// function nextInLine(arr, item) {
//     arr.push(item);
//     const removed = arr.shift();
//     return removed;
// }
// const testArr = [1, 2, 3, 4, 5];
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

//--------------Understanding Boolean Values---------
// function welcomeToBooleans() {  
//     return true;  // boolean value 1-true 2-false
// }

//-------------Use Conditional Logic with If Statements-----------
// function test (myCondition) {
//     if (myCondition==true) {
//       console.log( "It was true");
//     }
//     else{
//     console.log( "It was false");}
//   }
  
// test(true);
// test(false);

//-------------Comparison with the Equality Operator ----------
/* 1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
3 ===  3  // true
3 === '3' // false */

// --01
// function testEqual(val) {
//     if (val == 12 || val == '12') { // Change this line
//       return "Equal"; 
//     }
//     return "Not Equal";
// }
// testEqual(10);

// --02
// function testStrict(val) {
//     if (val ===7) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
// }
// testStrict(10);


// ----------- Comparison with the Inequality Operator----------
/*1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false */

function testNotEqual(val) {
    if (val !=99 || val ==12) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);