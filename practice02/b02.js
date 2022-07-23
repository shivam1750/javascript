// -------- Use Destructuring Assignment to Assign Variables from Arrays ----------

// 01
// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);

// 02
// let a = 8, b = 6;
// // Only change code below this line
// [a,b]=[b,a];
// console.log(a);
// console.log(b);

// ---------- Use Destructuring Assignment to Assign Variables from Arrays -----------

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   // change code below this line
//   const [a, b, ...arr] = list;
//   // change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr); // should be [3,4,5,6,7,8,9,10]
// console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


// --------------Use Destructuring Assignment to Pass an Object as a Function's Parameters -------

// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
// const half = ({ max, min }) => (max + min) / 2.0;

// --------------- Create Strings using Template Literals -------------------
// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
//     // Only change code below this line
//     const failureItems = [];
//     for (let i = 0; i < arr.length; i++) {
//       failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//     }
//     // Only change code above this line
  
//     return failureItems;
//   }
  
//   const failuresList = makeList(result.failure);

// ------------------- Write Concise Object Literal Declarations Using Object Property Shorthand ------
//01
// const getMousePosition = (x, y) => ({ x: x, y: y });
// console.log(getMousePosition);

//02
// const createPerson = (name, age, gender) => {
//     return { name , age , gender  };
//   }; 

// --------- Use class Syntax to Define a Constructor Function ------------

// class Vegetable {
//     constructor(name) {
//       this.name = name;
//     }
//   }
// const carrot = new Vegetable('carrot');
// console.log(carrot.name);


// -------- Use getters and setters to Control Access to an Object --------- 

// Getter functions are meant to simply return (get) the value of an 
// object's private variable to the user without the user directly accessing 
// the private variable.

// Setter functions are meant to modify (set) the value of an object's 
// private variable based on the value passed into the setter function. 
// This change could involve calculations, or even overwriting the previous value completely.

// // 01
// class Book {
//     constructor(author) {
//       this._author = author;
//     }
//     // getter
//     get writer() {
//       return this._author;
//     }
//     // setter
//     set writer(updatedAuthor) {
//       this._author = updatedAuthor;
//     }
//   }
//   const novel = new Book('anonymous');
//   console.log(novel.writer);
//   novel.writer = 'newAuthor';
//   console.log(novel.writer);

// // 02
// // Only change code below this line
// class Thermostat {
//     constructor(fahrenheit) {
//       this.fahrenheit = fahrenheit;
//     }
    
//     get temperature() {
//       return (5 / 9) * (this.fahrenheit - 32);
//     }
    
//     set temperature(celsius) {
//       this.fahrenheit = (celsius * 9.0) / 5 + 32;
//     }
//   }
//   // Only change code above this line
  
//   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   let temp = thermos.temperature; // 24.44 in Celsius
//   thermos.temperature = 26;
//   temp = thermos.temperature; // 26 in Celsius

