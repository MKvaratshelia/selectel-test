export default function createSlider(element, e) {
  let slider = e.target.value;
  let core = "";
  if (slider <= 4) {
    core = "ядра";
  } else {
    core = "ядер";
  }
  element.textContent = `${slider} ${core}`;

  let x = slider;

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
  event.target.style.background = color;
}
