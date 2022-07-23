// string cannot be updated onces it created 
/*
let myStr = "Jello World";      
myStr[0] = "H";              // it show error 
*/ 
// let myStr = "Jello World";      
// myStr= "Hwllo World";      // we direcct update a string
// console.log(myStr);

// notes =======       1) length start from 1   2) to access string letter they start from [0]

// -------------------------------------

// const firstName = "Ada";
// const lastLetter = firstName[firstName.length - 1];
// console.log(lastLetter)

// -----------------------------------------

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";
// const wordBlanks =" "+ myNoun+" "+myVerb+" "+myAdjective+" "+myAdverb;

// -------------------- Store Multiple Values in one Variable using JavaScript Arrays ---------------------

// const myArray = ["peanut butter", 123];
// console.log(myArray);

// ---------
// const myArray = [["Bulls", 23], ["White Sox", 45]];
// console.log(myArray);

// ----------------- Access Array Data with Indexes ---------------

// const array = [50, 60, 70];
// console.log(array[0]);
// const data = array[1];

// --------Modify Array Data With Indexes------------------

// const ourArray = [50, 40, 30];
// ourArray[0] = 15;

// ------------Access Multi-Dimensional Arrays With Indexes-----------------------------
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14]
//   ];
  
// console.log(arr[3]);
// console.log(arr[3][0]);
// console.log(arr[3][0][1]);

// ------------ Manipulate Arrays With push() --------------
// const arr1 = [1, 2, 3];
// arr1.push(4);
// console.log(arr1);

// const arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// console.log(arr2);

// ------------- Manipulate Arrays With pop() ---------------

// const myArray = [["John", 23], ["cat", 2]];
// const removedFromMyArray=myArray.pop()
// console.log(myArray);
// console.log(removedFromMyArray);

// ------------ Manipulate Arrays With shift()------------
// .shift() function to remove the first item

// const ourArray = ["Stimpson", "J", ["cat"]];  
// const removedFromOurArray = ourArray.shift();
// console.log(removedFromOurArray);

// ------------ Manipulate Arrays With unshift()------------

// .unshift() works exactly like .push(), but instead of 
// adding the element at the end of the array, unshift() 
// adds the element at the beginning of the array

// const ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// var x = ourArray.unshift("Happy");
// console.log(ourArray);

// ------------- Shopping List ---------------
// const myList = [['q',1],['a',2],['b',3],['x',4],['c',5]];

const x = "sh\'\'ss"
console.log(x);