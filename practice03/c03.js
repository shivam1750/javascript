// -------- Check for All or None ---------------
// let sampleWord = "astronaut";
// let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
// let result = pwRegex.test(sampleWord);

//-------- Check For Mixed Grouping of Characters -----------
// Sometimes we want to check for groups of characters using a Regular 
// Expression and to achieve that we use parentheses ().

// // 01
// let testStr = "Pumpkin";
// let testRegex = /P(engu|umpk)in/;
// testRegex.test(testStr);
// // 02
// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor).*Roosevelt/;
// let result = myRegex.test(myString); 

// ---------- Use Capture Groups to Search and Replace ------

// the goal is to capture a word consisting of alphanumeric characters so 
// the capture group will be \w+ enclosed by parentheses: /(\w+)/.

// The substring matched by the group is saved to a temporary "variable", 
// which can be accessed within the same regex using a backslash and 
// the number of the capture group (e.g. \1). Capture groups are automatically 
// numbered by the position of their opening parentheses (left to right), starting at 1.

// let repeatRegex = /(\w+) \1 \1/;
// repeatRegex.test(repeatStr); // Returns true
// repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

// ------------ Use Capture Groups to Search and Replace ----------

// // 01
// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// wrongText.replace(silverRegex, "blue");
// // 02
// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);

// 