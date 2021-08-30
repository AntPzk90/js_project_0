import {data} from './mocks.js'
import {setFiltersListener} from './filter.js'
import {getPins} from './pins.js'





let filteredData = data

setFiltersListener(data, filteredData)

getPins(filteredData)






















// const removePins = () => {
//     Array.from(document.querySelectorAll('.map__pin')).forEach((it)=>it.remove())
// }


// const filter = (arr, config) => {
//     let filteredArr = arr
//     if (config.type !== 'any') {
//         console.log(filteredArr);
//         filteredArr = filteredArr.filter((it) => {
//             return it.offer.type !== config.type
//         })
//         console.log(filteredArr);
//     }
//     return filteredArr
// }

// let filteredData = data


// const form = document.querySelector('.map__filters')

// form.addEventListener('input', () => {
//     filteredData = filter(data, {
//         type: form.querySelector('#housing-type').value,
//         price: form.querySelector('#housing-price').value,
//         rooms: form.querySelector('#housing-rooms').value,
//         guests: form.querySelector('#housing-guests').value,

//     })
//     removePins()
//     getPins(filteredData)
// })
