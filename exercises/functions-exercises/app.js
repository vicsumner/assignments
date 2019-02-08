
//Ques #1 -----------------
// Write a function that accepts two numbers as parameters, and returns the sum.
function myFunction(a,b){
  console.log(a + b)
}
// myFunction(1,5)




//Ques #2 -----------------
// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function returnLrg(num1, num2, num3){
  var large = Math.max(num1, num2, num3);
  return large;
}
// console.log(returnLrg(56, 5, 200))


//Ques #3 -----------------
// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function myFunction(num){
 if(num % 2 === 0){
   return "even"
}else{
  return "odd";
}
}
// console.log(myFunction(3478873872874323))


//Ques #4 -----------------
// Write a function that accepts a string as a parameter.If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself(string + string).If the string is more than twenty characters long, return the first half of the string.

function twentyChar(str) {
  if(str.length <= 20 ){
    return str + str
  }else{
    return str.slice(0,str.length/2)
  }

}
console.log(twentyChar("jdfjsieiwwj"))

// Optional Challenge