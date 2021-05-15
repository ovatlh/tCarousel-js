const pNum = document.getElementById("num");
const btnOn = document.getElementById("on");
const btnOff = document.getElementById("off");

const intervalSegs = 1;

var intervalObj = null;
var num = 0;

btnOn.addEventListener("click", startInterval);

btnOff.addEventListener("click", stopInterval);

function startInterval() {
  // console.log(intervalObj);
  if (!intervalObj) {
    intervalObj = setInterval(changeNum, intervalSegs);
  }
}

function stopInterval() {
  // console.log(intervalObj);
  clearInterval(intervalObj);
  intervalObj = null;
  // console.log(intervalObj);
}

function changeNum() {
  num++;
  pNum.innerHTML = `${num}`;
  // console.log("num: ", num, "interval: ", intervalObj);
}
