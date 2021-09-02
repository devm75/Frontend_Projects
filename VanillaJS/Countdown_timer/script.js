var countDownDate = new Date("november 24,2021 16:00:00").getTime();

const timer = setInterval(function () {
  const prependZero = function (el) {
    if (el <= 9) {
      return "0" + el;
    } else {
      return el;
    }
  };
  var now = new Date().getTime();

  var timeLeft = countDownDate - now;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  days = prependZero(days);
  if (days == "00") {
    document.querySelector(".days-timer").style.transform = "rotateX(-360deg)";
  }
  document.querySelector(".days-timer").textContent = `${days}`;

  timeLeft = timeLeft - days * (24 * 60 * 60 * 1000);
  let hours = Math.floor(timeLeft / (1000 * 60 * 60));
  hours = prependZero(hours);
  if (hours == "00") {
    document.querySelector(".hours-timer").style.transform = "rotateX(-360deg)";
  }
  document.querySelector(".hours-timer").textContent = `${hours}`;

  timeLeft = timeLeft - hours * (60 * 60 * 1000);
  let minutes = Math.floor(timeLeft / (1000 * 60));
  minutes = prependZero(minutes);
  if (minutes == "00") {
    document.querySelector(".minutes-timer").style.transform =
      "rotateX(-360deg)";
  }
  document.querySelector(".minutes-timer").textContent = `${minutes}`;

  timeLeft = timeLeft - minutes * (60 * 1000);
  let seconds = Math.floor(timeLeft / 1000);
  seconds = prependZero(seconds);
  if (seconds == "00") {
    document.querySelector(".seconds-timer").style.transform =
      "rotateX(-360deg)";
  }
  document.querySelector(".seconds-timer").textContent = `${seconds}`;
}, 1000);
