//Blue when the mouse hovers over the square
//Red when the mouse button is held down over the square
//Yellow when the mouse button is let go over the square
//Green when the mouse is double clicked in the square
//*******/Orange when the mouse scroll is used somewhere in the window(not just over the square)

//-----------------------------code-------------

var boxEvent = document.getElementById('box');

// boxEvent.addEventListener('mouseover',function(event){
//   event.target.style.backgroundColor ='teal';

//    setTimeout(function(){
//      event.target.style.backgroundColor ="";
//    }, 500);
   
// }, false);

boxEvent.addEventListener('mouseover', function () {
    boxEvent.style.backgroundColor = "blue";
});

boxEvent.addEventListener('click', function (event) {
  boxEvent.style.backgroundColor = "black";
});

boxEvent.addEventListener('mousedown', function (event) {
  boxEvent.style.backgroundColor = "red";
});

boxEvent.addEventListener('mouseout', function (event) {
  boxEvent.style.backgroundColor = "yellow";
});
boxEvent.addEventListener('dblclick', function (event) {
  boxEvent.style.backgroundColor = "green";
});

//----need to come back to these 2 later
boxEvent.addEventListener('scroll', function (event) {
  boxEvent.style.backgroundColor = "orange";
});

boxEvent.addEventListener("keydown", function (event) {
  console.log(event.which);
});



 


