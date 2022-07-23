// // ---------- Create a Basic JavaScript Object -----------
// let dog = {
//     name: "dog",
//     numLegs: 2
// };
// console.log(typeof dog) ;

// // ----------- Use Dot Notation to Access the Properties of an Object -------

// let dog = {
//     name: "Spot",
//     numLegs: 4
// };
// console.log(dog.name);
// console.log(dog.numLegs);

// ------------ Create a Method on an Object -------- 
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {
//       return "This dog has " + dog.numLegs + " legs.";
//     }
// };
// dog.sayLegs();

// // ----------- Make Code More Reusable with the this Keyword ----------
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
// };
// dog.sayLegs();

// ------------ Make Code More Reusable with the this Keyword ---------

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {
//       return "This dog has " + this.numLegs + " legs.";
//     }
// };
// dog.sayLegs();


// ------------ Define a Constructor Function -------------
// // 01
// function Dog() {
//     (this.name = "Geogre"), 
//     (this.color = "White"), 
//     (this.numLegs = 4);      
//   }
// Dog();
// let x = new Dog();
// // 02
// function Bird() {
//     this.name = "Albert";
//     this.color = "blue";
//     this.numLegs = 2;
//   }
  
// // ------------ Use a Constructor to Create Objects -----------
// function Dog() {
//     this.name = "Rupert";
//     this.color = "brown";
//     this.numLegs = 4;
//   }
//   // Only change code below this line
//   let hound= new Dog();
//   console.log(hound)


// ---------- Extend Constructors to Receive Arguments ---------
// function Dog(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
//   }
// let terrier = new Dog("George", "White");
// console.log(terrier)


// ------------ Verify an Object's Constructor with instanceof ----------

// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
// }
// let myHouse =new House(12);
// myHouse instanceof House ;
// console.log(myHouse instanceof House );

// ------------- Understand Own Properties ---------

// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
// }
// let canary = new Bird("Tweety");
// let ownProps = [];
// for (let property in canary) {
//     if (canary.hasOwnProperty(property)) {
//       ownProps.push(property);
//     }
// }
// console.log(ownProps);


// ------------ Use Prototype Properties to Reduce Duplicate Code ------------
// function Dog(name) {
//     this.name = name;
// }
// Dog.prototype.numLegs=3;
// let beagle = new Dog("Snoopy");
// console.log(new Dog());

// ----------- Iterate Over All Properties -------
// function Dog(name) {
//     this.name = name;
//   }
  
//   Dog.prototype.numLegs = 4;
  
//   let beagle = new Dog("Snoopy");
  
//   let ownProps = [];
//   let prototypeProps = [];
  
//   // Add your code below this line
//   for (let property in beagle) {
//     if (Dog.hasOwnProperty(property)) {
//       ownProps.push(property);
//     } else {
//       prototypeProps.push(property);
//     }
//   }

// -------------- Understand the Constructor Property ------------- 
//   function Dog(name) {
//     this.name = name;
//   }
//   function joinDogFraternity(candidate) {
//     if (candidate.constructor === Dog) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// // --------- Change the Prototype to a New Object --------- 
// function Dog(name) {
//     this.name = name;
// }
// Dog.prototype = {
//     // Only change code below this line
//     numLegs: 2,
//     eat() {
//       console.log("nom nom nom");
//     },
//     describe() {
//       console.log("My name is " + this.name);
//     }
// };

// // --------- Remember to Set the Constructor Property when Changing the Prototype --------
// function Dog(name) {
//     this.name = name;
//   }
  
//   // Only change code below this line
//   Dog.prototype = {
//   constructor:Dog,
//     numLegs: 4,
//     eat: function() {
//       console.log("nom nom nom");
//     },
//     describe: function() {
//       console.log("My name is " + this.name);
//     }
//   };

// // ------------ Understand Where an Object’s Prototype Comes From -----------
// function Dog(name) {
//     this.name = name;
//   }
  
//   let beagle = new Dog("Snoopy");
  
//   // Only change code below this line
//   let x=Dog.prototype.isPrototypeOf(beagle);
//   console.log(x);

// ----------- Understand the Prototype Chain ------------
// function Dog(name) {
//     this.name = name;
//   }
//   let beagle = new Dog("Snoopy");
//   Dog.prototype.isPrototypeOf(beagle);  // yields true
//   // Fix the code below so that it evaluates to true
//   Object.prototype.isPrototypeOf(Dog.prototype);

// ---------------------- inheritance -------------
// function Cat(name) {
//     this.name = name;
//   }
  
//   Cat.prototype = {
//     constructor: Cat
//   };
  
//   function Bear(name) {
//     this.name = name;
//   }
  
//   Bear.prototype = {
//     constructor: Bear
//   };
  
//   function Animal() {}
  
//   Animal.prototype = {
//     constructor: Animal,
//     eat: function() {
//       console.log("nom nom nom");
//     }
// };


// 
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"
