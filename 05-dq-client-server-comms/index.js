const url = "https://data.cityofchicago.org/resource/f7f2-ggz5.json" // CityBike Data from data.gov
const data = fetch(url)

console.log(data) // Promise {<pending>}


fetch(url).then(console.log)
// Response {type: "cors", url: "https://data.cityofnewyork.us/api/views/p94q-8hxh", redirected: false, status: 200, ok: true, …}

fetch(url)
  .then(function(response){
    return response.json()
  }).then(console.log)
// {id: "p94q-8hxh", name: "Citi Bike Live Station Feed (JSON)", attribution: "CitiBike", attributionLink: "http://citibikenyc.com/stations/json", averageRating: 0, …}```

const getJSON = url => fetch(url).then(res => res.json())

getJSON(url).then(console.log)
// {id: "p94q-8hxh", name: "Citi Bike Live Station Feed (JSON)", attribution: "CitiBike", attributionLink: "http://citibikenyc.com/stations/json", averageRating: 0, …}``