function calc() {
  var n1 = parseInt(document.getElementById("gooCapNum").value);
  var n2 = parseInt(document.getElementById("cheepCapNum").value);
  var n3 = parseInt(document.getElementById("bobCapNum").value);

  

  var answer = n1 * 5 + n2 * 11 + n3 * 7;
  var resultOne = document.getElementById("addBtn")
  
  resultOne.textContent = answer;
}
document.getElementById("main").addEventListener("input",calc)
