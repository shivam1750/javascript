// ---------- Comparison with the Strict Inequality Operator-----------
/*3 !==  3  // false
3 !== '3' // true
4 !==  3  // true */
// function testStrictNotEqual(val) {
//     if (val!==17) { // Change this line
//       return "Not Equal";
//     }
//     return "Equal";
//   }
// console.log(testStrictNotEqual(10));

//-----------------Comparison with the Greater Than Operator-------------
/*5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false 
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false*/

// function testGreaterThan(val) {
//     if (val>100) {  
//       return "Over 100";
//     }
//     if (val>10) {  
//       return "Over 10";
//     }
//     return "10 or Under";
// }
// testGreaterThan(0);
// testGreaterThan(10);
// testGreaterThan(11);
// testGreaterThan(100);
// testGreaterThan(101);
// testGreaterThan(150);

//------------Introducing Else Statements----
// if (num > 10) {
//     return "Bigger than 10";
//   } else {
//     return "10 or Less";
//   }

//-----------------Introducing Else If Statements----------
// function testElseIf(val) {
//     if (val > 10) {
//       return "Greater than 10";
//     }
//     else if (val < 5) {
//       return "Smaller than 5";
//     }
//     else{
//       return "Between 5 and 10";}
//   }
// testElseIf(7);

// ----------- Selecting from Many Options with Switch Statements -------------
/*
switch (lowercaseLetter) 
{ case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
*/
// function caseInSwitch(val) {
//     switch (val) {
//     case 1:
//       return "alpha";
//       break;
//     case 2:
//       return "beta";
//       break;
//     case 3:
//       return "gamma";
//       break;
//     case 4:
//       return "delta";
//       break;
//   }
// }
// caseInSwitch(1);
// caseInSwitch(2);
// caseInSwitch(3);
// caseInSwitch(4);

// ------------ Adding a Default Option in Switch Statements ------------- 
// -- 01
// function switchOfStuff(val) {
//     switch (val) {
//     case 'a':
//       return 'apple';
//       break;
//     case 'b':
//       return 'bird';
//       break;
//     case 'c':
//       return 'cat';
//       break;
//     default:
//       return 'stuff';
//       break;
// }}
// switchOfStuff(1);

// -- 02
// function sequentialSizes(val) {
//     let answer = "";
//     switch (val) {
//     case 1:
//       return 'Low';
//       break;
//     case 2:
//       return 'Low';
//       break;
//     case 3:
//       return 'Low';
//       break;
//     case 4:
//       return 'Mid';
//       break;
//     case 5:
//       return 'Mid';
//       break;
//     case 6:
//       return 'Mid';
//       break;
//     case 7:
//       return 'High';
//       break;
//     case 8:
//       return 'High';
//       break;
//     case 9:
//       return 'High';
//       break;
//   }    return answer;
// }
// sequentialSizes(1);

//------------------- Replacing If Else Chains with Switch ------------
// function chainToSwitch(val) {
//     let answer = "";
//     switch (val){
//       case "bob": 
//         answer = "Marley";
//         break;
//       case 42 :
//       answer = "The Answer";
//         break;
//       case 1 :
//       answer = "There is no #1";
//         break;
//       case 99 :
//       answer = "Missed me by this much!";
//         break;
//       case 7 :
//       answer = "Ate Nine";
//         break;
//     }
//     return answer;
//   }
//   chainToSwitch(7);

// ------------- Returning Boolean Values from Functions ----------
function isLess(a, b) {
    return  a <= b;
}
isLess(10, 15);

//---------- 
/*
Count 
Change	Cards
+1   	2, 3, 4, 5, 6
0	    7, 8, 9
-1   	10, 'J', 'Q', 'K', 'A' */
// let count=0;
// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }
//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

