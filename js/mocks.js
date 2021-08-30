import { randomInteger } from "./helpers.js";

randomInteger(3, 8);

let houses = ["flat", "house", "bungalo", "palace"];

let mapPins = [];

for (let index = 0; index < 8; index++) {
  let pin = {
    author: {
      avatar: "img/avatars/user01.png",
    },
    offer: {
      title: "Гостишка",
      address: "top:400px  left: 800px",
      price: 1200,
      type: "palace", //flat, house или bungalo
      rooms: 3, //число, количество комнат
      guests: 2, //число, количество гостей, которое можно разместить
      checkin: "12:00", //строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
      checkout: " 12:00", //строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
      features: [
        "wifi",
        "dishwasher",
        "parking",
        "washer",
        "elevator",
        "conditioner",
      ], //массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner",
      description: "some dscr", //строка с описанием,
    },
    location: {
      x: randomInteger(0, 400), //случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
      y: randomInteger(0, 800), // случайное число, координата y метки на карте от 130 до 630.
    },
  };
  pin.author.avatar = "img/avatars/user0" + randomInteger(1, 8) + ".png";
  pin.offer.type = houses[randomInteger(0, houses.length - 1)];
  mapPins.push(pin);
}

mapPins.forEach((item, index) => {
  item.author.avatar = "img/avatars/user0" + (index + 1) + ".png";
});

// console.log(mapPins, 'mock data')

export const data = mapPins;
