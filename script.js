var startTime;
var elapsedTime;
var interval;

function start() {
startTime = Date.now();

  interval = setInterval(function() {
      elapsedTime = Date.now() - startTime;
      document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(2);
      
      if (elapsedTime/1000 >= 8) {
        document.getElementById("alert").innerHTML = "8 Seconds"
      } if (elapsedTime/1000 >= 12) {
        document.getElementById("alert").innerHTML = "12 Seconds"
      } if (elapsedTime/1000 >= 15) {
        document.getElementById("alert").innerHTML = "+2"
      } if (elapsedTime/1000 >= 17) {
        document.getElementById("alert").innerHTML = "DNF"
      }

  }, 10);
  document.getElementById("start").innerHTML = "Start"

}

function stop() {
  clearInterval(interval)
  document.getElementById("start").innerHTML = "Reset"
}
