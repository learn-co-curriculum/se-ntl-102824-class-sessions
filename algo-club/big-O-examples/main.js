import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    
    <h1>Hello Big O!</h1>
   
  </div>
`

// What is the Big O of these functions?
// - Constant O(1)
// - Linear O(n)
// - Logarithmic O(log n)

// O(?)
function printFirstItem(items) {
  console.log(items[0]);
}

const laundry = ["shirt", "shorts", "sock", "pants", "underwear"]

// printFirstItem(laundry)