// for (var i = 100; i >= 0; i -= 5){
//   console.log (i)
// };

// // var arr = ["banana", "orange", "pineapple", "kiwi"]
// // for(){

// // }

// var myH1 = document.getElementById("greeting");
// myH1.textContent = "Hello";

/// declaration function example---
// function myFunction(){
//   var a = 3;
//   var b = 5;
//   var sum = a + b;
//   return sum;
// }

// console.log(myFunction())

/// expression function example-----------
// var sum = function(num){
//   var a = 3;
//   var b = 9;
//   return a + b;
// }
// console.log(sum())=

//02-13-19--------------------------------------

// Error Handling with JS

// throw new Error("This is my personal error message")
// catch
var num = 10

// Try the following code
try {
  if (num < 10) {
    throw new Error("The number is less than 10")
  } else if (num >= 10) {
    throw new Error("The number is greater or equal to 10")
  } else {
    console.log("The number is 10")
  }
}
// Show the error if one occurred
catch (error) {
  console.log(error)
}
finally {
  console.log("I am running no matter what")
}

//"throw" is equilvant to "return"

// Web Storage-----------------------------
  // databases
  //cookies - smaller storage capacity

  //available in broswer
    //local storage
        //permanent until deleted
    // session storage