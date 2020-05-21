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

import preloader from "./js/utils/utils";
import createServer from "./js/components/createServer";
import createSlider from "./js/components/createSlider";
import api from "./js/components/api";

const loader = document.querySelector(".configuration__loader");
const error = document.querySelector(".configuration__error");
const nothingFound = document.querySelector(".configuration__nothing-found");
const form = document.querySelector(".configuration__form");
const sliderValue = document.querySelector(".configuration__core-value");
const slider = document.querySelector(".configuration__slider");
const gpu = form.elements.GPU;
const raid = form.elements.RAID;
const ssd = form.elements.SSD;
const serverList = document.querySelector(".configuration__card-list");
const url = "https://api.jsonbin.io/b/5df3c10a2c714135cda0bf0f/1";
const apiServer = api(url);

function start(core, api) {
  preloader(true, loader);
  api
    .then((res) => {
      error.classList.remove("configuration__error_show");
      // preloader(true, loader);
      const data = res.filter((data) => {
        return data.cpu.cores * data.cpu.count == core;
      });
      for (let el of data) {
        createServer(el, serverList);
      }
    })
    .catch(() => error.classList.add("configuration__error_show"))
    .finally(() => preloader(false, loader));
}

slider.addEventListener("input", (e) => {
  createSlider(sliderValue, e);
});

start(slider.value, apiServer);

function filter(core, diskType, gpuValue, raid) {
  nothingFound.classList.remove("configuration__nothing-found_show");
  while (serverList.firstChild) {
    serverList.removeChild(serverList.firstChild);
  }

  apiServer
    .then((res) => {
      preloader(true, loader);
      const result = res.filter(({ cpu, disk, gpu }) => {
        if (diskType.checked) {
          return (
            cpu.cores * cpu.count == core.value && disk.type == diskType.value
          );
        }

        return cpu.cores * cpu.count == core.value;
      });
      console.log(result);
      if (result.length == 0) {
        nothingFound.classList.add("configuration__nothing-found_show");
      }
      for (let el of result) {
        createServer(el, serverList);
      }
    })
    .finally(() => {
      preloader(false, loader);
    });
}

slider.addEventListener("input", (e) => {
  createSlider(sliderValue, e);
});
form.addEventListener("change", () => {
  filter(slider, ssd, gpu, raid);
});
