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

// O(1)
function printFirstItem(items) {
  console.log(items[0]);
}

const laundry = ["shirt", "shorts", "sock", "pants", "underwear"]

// printFirstItem(laundry)

// O(n^2)
function printAllPossibleOrderedPairs(items) {
  items.forEach(firstItem => {
    items.forEach(secondItem => {
      console.log(firstItem, secondItem)
    })
  })
  
}
// printAllPossibleOrderedPairs(laundry)

// O(n)
// function sayHiNTimes(x) {
//   for (let i = 0; i < x; i++) {
//     console.log('hi')
//   }
// }

// O(n)
function printAllItems(items) {
  items.forEach(i => console.log(i))
}

// O(n + n) = 2n = O(n)
function printAllItemsTwice(items) {
  items.forEach(i => console.log(i))
  items.forEach(i => console.log(i))
}

// O(1 + n/2 + 100) => O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]) // O(1)

  const middleIndex = Math.floor(items.length / 2)
  let index = 0

  while (index < middleIndex) {
    console.log(items[index])
    index++
  } // O(n / 2) = 0.5n

  for (let i = 0; i < 100; i++) {
    console.log('hi')
  } // O(100)
}

// printFirstItemThenFirstHalfThenSayHi100Times(laundry)

// O(n + n^2) => O(n^2)
function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:')
  numbers.forEach(n => console.log(n)) // O(n)

  console.log('these are their sums:')
  numbers.forEach(firstN => {
    numbers.forEach(secondN => {
      console.log(firstN + secondN)
    })
  }) // O(n^2)
}

const nums = [2, 5, 6, 1, 7, 10, 34, 60]

// printAllNumbersThenAllPairSums(nums)

// O(n)
function contains(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true
    }
  }
  return false
}


// Space complexity
// O(1)
function sayHiNTimes(x) {
  for (let i = 0; i < x; i++) {
    console.log('hi')
  }
}

// O(n)
function arrayOfHiNTimes(n) {
  const hiArray = []
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi'
  }

  return hiArray
}

// O(1)
function getLargestItem(numbers) {
  // let largest = -Number.MAX_VALUE
  let larget = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]
    }
  }

  return largest
}