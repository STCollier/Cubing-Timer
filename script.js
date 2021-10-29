var startTime;
var elapsedTime;
var interval;

function start() {
startTime = Date.now();

  interval = setInterval(function() {
      elapsedTime = Date.now() - startTime;
      document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(2);
  }, 10);
  document.getElementById("start").innerHTML = "Start"

}

function stop() {
  clearInterval(interval)
  document.getElementById("start").innerHTML = "Reset"
}
