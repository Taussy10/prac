const timerDisplay = document.querySelector('.timerDisplay');
const stopBtn = document.querySelector('#stopBtn');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');

let msec = 00;
let secs = 00;
let mins = 00;
let timerId = null;

// Retrieve timer values from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedValues = JSON.parse(localStorage.getItem('timerValues'));

  if (storedValues) {
    mins = storedValues.mins;
    secs = storedValues.secs;
    msec = storedValues.msec;

    // Update the timer display with the retrieved values
    let msecsString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString}:${secsString}:${msecsString}`;
  }
});

startBtn.addEventListener('click', function () {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function () {
  clearInterval(timerId);
});

resetBtn.addEventListener('click',function() {
  clearInterval(timerId);
  timerDisplay.innerHTML = '00:00:00';
  localStorage.removeItem('timerValues');
});

function startTimer() {
  msec++;
  if (msec === 100) {
    msec = 0;
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
    }
  }

  let msecsString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timerDisplay.innerHTML = `${minsString}:${secsString}:${msecsString}`;

  // Store the timer values in localStorage
  localStorage.setItem('timerValues', JSON.stringify({ mins, secs, msec }));
}

/* setInterval(function,milisecond)
after every milisecond it function will c all
clearnInterval()function will stop
1 Second = 1000 Miliseconds 

timerId = timerId variable to keep track of the interval that updates the timer display.

let timerId = null; Holds the interval ID

startBtn.addEventListener('click', function () {
 If there's an ongoing timer, clear the interval to prevent multiple timers
  if (timerId !== null) {
    clearInterval(timerId);
  }
 Set a new interval to call the startTimer function every 10 milliseconds
  timerId = setInterval(startTimer, 10);
}); */


