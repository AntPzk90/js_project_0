import {setFiltersListener} from './filter.js'
import {getPins} from './pins.js'

  
fetch('http://www.academy-booking-api.staj.fun/')
    
  .then((response) => {
      console.log("ФЕТЧ ОТРАБОТАЛ")
      console.log(response)
    return response.json();
  })
  .then((data) => {

    let filteredData = data

    setFiltersListener(data, filteredData)

    getPins(filteredData);

  }).catch((e) => {
    console.log(e, "error")
    throw new Error(e);
})