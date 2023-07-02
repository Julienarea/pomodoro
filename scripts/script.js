document.addEventListener('DOMContentLoaded', function() {
  var timerDisplay = document.getElementById('timer');
  var startButton = document.getElementById('startButton');
  var pauseButton = document.getElementById('pauseButton');
  var resetButton = document.getElementById('resetButton');
  var customTimeInput = document.getElementById('customTimeInput');
  var setTimeButton = document.getElementById('setTimeButton');

  var timer;
  var time = 3600; // 25 minutes (in seconds)
  var isRunning = false;

  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      timer = setInterval(updateTimer, 1000);
    }
  }

  function pauseTimer() {
    if (isRunning) {
      isRunning = false;
      clearInterval(timer);
    }
  }

  function resetTimer() {
    pauseTimer();
    time = 3600;
    updateTimerDisplay();
  }

  function setCustomTime() {
    var customTime = parseInt(customTimeInput.value);
    if (customTime && customTime > 0) {
      time = customTime * 60;
      updateTimerDisplay();
    }
  }

  function updateTimer() {
    if (time > 0) {
      time--;
      updateTimerDisplay();
    } else {
      pauseTimer();
      alert('Time is up!');
    }
  }

  function updateTimerDisplay() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    var minutesDisplay = (minutes < 10) ? '0' + minutes : minutes;
    var secondsDisplay = (seconds < 10) ? '0' + seconds : seconds;
    
    var timerText = minutesDisplay + ':' + secondsDisplay;
    timerDisplay.textContent = timerText;
    document.title = timerText;
  }

  startButton.addEventListener('click', startTimer);
  pauseButton.addEventListener('click', pauseTimer);
  resetButton.addEventListener('click', resetTimer);
  setTimeButton.addEventListener('click', setCustomTime);
});
