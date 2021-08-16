const pinTemplate = document.querySelector('#pin').content.querySelector('button')
// const pinTemplate = `<button type="button" class="map__pin" style="left: 200px; top: 400px;">
//                         <img src="img/avatars/user07.png" width="40" height="40" draggable="false" alt="Метка объявления">
//                     </button>`
const mapPinsElement = document.querySelector('.map__pins')


export function getPins(data) {
    data.forEach((it, i, arr) => {
        // const pinElement = `<button type="button" class="map__pin" style="left: ${it.location.y}px; top: ${it.location.x}px;">
        //                         <img src="${it.author.avatar}" width="40" height="40" draggable="false" alt="Метка объявления">
        //                     </button>`
        const pinElement = pinTemplate.cloneNode(true)
        const img = pinElement.querySelector('img')
        img.src = it.author.avatar

        pinElement.style.left = it.location.y + 'px'
        pinElement.style.top = it.location.x + 'px'

        // mapPinsElement.insertAdjacentHTML( 'beforeend',pinElement)
        mapPinsElement.insertAdjacentElement( 'beforeend',pinElement)
        
    })
}

