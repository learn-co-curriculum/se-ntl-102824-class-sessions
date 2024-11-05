# Client-Server Communication Discussion Questions

## Objectives

* Explain what the `fetch` function is used for
* Use `fetch` to retrieve data from a server

## Exercise

Take a look at each of the code samples below. Each example will show you some
code, as well as either the return value of what is logged to the console.

1. How does this piece of code work?
2. Why does the code do what it does?
3. Given this code sample, what can you learn or describe about JavaScript

### Example 1

```javascript
const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
const data = fetch(url)

console.log(data) // Promise {<pending>}
```

### Example 2

```javascript
const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
fetch(url).then(console.log)
// Response {type: "cors", url: "https://data.cityofnewyork.us/api/views/p94q-8hxh", redirected: false, status: 200, ok: true, …}
```

### Example 3

```javascript
const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
fetch(url)
  .then(function(response){
    return response.json()
  }).then(console.log)
// {id: "p94q-8hxh", name: "Citi Bike Live Station Feed (JSON)", attribution: "CitiBike", attributionLink: "http://citibikenyc.com/stations/json", averageRating: 0, …}```
```

### Bonus

How would you implement a function called `getJSON` so that the below code works
as outlined?

```javascript
const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov

getJSON(url).then(console.log)
// {id: "p94q-8hxh", name: "Citi Bike Live Station Feed (JSON)", attribution: "CitiBike", attributionLink: "http://citibikenyc.com/stations/json", averageRating: 0, …}``
```
