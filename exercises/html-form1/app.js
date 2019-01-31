// var form = document.getElementById("my-form")
// var nameInput = document.getElementById("name-input")

// var name = nameInput.value
// var form = document["myForm"] 

// can select the form directly by it's name attribute
var form = document.myForm

// can select the inputs directly by their name attribute on the form
var nameInput = form.name
var ageInput = form.age

//submit event

form.addEventListener("submit",function(event){
  //Must prevent default or page will refresh on button click
  event.preventDefault()
  // console.log(nameInput.value)
  alert("Hi, I am " + nameInput.value + ", and I am " + ageInput.value + " years old.")
})