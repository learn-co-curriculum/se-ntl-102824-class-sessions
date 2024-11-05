const url = "https://data.cityofchicago.org/resource/eix4-gf83.json?objectid_1=1" // Parks data from City of Chicago
const data = fetch(url)

console.log(data) // Promise {<pending>}


fetch(url).then(console.log)
// Response {type: "cors", url: "https://data.cityofchicago.org/resource/eix4-gf83.json?objectid_1=1", redirected: false, status: 200, ok: true, …}

fetch(url)
  .then(function(response){
    return response.json()
  }).then(console.log)

/*
  {
    the_geom: { type: 'Point', coordinates: [Array] },
    objectid_1: '1',
    park: 'HAMILTON (ALEXANDER)',
    park_no: '9.0',
    facility_n: 'CULTURAL CENTER',
    facility_t: 'SPECIAL',
    x_coord: '-87.63769763',
    y_coord: '41.76299921',
    gisobjid: '2494.0'
  }
]
*/

const getJSON = url => fetch(url).then(res => res.json())

getJSON(url).then(console.log)
/*
  {
    the_geom: { type: 'Point', coordinates: [Array] },
    objectid_1: '1',
    park: 'HAMILTON (ALEXANDER)',
    park_no: '9.0',
    facility_n: 'CULTURAL CENTER',
    facility_t: 'SPECIAL',
    x_coord: '-87.63769763',
    y_coord: '41.76299921',
    gisobjid: '2494.0'
  }
]
*/