// ------------ Build JavaScript Objects ----------
// const myDog = {
//     name:'shivam',
//     legs:20,
//     tails:12,
//     friends:[1,2,3],
//     make: "Ford",
//     5: "five",
//     "model": "focus"
// };

// --------- Accessing Object Properties with Dot Notation ------
/*
There are two ways to access the properties of an object: 
dot notation (.) and 
bracket notation ([]), similar to an array.
*/
//01
// const testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };
// const hatValue = testObj.hat;      
// const shirtValue = testObj.shirt;  

// //02
// const myObj = {
//     prop1: "val1",
//     prop2: "val2"
//   };
  
//   const prop1val = myObj.prop1;
//   const prop2val = myObj.prop2;

// //03
// const myObj = {
//     "Space Name": "Kirk",
//     "More Space": "Spock",
//     "NoSpace": "USS Enterprise"
// };
// myObj["Space Name"];
// myObj['More Space'];
// myObj["NoSpace"];

// //04
// const testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
// };
// const entreeValue = testObj["an entree"];
// const drinkValue = testObj["the drink"];

// ------------ Accessing Object Properties with Variables --------------
// const dogs = {
//     Fido: "Mutt",
//     Hunter: "Doberman",
//     Snoopie: "Beagle"
//   };
  
//   const myDog = "Hunter";
//   const myBreed = dogs[myDog];
//   console.log(myBreed);

// ---------------- Updating Object Properties ---------------
// const myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
// myDog['name']='Happy Coder';
// var x = myDog['name'];
// console.log(x);

//---------------Add New Properties to a JavaScript Object-----------
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
// myDog.bark = "woof";

//----------- Delete Properties from a JavaScript Object ------------
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
// };
// delete myDog.tails;

// ------------ Using Objects for Lookups --------
// function phoneticLookup(val) {
//     let result = "";
//     const x= {
//     "alpha": "Adams",
//     "bravo":"Boston",
//     "charlie":"Chicago",
//     "delta":"Denver",
//     "echo":"Easy",
//     "foxtrot":"Frank"
//     };
//     result = x[val];
//     return result;
// }
  
// ----------- Testing Objects for Properties ---------
/* Sometimes it is useful to check if the property of a given object exists or not. 
We can use the .hasOwnProperty(propname) method of objects to determine if that 
object has the given property name. .hasOwnProperty() returns true or false*/
// //01
// const myObj = {
//     top: "hat",
//     bottom: "pants"
// };  
// myObj.hasOwnProperty("top");
// myObj.hasOwnProperty("middle");

// console.log(myObj.hasOwnProperty("top"));
// console.log(myObj.hasOwnProperty("middle"));

// //02
// function checkObj(obj, checkProp) {
//     if (obj.hasOwnProperty(checkProp)) {
//       return obj[checkProp];
//     } else {
//       return "Not Found";
//     }
//   }

// ---------- Manipulating Complex Objects ------------
// const myMusic = [
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true
//     }
//     ,
//     {
//       "artist": "Billy ",
//       "title": " Man",
//       "release_year": 197,
//       "formats": [
//         "D",
//         "8",
//         "LP"
//       ],
//       "gold": true
//     }
//     ,
//     {
//       "artist": " Joel",
//       "title": "Piano ",
//       "release_year": 173,
//       "formats": [
//         "C",
//         "T",
//         "LP"
//       ],
//       "gold": true
//     }
// ];

// -------------- Accessing Nested Objects----------
//01
// const myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };
//   // myStorage.car.inside.["glove box"];
// const gloveBoxContents = myStorage.car.inside['glove box'];

//02
// const ourStorage = {
//     "desk": {
//       "drawer": "stapler"
//     },
//     "cabinet": {
//       "top drawer": { 
//         "folder1": "a file",
//         "folder2": "secrets"
//       },
//       "bottom drawer": "soda"
//     }
//   };
  
//   ourStorage.cabinet["top drawer"].folder2;
//   ourStorage.desk.drawer;
  
// ---------- Accessing Nested Arrays -----------
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
];
const secondTree = myPlants[1].list[1];
