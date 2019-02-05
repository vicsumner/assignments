function calc() {
  // assigned variables to receive the value of each pest 
  var n1 = parseInt(document.getElementById("gooCapNum").value);
  var n2 = parseInt(document.getElementById("cheepCapNum").value);
  var n3 = parseInt(document.getElementById("bobCapNum").value);

  
  // adding and multiplying operation to find total
  var answer = n1*5 + n2*11 + n3*7;

  // assigned variable to total (calulation) area  
  var totArea = document.getElementById("addBtn");
  
  //show answer
  totArea.textContent = answer;

}// dynamicaly received input 
document.getElementById("main").addEventListener("input",calc)
