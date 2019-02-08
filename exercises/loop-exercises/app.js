//Ques #1--------------------
///write function
// accepts string as input
//write loop and each letter of the string to array
//return the that new array



// function dupArr(str){
//   var myArr = []
//   myArr = str.split("")
//   return myArr
// }
// console.log(dupArr("entertainment"));

//Ans. ['e', 'n', 't', 'e', 'r', 't', 'a', 'i', 'n', 'm', 'e', 'n', 't']


 var str = "entertainment";
 var newArr = []
function dupArr(str) {
  for(var i = 0; i < str.length; i++){
    newArr.push(str[i])
  }
  return newArr
}
// dupArr(str)
// console.log(newArr);

//Ques #2--------------------
//Write a function that accepts a string and a single character as inputs.
//Write a loop that iterates over the string, and returns the position of the first occurrence of the specified character.
//If the character is not found, tell that to the user by returning "Character not found!".
// ---------------------------------
function find(str, char){
  for(var i = 0; i < str.length; i++){
    if(str[i] === char){
      return i
    }
  }
  return "Character not found!"
}

// console.log(find("amy", "y"))



//Ques #3--------------------
function found(arr){
  for(var i = 0; i< arr.length; i++){
    if(arr[i] === 42){
      return "Found 42!"
    }
  }
  return "42 not found!"
}
// console.log(found([3, 4, 45, 2, 8]))

 

//Ques #4--------------------
function small(arr) {
  var smallest = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < smallest){
      smallest = arr[i];
    }
  }
  return smallest
}
console.log(small([4, 5, 1, 3, 0]))
console.log(small([89, 56, 90, 102, 66]))

// --------------------------------------










// var sports = [];
// var total = sports.push('football', 'swimming','basketball');

// console.log(total);  // 4

// --------------------------------------

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// function uppercase(str) {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for (var i = 0; i < array1.length; i++) {
//     newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
//   }
//   return newarray1.join(' ');
// }

