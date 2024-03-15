$(document).ready(function () {
    var timer;
    var isRunning = false;
    var hours = 0;
    var minutes = 15;
    var seconds = 0;
  
    function updateTimerDisplay() {
      var displayHours = hours < 10 ? "0" + hours : hours;
      var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
      var displaySeconds = seconds < 10 ? "0" + seconds : seconds;
      $("#timer").text(
        displayHours + ":" + displayMinutes + ":" + displaySeconds
      );
    }
  
    $("#start-button").click(function () {
      if (!isRunning) {
        isRunning = true;
        var time = hours * 3600 + minutes * 60 + seconds;
        timer = setInterval(function () {
          if (--time < 0) {
            clearInterval(timer);
            isRunning = false;
            alert("Time is up!");
          } else {
            hours = parseInt(time / 3600, 10);
            minutes = parseInt((time % 3600) / 60, 10);
            seconds = parseInt(time % 60, 10);
            updateTimerDisplay();
          }
        }, 1000);
      }
    });
  
    $("#reset-button").click(function () {
      clearInterval(timer);
      hours = 0;
      minutes = 15;
      seconds = 0;
      updateTimerDisplay();
      isRunning = false;
    });
  
    $("#edit-button").click(function () {
      hours = parseInt(prompt("Enter hours (0-23):"), 10) || 0;
      minutes = parseInt(prompt("Enter minutes (0-59):"), 10) || 0;
      seconds = parseInt(prompt("Enter seconds (0-59):"), 10) || 0;
      updateTimerDisplay();
    });
  });