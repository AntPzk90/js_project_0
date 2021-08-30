import { getNodeValue } from './helpers.js'
import { getPins, removePins } from './pins.js'
const ANY = 'any'

export function filter (rawData, config) {
    let filteredData = rawData

    if (config.type !== ANY) {
        filteredData = filteredData.filter((it) => it.offer.type === config.type)
    }

    return filteredData
}

export function setFiltersListener (data, filteredData) {
    const filterFormElement = document.querySelector('.map__filters')

    filterFormElement.addEventListener('change', (e) => {
        filteredData = filter(data, {
            type: getNodeValue('#housing-type'),
            price: getNodeValue('#housing-price'),
            rooms: getNodeValue('#housing-rooms'),
            guests: getNodeValue('#housing-guests'),
            wifi: getNodeValue('#filter-wifi', 'checked')
        })
        removePins()
        getPins(filteredData)
    })
}
