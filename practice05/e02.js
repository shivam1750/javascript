// ------------- Create complex multi-dimensional arrays ---------

// let myNestedArray = [
//     ["unshift", false, 1, 2, 3, "complex", "nested"],
//     ["loop", "shift", 6, 7, 1000, "method"],
//     ["concat", false, true, "spread", "array", ["deep"]],
//     ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
//     ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
// ];
// console.log(myNestedArray);


// --------- Add Key-Value Pairs to JavaScript Objects ---------

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28
// };
// foods["bananas"] = 13;
// foods["grapes"] = 35;
// foods["strawberries"] = 27;

// console.log(foods);


// ---------- Modify an Object Nested Within an Object -----------

// let userActivity = {
//     id: 23894201352,
//     date: 'January 1, 2017',
//     data: {
//       totalUsers: 51,
//       online: 42
//     }
// };
// userActivity.data.online =45;  
// console.log(userActivity);

// ------------- Access Property Names with Bracket Notation -----------

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
// };
// function checkInventory(scannedItem) {
//        return foods[scannedItem];
// }
// console.log(checkInventory("apples"));


// ------------- Use the delete Keyword to Remove Object Properties ----------
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
// delete foods.oranges;
// delete foods.plums;
// delete foods.strawberries;  
// console.log(foods);


// ----------- Check if an Object has a Property -----------
// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
// };
// function isEveryoneHere(userObj) {
//     return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
//       userObj.hasOwnProperty(name)
//     );
// }
// console.log(isEveryoneHere(users));

// -------------- Modify an Array Stored in an Object -------------

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
      ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
  
function addFriend(userObj, friend) {
   userObj.data.friends.push(friend);
    return userObj.data.friends;
  }
  
  console.log(addFriend(user, 'Pete'));
