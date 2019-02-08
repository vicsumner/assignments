// function charCount(myChar, str) {
//   var num = "a";
//   for (var i = 0; i < str.length; i++) {
//     console.log(i, str[i])
//     if (myChar === "str[i]") {

//     }
//   }
//   return myChar + str
// }

// console.log(charCount("a", "edabit"))

// var favthings = ["at", "fogs", "hats", "bats"]
//   console.log(favthings[2])



// var arr = "edabit"
// for(var i = 0; i< arr.length; i++){
//   if(arr[i] === true){
//     console.log("We found a true!");
//     break;
//   }

// }

// for (var i = 0; i <= 10; i++) {
//   if (i === 7) {
//     // continue;
//   }
//   console.log(i);
// }

// function char_count(str, letter) {
//   var letter_Count = 0;
//   for (var position = 0; position < str.length; position++) {
//     if (str.charAt(position) == letter) {
//       letter_Count += 1;
//     }
//   }
//   return letter_Count;
// }

// console.log(char_count('w3resource.com', 'o'));

//Constructor Functions
  // blueprint for an object(s)
  // constructor function should start an uppercase, conventional but not require
  // this refers to the object

  // var buddy = new User("buddy123", "buddy@gmail.com", 20)

//------------------------------------

// var myForm = document["my-form"]
// myForm.addEventListener("submit", myFunction)

// function myFunction(e){
//   e.preventDefault()
//   // console.log(e)
//   var firstName = myForm["first-name"]
//   console.log(firstName)
// }

//------------------------------------

//Constructor functions
// function Vehicle(doors, wheels, make, model, year, seats, color, hornSound ){
//     this.doors =
//     this.wheels =
//     this.make =
//     this.model =
//     this.year =
//     this.seats =
//     this.color =
//     this.hornSound =
//     this.honk = function(){
//       console.log(this.hornSound)
//     }
// }
// Vechicle.prototype.honk = 

// //4 door, 4 wheeled, jeep, cherokee, 1997, 2 seats, cherry red
// var jeep = new Vehicle(4,4, "jeep", "cherokee", 1997, 2, "cherry red", "meep meep")
// var civic = new Vehicle(4, 4, "honda", "civic", 2001, 4, "cherry red", "meep meep")



//Important****-----------------------------------
// Create a function that takes two strings as arguments and 
//returns the number of times the first string is found in the second string.
// function charCount(myChar, str) {
//   var count = 0;
//   for(var i = 0; i < str.length; i++){
//     if(myChar === str[i]){
//         count++
//     }
//   }
//   return count
// }
// console.log(charCount("t", "victtoria"))

//Methods
    // - functions in objects

// higher order methods  
    // take one or more functions as an argument
    // return function
    
//function
// function myFunc(){

// }   

//named fucntion
// anonymous function
//callback function


//--------------------------------------Friday Feb.8 2019
// Higher Order Array Methods part 2
// Method // Returns //What is it used for
// map (very common)   -new array  // Specific info from  data  
// filter (very common) -new array  // create condensed data from other data
//for Each - nothing   /// for loop - can't specofy start or end point

var numbers = [ 1,2,3,4,5,6,7,8,9,10]
// every  - Boolean // Will return true if every item in arr passes our criteria

// some   -Boolean   // Will return true if at least 1 item in the arr passes our criteria

// find     -returns an Obj/number/string - finds the first instance of the thing you are looking
var foundNum = numbers.find(function(num)){
  return num === 7
  
}

// findIndex

// sort 

// reduce

