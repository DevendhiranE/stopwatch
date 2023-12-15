const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const colon = document.querySelector(".timer");

let hrs = 0,
  min = 0,
  sec = 0,
  ms = 0,
  timerOn;

startBtn.addEventListener("click", () => {
  startBtn.classList.add("start-active");
  stopBtn.classList.remove("stop-active");
  colon.classList.add("animation-active");

  timerOn = setInterval(() => {
    ms++;
    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hrs++;
      min = 0;
    }
    updateTime();
  }, 10);
});

stopBtn.addEventListener("click", () => {
  stopBtn.classList.add("stop-active");
  startBtn.classList.remove("start-active");
  colon.classList.remove("animation-active");
  clearInterval(timerOn);
});

resetBtn.addEventListener("click", () => {
  hrs = min = sec = ms = 0;
  stopBtn.classList.remove("stop-active");
  startBtn.classList.remove("start-active");
  colon.classList.remove("animation-active");
  updateTime();
});

function updateTime() {
  let uhrs = hrs < 10 ? "0" + hrs : hrs;
  let umin = min < 10 ? "0" + min : min;
  let usec = sec < 10 ? "0" + sec : sec;
  let ums = ms < 10 ? "0" + ms : ms;

  uhrs = uhrs.toString();
  umin = umin.toString();
  usec = usec.toString();
  ums = ums.toString();

  document.querySelectorAll(".hrs")[0].innerHTML = uhrs[0];
  document.querySelectorAll(".hrs")[1].innerHTML = uhrs[1];
  document.querySelectorAll(".min")[0].innerHTML = umin[0];
  document.querySelectorAll(".min")[1].innerHTML = umin[1];
  document.querySelectorAll(".sec")[0].innerHTML = usec[0];
  document.querySelectorAll(".sec")[1].innerHTML = usec[1];
  document.querySelectorAll(".ms")[0].innerHTML = ums[0];
  document.querySelectorAll(".ms")[1].innerHTML = ums[1];
}
