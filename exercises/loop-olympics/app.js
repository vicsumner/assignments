// preliminaries----------------------
// Ques.1----------------------
// for(var i = 0; i <= 9; i++){
//   console.log(i)
// }

// Ques.2----------------------
// for(var i = 9; i >= 0; i--){
//   console.log(i);
// }

// Ques.3----------------------
// var myArr = ["banana", "orange", "apple", "kiwi"]
// for(var i = 0; i < myArr.length; i++){
//   console.log(myArr[i])
// }


// bronze medal ---------------------
// Ques.1----------------------
// var myArr = [];
// for(var i = 0; i <= 9; i++){ 
//   myArr.push(i);
// }
// console.log(myArr);

// Ques.2----------------------

// function printEven() {
//   for(var i = 0; i<=100; i++){
//   if(i % 2 === 0){  
//   }
//   console.log(i)
// }
// }
//  printEven();

// Ques.3----------------------
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var a = []
// for(var i = 0; i < fruit.length; i+=2){
//   a.push(fruit[i])
// }
// console.log(a)

// silver medal -----------------------
// Ques.1----------------------
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// for(var i = 0; i < peopleArray.length; i++){
//   console.log(peopleArray[i].name)
// }

// Ques.2 ----------------------
// var names = [];
// var occupations = [];

// for(var i = 0; i < peopleArray.length; i++){
//   names.push(peopleArray[i].name)
//   occupations.push(peopleArray[i].occupation)
// }
// console.log(names);
// console.log(occupations);

// Ques.3 ----------------------
//Write a loop 
//that pushes every other name to an array 
//starting with "Harrison Ford", 
//and every other occupation to another array 
//starting with "Singer".

// var names = []
// var occupations = []

// for(var i = 0; i < peopleArray.length; i += 2){
//   names.push(peopleArray[i].name);
//   peopleArray[i].name;
//   occupations.push(peopleArray[i].occupation);
// }
// console.log(names)
// console.log(occupations)

//one answer for silver #3---------------------------------------------
// function everyOther(arr) {
//   var names = []
//   var occupations = []
//   for (var i = 0; i < arr.length; i += 2) {
//     names.push(arr[i].name)
//   }
//   for (var j = 1; j < arr.length; j += 2) {
//     occupations.push(arr[j].occupation)
//   }

//   return [names, occupations]
// }
// console.log(everyOther(peopleArray))

//another answer for silver #3---------------------------------------------






// gold medal-nesting ------------------

