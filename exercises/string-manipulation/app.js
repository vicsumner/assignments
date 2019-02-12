var ask = require('readline-sync');

// console.log(hello.toUpperCase()+ "," +" "+ 'my name is Larry. Help me get to know you!\n');
// var firstName = ask.question('What is your first name? ');

var hello = "hello";
// console.log(hello.toUpperCase());


function charCount(str) {
  return str.length;
}
// console.log(charCount("hello"))

function concatStr(str1, str2){
  var myStr = str1 + " " + str2;
  return myStr;
}
// console.log(concatStr("Hello", "Vicki"))


// function longMessage(str){
//   var midIndex = (Math.floor(str.length / 2));
//   var secondHalf = str.slice(midIndex, str.length);
//   return secondHalf;
// }
// console.log(longMessage("Hello my name is Vicki and I'm 78 years old."))

var feelings = ask.question ("How is it going today? ")
var location = ask.question ("Where are you located?")