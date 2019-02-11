// var input = "bookkeeper larry";
function noDups(str){
  var result = ""; // not sure why
  for(var i = 0; i < str.length; i++){
    if(result.indexOf(str[i]) < 0){
       result += str[i]
    }
  }
return result;
}

console.log(noDups("bookkeeper larry"))

//Extra Credit: Create a function that randomly removes a letter.
// Create a function that scrambles the original string.
//Create a function using regular expressions that remove all vowels.