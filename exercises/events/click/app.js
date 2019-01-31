// make the box disapear when the user clicks it

var redBox = document.getElementsByClassName("red-box")
redBox[0].addEventListener("click", function() {
  redBox[0].style.display = "none";
  // redBox[0].classList.remove("red-box")
})
