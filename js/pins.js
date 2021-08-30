const pinTemplate = document
  .querySelector("#pin")
  .content.querySelector("button");
const mapPinsElement = document.querySelector(".map__pins");

export function getPins(data) {
  data.forEach((it, i, arr) => {
    const pinElement = pinTemplate.cloneNode(true);
    const img = pinElement.querySelector("img");
    img.src = it.author.avatar;

    pinElement.style.left = it.location.y + "px";
    pinElement.style.top = it.location.x + "px";

    mapPinsElement.insertAdjacentElement("beforeend", pinElement);

    function createCard() {

      if (document.querySelectorAll(".map__card").length > 0) {
        document.querySelectorAll(".map__card").forEach((card) => {
          card.remove();
        });
      }

      let map = document.querySelector(".map");

      let card = `<article class="map__card popup">
      <img src="img/avatars/user01.png" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <button type="button" class="popup__close">Закрыть</button>
      <h3 class="popup__title">Уютное гнездышко для молодоженов</h3>
      <p class="popup__text popup__text--address">102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3</p>
      <p class="popup__text popup__text--price">5200&#x20bd;<span>/ночь</span></p>
      <h4 class="popup__type">Квартира</h4>
      <p class="popup__text popup__text--capacity">2 комнаты для 3 гостей</p>
      <p class="popup__text popup__text--time">Заезд после 14:00, выезд до 10:00</p>
      <ul class="popup__features">
        <li class="popup__feature popup__feature--wifi"></li>
        <li class="popup__feature popup__feature--dishwasher"></li>
        <li class="popup__feature popup__feature--parking"></li>
        <li class="popup__feature popup__feature--washer"></li>
        <li class="popup__feature popup__feature--elevator"></li>
        <li class="popup__feature popup__feature--conditioner"></li>
      </ul>
      <p class="popup__description">Великолепная квартира-студия в центре Токио. Подходит как туристам, так и
        бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.</p>
    </article>`;

      map.insertAdjacentHTML("afterbegin", card);

      let closeBtn = document.querySelector(".popup__close");

      function removeCard() {
        document.querySelector(".map__card").remove();
      }

      closeBtn.addEventListener("click", removeCard);
    }

    pinElement.addEventListener("click", createCard);
  });
}

window.addEventListener('keydown', function(evt) {
    if(evt.code === "Escape" && document.querySelector(".map__card")) {
        document.querySelector(".map__card").remove();
    }
})

export function removePins() {
  Array.from(document.querySelectorAll('.map__pin')).forEach((pin) => pin.remove())
}

