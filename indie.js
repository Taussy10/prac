/* Goal: when I click start button continous counting must display in timerDisplay
1. start btn click krna hai thrpugh addEventListener then har ek second ke baad counting display krni hai through setInterval */ 
/* stop by stop btn
1.stop btn add event listener dena 
2. bolna count =0
*/

const timerDisplay = document.querySelector('.timerDisplay');
const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const resetBtn = document.querySelector('.resetBtn ');

let count = 0;
let intervalId = null; 
/* intervalId uniquely identify the interval so that you can later clear or cancel the interval using the clearInterval() function.*/


startBtn.addEventListener('click',function () {
  if (intervalId != null) {
   clearInterval(intervalId)
  }
  intervalId = setInterval(function () {
    timerDisplay.innerHTML = count++;
  }, 1000);
});


stopBtn.addEventListener('click', function () {
    clearInterval(intervalId);
  });

resetBtn.addEventListener('click',function () {
  clearInterval(intervalId);
  timerDisplay.innerHTML= count = 0
});


//let count = 0;
//let timerId = null;