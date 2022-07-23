// // ---------- Sum All Numbers in a Range ---------
// function sumAll(arr) {
//     let max = Math.max(arr[0], arr[1]);
//     let min = Math.min(arr[0], arr[1]);
//     let sumBetween = 0;
//     for (let i = min; i <= max; i++) {
//         sumBetween += i;
//     }
//     return sumBetween;
// }

// sumAll([1, 4]);

// // --------- Diff Two Arrays -------------
// function diffArray(arr1, arr2) {
//     const newArr = [];

//     function onlyInFirst(first, second) {
//         // Looping through an array to find elements that don't exist in another array
//         for (let i = 0; i < first.length; i++) {
//             if (second.indexOf(first[i]) === -1) {
//                 // Pushing the elements unique to first to newArr
//                 newArr.push(first[i]);
//             }
//         }
//     }

//     onlyInFirst(arr1, arr2);
//     onlyInFirst(arr2, arr1);

//     return newArr;
// }

// let x =diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// console.log(x);

// // ----------- Seek and Destroy ----------
// function destroyer(arr) {
//     const valsToRemove = Object.values(arguments).slice(1);
//     const filteredArray = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       let removeElement = false;
//       for (let j = 0; j < valsToRemove.length; j++) {
//         if (arr[i] === valsToRemove[j]) {
//           removeElement = true;
//         }
//       }
//       if (!removeElement) {
//         filteredArray.push(arr[i]);
//       }
//     }
//     return filteredArray;
// }
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// ------------ Wherefore art thou ----------

// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     const sourceKeys = Object.keys(source);
  
//     return collection
//       .filter(obj => sourceKeys
//                        .every(key => obj.hasOwnProperty(key) &&
//                               obj[key] === source[key]));
//   }
//   // test here
// whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" }
//     ],
//     { last: "Capulet" }
//   );

// // ----------- Wherefore art thou -----------

// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     const souceKeys = Object.keys(source);
  
//     // filter the collection
//     return collection.filter(obj => {
//       for (let i = 0; i < souceKeys.length; i++) {
//         if (!obj.hasOwnProperty(souceKeys[i]) ||
//             obj[souceKeys[i]] !== source[souceKeys[i]]) {
//           return false;
//         }
//       }
//       return true;
//     });
//   }
  
//   // test here
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" }
//     ],
//     { last: "Capulet" }
//   );

// // --------------- Spinal Tap Case ----------
// function spinalCase(str) {
//     // Create a variable for the white space and underscores.
//     var regex = /\s+|_+/g;
  
//     // Replace low-upper case to low-space-uppercase
//     str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
//     // Replace space and underscore with -
//     return str.replace(regex, "-").toLowerCase();
//   }
  
//   // test here
//   spinalCase("This Is Spinal Tap");

// // ------------ Pig Latin ----------
// function translatePigLatin(str) {
//     if (str.match(/^[aeiou]/)) return str + "way";
  
//     const consonantCluster = str.match(/^[^aeiou]+/)[0];
//     return str.substring(consonantCluster.length) + consonantCluster + "ay";
//   }
  
//   // test here
//   translatePigLatin("consonant");

// // --------------- replacement ----------
// // Find index where before is on string
// var index = str.indexOf(before);
// // Check to see if the first letter is uppercase or not
// if (str[index] === str[index].toUpperCase()) {
//   // Change the after word to be capitalized before we use it.
//   after = after.charAt(0).toUpperCase() + after.slice(1);
// } else {
//   // Change the after word to be uncapitalized before we use it.
//   after = after.charAt(0).toLowerCase() + after.slice(1);
// }
// // Now replace the original str with the edited one.
// str = str.replace(before, after);

// // ------------ DNA Pairing -------
// function pairElement(str) {
//     // Function to match each character with the base pair
//     let matchWithBasePair = function(char, pairedArray) {
//       switch (char) {
//         case "A":
//           pairedArray.push(["A", "T"]);
//           break;
//         case "T":
//           pairedArray.push(["T", "A"]);
//           break;
//         case "C":
//           pairedArray.push(["C", "G"]);
//           break;
//         case "G":
//           pairedArray.push(["G", "C"]);
//           break;
//       }
//     };
  
//     // Find pair for every character in the string
//     const paired = [];
//     for (let i = 0; i < str.length; i++) {
//       matchWithBasePair(str[i], paired);
//     }
//     return paired;
//   }
  
//   pairElement("GCG");

// // --------- Drop it -----------
// function dropElements(arr, func, i = 0) {
//     return i < arr.length && !func(arr[i])
//       ? (dropElements(arr.slice(i + 1), func, i))
//       : arr;
//   }
  
//   // test here
//   dropElements([1, 2, 3, 4], function(n) {
//     return n >= 3;
//   });

