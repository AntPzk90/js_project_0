import {data} from './mocks.js'
import {setFiltersListener} from './filter.js'
import {getPins} from './pins.js'





let filteredData = data

setFiltersListener(data, filteredData)

getPins(filteredData)
