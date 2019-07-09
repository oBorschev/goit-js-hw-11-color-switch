const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body")
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const changeColor = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
  }
};

refs.btnStart.addEventListener("click", changeColor.start.bind(changeColor));
refs.btnStop.addEventListener("click", changeColor.stop.bind(changeColor));
