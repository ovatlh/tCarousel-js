const p = document.getElementById("num");
const btn = document.getElementById("btn");

const timerSegs = 5000;

var status = "false";
var num = 0;
var loopObj;

btn.addEventListener("click", changeStatus);

function changeStatus() {
  if (status === "true") {
    btn.innerHTML = "Off";
    status = "false";
    start();
  } else {
    btn.innerHTML = "On";
    status = "true";
  }
}

function numPlus() {
  num++;
}

function validateLoop() {
  if (status === "false") {
    clearTimeout(loopObj);
  }
}

function changeNum() {
  p.innerHTML = `${num}`;
  console.log(num);
  numPlus();
  validateLoop();
  changeNum();
}

function start() {
  try {
    clearTimeout(loopObj);
  } catch {}
  loopObj = setTimeout(changeNum, timerSegs);
}
