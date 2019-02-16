var display = document.getElementById('count-display')
var btn = document.getElementById('count-btn')

var count = 0
display.textContent = count

btn.addEventListener('click', function(){
  count++
  display.textContent = count
  localStorage.setItem('count', count)
})


var timeleft = 10;
var countDowntimer = setInterval(function(){
  document.getElementById("timer").innerHTML = timeleft + " second remaining";
  timeleft -= 1;
  if (timeleft <= 0){
    clearInterval(countDowntimer);
    document.getElementById("timer").innerHTML = "Timed Out!"

  }
  if(timeleft === 0){
    document.getElementById("count-btn").disabled = true;
  }
}, 1000);


// function startTimer(duration, display) {
//   var timer = duration, seconds;
//   setInterval(function () {
//     // minutes = parseInt(timer / 60, 10)
//     seconds = parseInt(timer % 60, 10);

//     // minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = ":" + seconds;

//     if (--timer < 0) {
//       timer = duration;
//     } else if(timer === 0){
//           clearInterval(timer);
//     }
//   }, 500);
// }

// window.onload = function () {
//   var thirtySec = 60 / 2,
//     display = document.querySelector('#time');
//   startTimer(thirtySec, display);
// };




// localStorage.display2 ="vicki"
// localStorage.setItem.name = JSON.stringify(name)
// localStorage.count = count

// console.log(name)
// console.log(count)