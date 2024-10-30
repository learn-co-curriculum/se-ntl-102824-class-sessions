
import './style.css'


document.querySelector('#app').innerHTML = `
  <div>
    
    <h1>Hello World!</h1>
   
  </div>
`

// Write a function that takes in a first name and a last name and prints out a greeting to the console. Example: greetPerson("Ada", "Lovelace") would print "Hello, Ada Lovelace!"

function greetPerson(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}!`)
}

greetPerson("Ada", "Lovelace")

// Write a function that prints the number of letters in a string. Example: numberOfLetters("Ada") => prints 3 to the console.

function numberOfLetters(word) {
  // console.log(word.split("").length)
  console.log(word.length)
}

numberOfLetters("Ada")

// Write a function that takes in an integer and returns the number of digits in that integer. Example: numberOfDigits(2598) would return 4.

function numberOfDigits(n) {
  return n.toString().length
}

numberOfDigits(2598)