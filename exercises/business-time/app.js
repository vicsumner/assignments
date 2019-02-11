
    $(function(){
      $('a').each(function () {
        if ($(this).prop('href') == window.location.href) {
          $(this).addClass('current');
        }
      });
    });

//----------------------------------------------
var form = document.contact

contact.addEventListener("submit", function(e){
  e.preventDefault()
  var fname  = contact.firstname.value
  var lname = contact.lastname.value
  var country = contact.country.value
  var message = contact.message.value
  alert("First Name: " + fname + "\nLast Name: " + lname + "\nCountry: " + country + "\nSubject: " + message)
}) 


//----------------------------------------------

// function display()
// {
//   var x = document.details.firstname.value;
//   var y = document.details.lastname.value;
//   var z = document.details.country.value;
//   var a = document.details.subject.value;

//   alert("FIRST NAME:" + x + "     " + "LAST NAME:" + y + "     " + "Country:" + z + "     " + "Subject:" + a);
// }

// window.onload = function() {
  
//   document.getElementById('send').onclick = function (e) {
//    e.preventDefault()
//     alert(document.getElementById("form_id").value);
//     return false;
//   }
// }
// function()


// Submit form with id function.


// function submit_by_id() {
//   var firstname = document.getElementById("firstname").value;
//   var lastname = document.getElementById("lastname").value;
//   if (validation()) // Calling validation function
//   {
//     document.getElementById("form_id").submit(); //form submission
//     alert(" Name : " + firstname + " n Email : " + lastname + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
//   }
// }
// submit_by_id()