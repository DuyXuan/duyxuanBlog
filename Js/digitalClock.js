//Digital clock
var span = document.querySelector(".time__clock> span");
var timeMessage = document.querySelector(".time__message > span");
function time() {
  var time = new Date();
  var currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
 
  if (time.getHours < 12) {
    currentTime += " AM";
  } else {
    currentTime += " PM";
  }
  span.textContent = currentTime;

  if (time.getHours() >= 1 && time.getHours() < 12) {
    timeMessage.textContent = "Good morning";
  } else if (time.getHours() >= 12 && time.getHours() < 18) {
    timeMessage.textContent = "Good Afternoon";
  } else {
    timeMessage.textContent = "Good evening";
  }
}

export default time;