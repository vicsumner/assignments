// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.

function XO(str) {
  let xcount = 0;
  let ocount = 0;

  for(let i = 0; i < str.length; i++){
    if (str[i] === "x" || str[i] === "X" ){
       xcount++
    }
    
    if (str[i] === "o" || str[i] === "O" ) {
      ocount++
    }
    
  }
if(xcount === ocount){
return true
} 
  return false

}


console.log(XO("ooxx")) //➞ true
console.log(XO("xooxx")) //➞ false
console.log(XO("ooxXm")) // ➞ true (case insensitive)
console.log(XO("zpzpzpp")) // ➞ true (returns true if no x and o)
console.log(XO("zzoo")) // ➞ false

