// first wrong atempt---------
// var x = "hello";
// function capitalizeAndLowercase() {
//   console.log(capitalizeAndLowercase.toUpperCase()) 
// }
// capitalizeAndLowercase(x);

//Ques One lowercase method------------------------------
// var x = "Hello";
// var y = "Hello";
// console.log(y.toUpperCase() + x.toLowerCase());

//Ques Two math.floor method------------------------------
var myStr = "Hello";
function findMiddleIndex(){
  console.log(Math.floor(myStr.length/2));
}
// findMiddleIndex();

//Ques Three slice method------------------------------
var myStr = "Hello"
// console.log(myStr.slice(0,2));

var myStr = "Hello World"
// console.log(myStr.slice(0,5));

//Ques. Three ------------------------------

var myStr = "Hello"
function capitalizeAndLowercase(str){
  return myStr.charAt(0).toUpperCase() + myStr.charAt(1).toUpperCase() + "llo";
}
console.log(capitalizeAndLowercase())


//Ques. Three pt2 ------------------------------

var a = "Hello WoRld"
function capilizeAndLowercase(str){
  var midIndex = (Math.floor(str.length / 2));
  // console.log(midIndex)

  var firstHalf = str.slice(0, midIndex)
  // console.log(firsthalf)
  
  var upperCase1 = firstHalf.toUpperCase()
  // console.log(upperCase1)
  
  var secondHalf = str.slice(midIndex, str.length) //(midIndex) works too
  var lowerCase1 = secondHalf.toLowerCase()
  // console.log(lowerCase1)

 var myAmazingAnswer = upperCase1 + " " + lowerCase1
 console.log(myAmazingAnswer)
}
// capilizeAndLowercase(a)



//Ques. Optional Code Challenge ------------------------------
