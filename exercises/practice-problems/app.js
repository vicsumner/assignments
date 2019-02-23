// 1. Make a function that takes a string and returns that string reversed.

// function reverseStr(str){
//   // step 1 use split() method to return a new array
//   let splitStr = str.split('')

//   //step 2 use the reverse () to reverse the new array
//   let reverseString = splitStr.reverse()

//   //step 3 use the join() to put all the elements back together as a string 
//   let joinString = reverseString.join('')
  
//   return joinString
// }
// console.log(reverseStr("Vicki"))

//another way------------
function reverseStr(str){
  return str.split('').reverse().join('')
}
// console.log(reverseStr("Oprah"))



// 2. Make a function that takes a string and returns true if the string could be a number else return false.
let isNum = function(str){
    if(!isNaN(str)){
    return true
  } 
  return false
}
// console.log(isNum("Avri"))



// 3.Make a function that takes a number and returns true if the number is even else return false.
let isEven = function (num) {
if(num %2 == 0 ){
  return true
} 
return false
}
// console.log(isEven("4"))

// 4.Make a function that takes an array and returns the average of the array.
// let avg = (array) => array.reduce((a, b) => a + b) / array.length;
// console.log(avg([1,2,3,4]))

let avg = function(array){
 return array.reduce(function (a, b) {
  return a + b 
}) / array.length
}
// console.log(avg([1,2,3,4]))

// 5.Make a function that takes two arrays and returns a single array of the items from the arrays added alternatingly.

let combineArrays = function () {
    let arr1 = ["a","b","c","d"],
        arr2 = [1, 2, 3],
        result = [],

    i, l = Math.min(arr1.length, arr2.length);
  for (i = 0; i < l; i++) {
    result.push(arr1[i], arr2[i]);
  }
  result.push(...arr1.slice(l), ...arr2.slice(l));
  return result
}

console.log(combineArrays())

// alternative answer--------------------------------
// let combineArrays = function () {
// var array1 = ["a", "b", "c", "d"],
//   array2 = [1, 2],
//   result = [array1, array2]
//     .reduce((r, a) => (a.forEach((a, i) => (r[i] = r[i] || []).push(a)), r), [])
//     .reduce((a, b) => a.concat(b));

//     return result
// }

// console.log(combineArrays());