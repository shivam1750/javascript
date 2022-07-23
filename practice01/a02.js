// Escaping Literal Quotes in Strings
// for escape the string we can use ==        (   \"   )

// const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
// console.log(myStr);
// -------------------------------------------------------

// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


/*    
--------Escape Sequences in Strings----------

Code	Output

\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr);

// ------------------------

// const myStr = "This is the start."+"This is the end."; 
// console.log(myStr);

// const mystr ='My name is Alan,' + ' I concatenate.';
// console.log(mystr);

//--------------------------------

// let myStr ="This is the first sentence.";
// myStr +=" This is the second sentence.";
// console.log(myStr);

// ----------------------

// const myName = "shivam";
// const myStr = "My name is and "+myName+" and I am well!";
// console.log(myStr);

// -----------------------
// const someAdjective = "python";
// let myStr = "Learning to code is ";
// myStr+=someAdjective;
// console.log(myStr);

// ------------------------
//          ------------ Find the Length of a String ------------------
// Setup
// let lastNameLength = 0;
// const lastName = "Lovelace";

// Only change code below this line
// lastNameLength = lastName.length;

// ----------------------------------
// console.log("Alan Peter".length);

// -------------- Use Bracket Notation to Find the First Character in a String --------
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName)