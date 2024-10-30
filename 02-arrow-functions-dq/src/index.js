// Example 1

// const playMusic = function (music) {
//   return "Playing some " + music;
// };
// playMusic("Jazz");

// Example 2

// const playMusic = (music) => {
//   return "Playing some " + music;
// };

// Example 3

// const playMusic = (music) => { // brackets create funtion body, requires 'return'
//   "Playing some " + music; // no implicit return
// };

// Example 4

// const playMusic = (music) => "Playing some " + music; // implicit return with no delimited fn body; only works with single-line logic

// Example 5

const playMusic = music => "Playing some " + music;
const type = "Classical"
console.log("🚀 ~ playMusic:", playMusic(type));


// Example 6

// const readBooks = (book1, book2) => {
//   return `I read '${book1}' and '${book2}'`;
// };

// Example 7

// const readBooks = (book1, book2) => `I read '${book1}' and '${book2}'`; // implicit return
//   readBooks("The Old Man and the Sea", "1984");

// Example 8

// const readBooks = book1, book2 =>  `I read '${book1}' and '${book2}'`
// console.log("🚀 ~ readBooks", readBooks("The Old Man and the Sea", "1984"));

console.log("🚀 ~ greet ~ greet:", greet())
function greet(){
    return "Hello Earthlings!"
}

const a = 2, b = 3 // declaring and assigning multiple const vars on a single line
console.log("🚀 ~ b:", b)
console.log("🚀 ~ a:", a)

