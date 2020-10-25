///Exercise 2.a//
var word1, upper;
word1 = 'engineering';
upper = word1.toUpperCase();
console.log(upper);

//Exercise 2.b//
var word2, part;
word2 = 'extinction';
part = word2.substring (0,5);
console.log (part);

//Exercise 2.c//
var word3, last;
word3 = 'passengers'
last = word3.substring (7,10);
console.log (last);

//Exercise 2.d//
var word4, newWord;
word4 = 'quadrisection';
newWord = word4.substring(0,1).toUpperCase() + word4.substring(1, 13).toLowerCase();
console.log (newWord);

//Exercise 2.e//
var word5, blankSpace;
word5 = 'Hello World';
blankSpace = word5.indexOf(' ');
console.log(blankSpace);

//Exercise 2.f//
var word6, newWord1, blankSpace1;
word6 = 'goodbye world';
blankSpace1 = word6.indexOf(' ');
newWord1 = word6.substring(0,1).toUpperCase() + word6.substring(1,blankSpace1).toLowerCase() + word6.substring(blankSpace1, blankSpace1+1) + word6.substring(blankSpace1+1, blankSpace1+2).toUpperCase() + word6.substring(blankSpace1+2).toLowerCase();
console.log(newWord1);

