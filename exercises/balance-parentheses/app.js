//Given a string including parentheses, write a function that returns true if every opening parentheses has a closing parentheses.

//Also, every closing parentheses needs an opening partner before it.

function balanceParentheses(str) {
  // checking for invalid start and end ")" and "("
  if (str.startsWith(")") || (str.endsWith("("))){
    return false
  } else {
    let str1 = str.match(/\(/g)
    let str2 = str.match(/\)/g)

    if(str1.length === str2.length){
       return true
    } else{
       return false
    }
   
  }
  
}

console.log(balanceParentheses("()()")) // Output: true
console.log(balanceParentheses("(())")) // Output:  true
console.log(balanceParentheses("()))")) // Output:  false

console.log(balanceParentheses(")()(")) // Output:  false
console.log(balanceParentheses("())(")) // Output:  false