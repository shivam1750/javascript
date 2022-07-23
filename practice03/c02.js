// ----------- Match Beginning String Patterns -----------
// ^ == beginning of letter line 

// 01
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal)
// console.log(result)

// 02
// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// firstRegex.test(firstString);
// let notFirst = "You can't find Ricky now.";
// firstRegex.test(notFirst);
// // console.log(firstString.test(firstRegex));  //-------- incorrect method to write test function

// --------------- Match Ending String Patterns ------------
//  $ == ending of letter line 

// // 01
// let theEnding = "This is a never ending story";
// let storyRegex = /story$/;
// let x =storyRegex.test(theEnding);
// console.log(x);
// let noEnding = "Sometimes a story will have to end";
// let y =storyRegex.test(noEnding);
// console.log(y);

// // 02
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; 
// let result = lastRegex.test(caboose);

// ----------- Match All Letters and Numbers ----------
// class also includes the underscore character (_)
//  (\w) to match all letter 
// 01

// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// console.log(longHand); // 1) longhand and 2) shorthand ==  they print directly they only
// let numbers = "42";
// let varNames = "important_var";
// let x=longHand.test(numbers);
// console.log(x);
// let y=shortHand.test(numbers);
// console.log(y);
// let z=longHand.test(varNames);
// console.log(z);
// let u=shortHand.test(varNames);
// console.log(u);

// 02

// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/gi; 
// let result = quoteSample.match(alphabetRegexV2).length;
// console.log(result);

// ------------ Match All Numbers -----------

// The shortcut to look for digit characters is \d, with a lowercase d. This is equal 
// to the character class [0-9], which looks for a single character of any number 
// between zero and nine.

// note : small d == number calculate between [0-9] (by considering single string)

// 01
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; 
// let result = movieName.match(numRegex).length;
// console.log(result);
// console.log(movieName.match(numRegex));
 

// ----------- Match All NON-Numbers -----------

// note : capital D == except number calculate a character  (by considering single string)
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // Change this line
// let result = movieName.match(noNumRegex).length;
// console.log(result);
// console.log(movieName.match(noNumRegex));

// ---------------- Restrict Possible Usernames -----
// ^ - start of input
// [a-z] - first character is a letter
// [0-9]{2,0} - ends with two or more numbers
// | - or
// [a-z]+ - has one or more letters next
// \d* - and ends with zero or more numbers
// $ - end of input
// i - ignore case of input

// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// let result = userCheck.test(username);
// console.log(result)

// ----------- Match Whitespace ------------- 
//note to calculate white space use  .......small ( \s )

// // 01
// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// whiteSpace.match(spaceRegex);

// // 02
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);

// --------------- Match Non-Whitespace Characters -------- 
//  to calculate non whitespace character we use \S.............. capitial ( \S )
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countWhiteSpace);

// --------------- Specify Upper and Lower Number of Matches ----------
// { and }. You put two numbers between the curly brackets - for the lower and upper number of patterns.

// // 01 
// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/; // -- means that ( a appearing between 3 and 5 )
// let x=multipleA.test(A4);
// console.log(x)
// let y=multipleA.test(A2);
// console.log(y)

// // 02
// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6}\sno/gi; // Change this line
// let result = ohRegex.test(ohStr);

//  ----------- Specify Only the Lower Number of Matches -----------

// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah /;
// let result = haRegex.test(haStr);

// ---------------- Specify Exact Number of Matches ------------

// 01

// let A4 = "haaaah";
// let A3 = "haaah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleHA = /ha{3}h/;
// let x= multipleHA.test(A4);
// console.log(x);
// let y= multipleHA.test(A3);
// console.log(y);
// let z= multipleHA.test(A100);
// console.log(z);

// 02

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);
console.log(result);

// ----------- Check for All or None ----------
// // 01
// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;
// rainbowRegex.test(american);
// rainbowRegex.test(british);

// // 02
// let favWord = "favorite";
// let favRegex = /favou?rite/; 
// let result = favRegex.test(favWord);

// --------- 