export default function createServer(data, container) {
  let coreValue = "";
  if (data.cpu.cores * data.cpu.count <= 4) {
    coreValue = "ядра";
  } else coreValue = "ядер";

  if (data.cpu.count >= 2) {
    data.cpu.name = `${data.cpu.count} x ${data.cpu.name}, ${
      data.cpu.cores * data.cpu.count
    } ${coreValue}`;
  } else {
    data.cpu.name = `${data.cpu.name}, ${
      data.cpu.cores * data.cpu.count
    } ${coreValue}`;
  }

  if (data.disk.count >= 2) {
    data.disk.type = `${data.disk.count} x ${data.disk.value} ГБ ${data.disk.type}`;
  } else {
    data.disk.type = `${data.disk.value} ГБ ${data.disk.type}`;
  }

  const server = document.createElement("div");
  server.classList.add("card");
  server.innerHTML = `<div class="card__description">
    <h4 class="card__model">${data.name}</h4>
    <div class="card__container">
      <div class="card__CPU">
        <span>${data.cpu.name}</span>
      </div>
      <span class="card__RAM">${data.ram}</span
      ><span class="card__storage-device">${data.disk.type}</span>
      <div class="card__order">
        <span class="card__price">${data.price / 100} ₽/месяц</span
        ><a href="https://selectel.ru/" target="_blank"
          ><button class="card__button">Заказать</button></a
        >
      </div>
    </div>
  </div>`;
  container.appendChild(server);
}
