//-------------------change

var input = document.getElementById("change-me");
// select our input by ID and assign it to the variable, "input"

// use the add event listener method to put an event on "input"
// "change" is one of a few dozen strings and add event listener will understand. It's our first argument 
input.addEventListener("change", function (e) { // we pass an entire function as the second argument. 
  document.getElementById("output").textContent = e.target.value
  // select the div, and change the "textContent" property to the value of the events target (the input box)
})

//------------------- click
// make the box disappear when the user clicks it

//------------------- keypress
/* You're task is to display to the user the key and key code they press
Example of output: You've pressed the "a" key. It's key code is 65
Wes Bos made this https://keycode.info/ for us to use as an example */

//------------------- mousemove

//------------------- submit
// The "submit" event refreshed your browser by default
// use "e.preventDefault" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

