document.addEventListener("DOMContentLoaded", function(){

// Display the Current Time
  function displayCurrentTime() {
    var currentTime = new Date();
    var utcTime = currentTime.toUTCString();
    document.getElementById("currentTime").innerHTML = utcTime;
  }
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);


// Display the Current Day
  function displayCurrentDay() {
    var currentDate = new Date();
    var options = { weekday: 'long' };
    var currentDay = currentDate.toLocaleString('en-US', options);
    document.getElementById("currentDay").innerHTML = currentDay;
  }
  displayCurrentDay();

});
