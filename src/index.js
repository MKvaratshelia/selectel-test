import "./style.scss";
import "./style/checkbox/checkbox.scss";
import "./images/LOGO.png";
import "./images/facebook.svg";
import "./images/inst.svg";
import "./images/mail.svg";
import "./images/tel.svg";
import "./images/telegram.svg";
import "./images/twitter.svg";
import "./images/vk.svg";
import "./images/favicon.png";
import "./images/server.svg";
import "./images/server-320.svg";
import "./images/loader.svg";

const sliderValue = document.querySelector(".configuration__core-value");
const slider = document.querySelector(".configuration__slider");

// добавляет занчение слайдера
slider.addEventListener("input", (e) => {
  let slider = e.target.value;
  let core = "";
  if (slider <= 4) {
    core = "ядра";
  } else {
    core = "ядер";
  }
  sliderValue.textContent = `${slider} ${core}`;
});

// меняет значение background в слайдере
slider.addEventListener("mousemove", () => {
  let x = slider.value;

  if (x == 2) {
    x = 0;
  } else if (x == 4) {
    x = 20;
  } else if (x == 6) {
    x = 40;
  } else if (x == 8) {
    x = 60;
  } else if (x == 10) {
    x = 80;
  } else if (x == 12) {
    x = 100;
  }

  let color = "linear-gradient(90deg, #2f93fe " + x + "%, #e5e5e5 " + x + "%)";
  slider.style.background = color;
});
