var travForm = document.travelForm

travelForm.addEventListener("submit", function(e){
  e.preventDefault()
  var fname = travelForm.firstName.value
  var lname = travelForm.lastName.value
  var age = travelForm.age.value
  var gender = travelForm.gender.value
  // var location = travelForm.location.value
  // var dRestrictions = travelForm.restrictions.value

  alert("First Name: " + fname + "\nLast Name: " + lname + 
  "\nAge: " + age + "\nGender: " + gender) })
  // "\nLocation: " + location + "\nDietary Restrictions: " + dRestrictions)

