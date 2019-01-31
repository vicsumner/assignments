function calc(){
  // console.log('here')
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);

  var answer = n1+n2; 
  var resultOne = document.getElementById("resultOne")
  // console.log(resultOne)
  resultOne.textContent = answer;

}
function calcTwo() {
  var n3 = parseInt(document.getElementById("n3").value);
  var n4 = parseInt(document.getElementById("n4").value);

  var answer2 = n3 - n4;
  var resultTwo = document.getElementById("resultTwo");
  resultTwo.textContent = answer2;

}

function calcThree() {
  var n5 = parseInt(document.getElementById("n5").value);
  var n6 = parseInt(document.getElementById("n6").value);

  var answer3 = n5*n6;
  var resultThree = document.getElementById("resultThree");
  resultThree.textContent = answer3;
}