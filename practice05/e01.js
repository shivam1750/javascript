// ------------- Use an Array to Store a Collection of Data ----------- 
// 01
// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length);
// 02
// let yourArray = ["a", 2, true, "c", null, { name: "john" }];
// console.log(yourArray);

// --------- Access an Array's Contents Using Bracket Notation ---------
// let myArray = ["a", "b", "c", "d"];
// myArray[1]='z';
// console.log(myArray);

// --------- Add Items to an Array with push() and unshift() --------
// 01
// function mixedNumbers(arr) {
//     // Only change code below this line
//     arr.unshift("I", 2, "three");
//     arr.push(7, "VIII", 9);
//     // Only change code above this line
//     return arr;
//   }
//   console.log(mixedNumbers(['IV', 5, 'six']));


// --------- Remove Items from an Array with pop() and shift() -------
 
// function popShift(arr) {
//     let popped=arr.pop(); // Change this line
//     let shifted=arr.shift(); // Change this line
//     return [shifted, popped];
//   }
   
//   console.log(popShift(['challenge', 'is', 'not', 'complete']));


// ---------- Remove Items Using splice() ------- 
// // 01
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// arr.splice(1,4);
// console.log(arr);

// // 02
// let array = ['I', 'am', 'feeling', 'really', 'happy'];
// let newArray = array.splice(3, 2);

// // ------------ Add Items Using splice() ------------ 
// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14);
// console.log(numbers);

// // ---------------- Add Items Using splice() --------

// function htmlColorNames(arr) {
//     arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
//     return arr;
//   }
// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


// ------------------ Copy Array Items Using slice() ----------
// function forecast(arr) {
//     return arr.slice(2, 4);
// }
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// ---------------- Copy an Array with the Spread Operator ----------
// The spread syntax simply looks like this: ...

// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       // Only change code below this line
//       newArr.push([...arr]);
//       // Only change code above this line
//       num--;
//     }
//     return newArr;
// }
// console.log(copyMachine([true, false, true], 2));


// // ---------- Combine Arrays with the Spread Operator -----------
// function spreadOut() {
//     let fragment = ["to", "code"];
//     let sentence = ["learning", ...fragment, "is", "fun"]; // change this line
//     return sentence;
// }
// console.log(spreadOut());


// --------- Check For The Presence of an Element With indexOf() -------

// // 01
// let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
// let x = fruits.indexOf('dates');
// console.log(x);
// let y = fruits.indexOf('oranges');
// console.log(y);
// let z = fruits.indexOf('pears');
// console.log(z);

// // 02
// function quickCheck(arr, elem) {
//     if (arr.indexOf(elem) >= 0) {
//       return true;
//     }
//     return false;
//   }
//   console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// --------------- Iterate Through All an Array's Items Using For Loops ----------
// // 01
// function filteredArray(arr, elem) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].indexOf(elem) == -1) {
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr;
// }
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// // 02
// function greaterThanTen(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 10) {
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr;
// }
// greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

