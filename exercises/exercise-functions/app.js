// Ques. One ------------------------

// function myFunction(a,b){
//   return a + b;
// }
// console.log(myFunction(3,5)); 
// -------------------------------------------
// function myFunction(a, b) {
//   console.log(a + b) ;
// }
// myFunction(3, 5); 

// Ques. two ------------------------

// function returnLargestOf3(num1, num2, num3){
//   //Math object (max)
//   // for loop
//   // if statments -weakest
//   return Math.max(num1, num2, num3)
// }
// console.log(returnLargestOf3(34, 56, 5));
//Using for loop ----------------------------------------------
function returnLargestOf3(num1, num2, num3){
  var numsArray = [num1, num2, num3]
  var largest = 0;

  for(var i=0; i<numsArray.length; i++){
    if (numsArray[i] > largest){
        largest = numsArray[i]
    }
  }
  return largest
}
console.log(returnLargestOf3(30,24,8))

// Ques. Three ------------------------


// Ques. Four ------------------------


// Ques. Bonus One ------------------------


// Ques. Bonus Two ------------------------


//Sstrings & String methods

// var myStr = "Sunny Day"
// console.log(myStr)