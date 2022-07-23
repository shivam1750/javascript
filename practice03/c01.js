// ------------ Using the Test Method -----------      ( .test())
// use to find the word into string

//01
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); 
// console.log(result);

//02
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);

// ----------- Match a Literal String with Different Possibilities --------
// You can search for multiple patterns using the alternation or OR operator: |

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat| bird| fish/; // Change this line
// let result = petRegex.test(petString);
// console.log(result);

// ------------ Ignore Case While Matching --------------
// the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. 
// This regex can match the strings ignorecase, igNoreCase, and IgnoreCase

// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp/i; 
// let result = fccRegex.test(myString);
// console.log(result);

// ------------------------Extract Matches -------------(.match())
//01
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result =extractStr.match(codingRegex); 

//02
// "Hello, World!".match(/Hello/);
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// ourStr.match(ourRegex);

// notes :
// 'string'.match(/regex/);
// /regex/.test('string');

// ------------ Find More Than the First Match --------
// To search or extract a pattern more than once, you can use the global search flag: g.
// i = small and captial finding

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi; 
// let result = twinkleStar.match(starRegex);

// ---------- Match Anything with Wildcard Period ----------
// The wildcard character . will match any one character

// // 01
// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr);
// huRegex.test(hugStr);

// // 02
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; 
// let result = unRegex.test(exampleStr);

// ----------- Match Single Character with Multiple Possibilities --------

// // 01
// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex);
// bagStr.match(bgRegex);
// bugStr.match(bgRegex);
// bogStr.match(bgRegex);

// // 02
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; 
// let result = quoteSample.match(vowelRegex);

// ------------------ Match Letters of the Alphabet -----------
// Inside a character set, you can define a range of characters to match using a hyphen character:  -

// // 01
// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;
// catStr.match(bgRegex);
// batStr.match(bgRegex);
// matStr.match(bgRegex);

// //02
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi; 
// let result = quoteSample.match(alphabetRegex);

// ------- Match Numbers and Letters of the Alphabet -------------

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig;
// let result = quoteSample.match(myRegex); 

// ----------- Match Single Characters Not Specified ----------
// negated character set, you place a caret character (^) after 
// the opening bracket and before the characters you do not want to match.

// ----------- Match Characters that Occur One or More Times ---------
// + character to check if that is the case.

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; 
// let result = difficultSpelling.match(myRegex);

//  ------------ Match Characters that Occur Zero or More Times --------
// note : for multiple character checking we use * 

// //01
// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex);
// gPhrase.match(goRegex);
// oPhrase.match(goRegex);

// //02
// let chewieQuote = 'Aaaaaaaaaaaaaaaasdfssad';
// let chewieRegex = /Aa*/g; 
// let result = chewieQuote.match(chewieRegex);


// ------------------- Use Multiple Conditional (Ternary) Operators ------------ 
// function checkSign(num) {
//     return (num>0) ? "positive" : (num== 0) ? "zero" : "negative";
// }
// checkSign(10);
// checkSign(0);
// checkSign(-10);

// --------------------- Find Characters with Lazy Matching ---------
// ? == ? character to change it to lazy matching. 
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);
console.log(text.match(myRegex));

