// // --------- Sort an Array Alphabetically using the sort Method ----------

// function alphabeticalOrder(arr) {
//     // Add your code below this line
//     return arr.sort(function(a, b) {
//       return a === b ? 0 : a < b ? -1 : 1;
//     });
//     // Add your code above this line
//   }
//   let x=alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
//   console.log(x);

// // -------- Return a Sorted Array Without Changing the Original Array ------
//   const globalArray = [5, 6, 3, 2, 9];

//   function nonMutatingSort(arr) {
//     // Only change code below this line
//     return [].concat(arr).sort(function(a, b) {
//       return a - b;
//     });
  
//     // Only change code above this line
//   }
  
//   let x=nonMutatingSort(globalArray);
//   console.log(x);

// ------- Split a String into an Array Using the split Method -----------------------------
// // 01
// const str = "Hello World";
// const bySpace = str.split(" ");

// const otherString = "How9are7you2today";
// const byDigits = otherString.split(/\d/);

// // 02
// function splitify(str) {
//     // Only change code below this line
//     return str.split(/\W/);
  
  
//     // Only change code above this line
//   }
  
//   let x=splitify("Hello World,I-am code");
//   console.log(x);

// -------- Combine an Array into a String Using the join Method ------
// // 01
// function sentensify(str) {
//     // Only change code below this line
//     return str.split(/\W/).join(" ");
  
  
//     // Only change code above this line
//   }
  
//   let x=sentensify("May-the-force-be-with-you");
//   console.log(x);

// // 02
//   const arr = ["Hello", "World"];
//   const str = arr.join(" ");

// // -------------- Apply Functional Programming to Convert Strings to URL Slugs ----------
// // Only change code below this line
// var globalTitle = "Winter Is Coming";

// function urlSlug(title) {
//   return title
//     .split(" ")
//     .filter(substr => substr !== "")
//     .join("-")
//     .toLowerCase();
// }
// // Only change code above this line
// // urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

// var winterComing = urlSlug(globalTitle);
// console.log(winterComing);

// ----------- Use the every Method to Check that Every Element in an Array Meets a Criteria ------
// function checkPositive(arr) {
//     // Only change code below this line
//     return arr.every(function(value) {
//       return value > 0;
//     });
  
//     // Only change code above this line
// }
// checkPositive([1, 2, 3, -4, 5]);

// --------- Use the some Method to Check that Any Elements in an Array Meet a Criteria -----
// The some method works with arrays to check if any element passes a particular test. It returns a 
// Boolean value - true if any of the values meet the criteria, false if not

// function checkPositive(arr) {
//     // Only change code below this line
  
//     return arr.some(elem => elem > 0);
  
//     // Only change code above this line
//   }
  
//   checkPositive([1, 2, 3, -4, 5]);

// ----------- Introduction to Currying and Partial Application ---------
function add(x) {
    // Only change code below this line
      return y => z => x + y + z;
  // or method
  // return function(y) {
  //     return function(z) {
  //       return x + y + z;
  //     };
  //   };
  
    // Only change code above this line
  }
  
  add(10)(20)(30);

