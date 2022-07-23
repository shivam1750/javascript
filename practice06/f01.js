// // ------------ convertion into celcius to farenhahit ---------
// function convertCtoF(celsius) {
//     let fahrenheit= (celsius*9)/5;
//     return fahrenheit+32;
// }
// convertCtoF(30);


// // ---------- Reverse a String -------------

// function reverseString(str) {
//     return  str.split("").reverse().join("");
//   }
//   reverseString("hello");

// // -------------- Factorialize a Number -------------

// function factorialize(num) {
//     if (num === 0) {
//       return 1;
//     }
//     return num * factorialize(num - 1);
// }
// factorialize(5);

// // ------------- 
// function confirmEnding(str, target) {
//     return str.slice(-target.length) === target
//   }
  
//   confirmEnding("Bastian", "n");
  

// // -------------Finders Keepers ------------
// function findElement(arr, func) {
//     return arr.find(func);
// }
// findElement([1, 2, 3, 4], num => num % 2 === 0);

// // ------- Boo who -----------
// function booWho(bool) {
//     return typeof bool === "boolean";
//   }
//   booWho(null);

// -------------- Title Case a Sentence -----------
// // 01
// function titleCase(str) {
//     const newTitle = str.split(" ");
//     const updatedTitle = [];
//     for (let st in newTitle) {
//       updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//     }
//     return updatedTitle.join(" ");
// }

// // 02
// function titleCase(str) {
//     return str
//       .toLowerCase()
//       .replace(/(^|\s)\S/g, L => L.toUpperCase());
//   }

// // ----------------- Falsy Bouncer --------
// function bouncer(arr) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i]) newArray.push(arr[i]);
//     }
//     console.log( newArray);
// }
// bouncer([7, "ate", "", false, 9]);

// // ---------- Where do I Belong -------------
// function getIndexToIns(arr, num) {
//     arr.sort((a, b) => a - b);
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= num)
//         return i;
//     }
  
//     return arr.length;
//   }
//   getIndexToIns([40, 60], 50);

// // ---------------- Mutations -----------
// function mutation(arr) {
//     let test = arr[1].toLowerCase();
//     let target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//       if (target.indexOf(test[i]) < 0) return false;
//     }
//     return true;
//   }
  
// // ------------- Chunky Monkey ---------
// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     let newArr = [];
//     for (let i = 0; i < arr.length; i += size) {
//       newArr.push(arr.slice(i, i + size));
//     }
//     return newArr;
// }
// chunkArrayInGroups(["a", "b", "c", "d"], 2);
