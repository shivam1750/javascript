// ----------- Set the Child's Prototype to an Instance of the Parent ----------
// function Animal() {}
// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
// function Dog() {}
// // Add your code below this line
// Dog.prototype = Object.create(Animal.prototype);

// let beagle = new Dog();
// beagle.eat();

// ------------ Reset an Inherited Constructor Property ------------

// function Animal() { }
// function Bird() { }
// function Dog() { }

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// // Only change code below this line

// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let beagle = new Dog();

// ---------- Add Methods After Inheritance -----------

// function Animal() {}
//   Animal.prototype.eat = function() {
//   console.log("nom nom nom");
// };

// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function() {
//   console.log("Woof!");
// };
// let beagle = new Dog();
// beagle.eat();
// beagle.bark();

// // ------------ Override Inherited Methods -----------
// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;
// Penguin.prototype.fly = function() {
//   return "Alas, this is a flightless bird.";
// };
// let penguin = new Penguin();
// console.log(penguin.fly());

// ------------------- Use a Mixin to Add Common Behavior Between Unrelated Objects --------

// let bird = {
//     name: "Donald",
//     numLegs: 2
//   };
  
//   let boat = {
//     name: "Warrior",
//     type: "race-boat"
//   };
  
//   // Only change code below this line
//   let glideMixin = function(obj) {
//     obj.glide = function() {
//       console.log("Gliding!");
//     };
// };
// glideMixin(bird);
// glideMixin(boat);

// -------------- Understand the Immediately Invoked Function Expression (IIFE) --------
// 01
// function makeNest() {
//   console.log("A cozy nest is ready");
// }
// makeNest();

// 02
// (function() {
//     console.log("A cozy nest is ready");
// })();


// ----------- Use an IIFE to Create a Module -----------
 
// 01
// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };

// 02
// let funModule = (function() {
//   return {
//     isCuteMixin: function(obj) {
//       obj.isCute = function() {
//         return true;
//       };
//     },
//     singMixin: function(obj) {
//       obj.sing = function() {
//         console.log("Singing to an awesome tune");
//       };
//     }
//   };
// })();
