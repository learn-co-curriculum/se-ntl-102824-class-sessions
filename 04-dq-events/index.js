// index.js

// const button = document.getElementById("notify")
// button.addEventListener('click', function(){
//   console.log("Printing a Click Message!")
// })

// // const button = document.getElementById("notify")
// button.addEventListener('mouseover', function(){
//   console.log("Printing a Mouse Message!")
// })

// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.querySelector("#notify");
//   button.addEventListener("mouseover", function () {
//     console.log("Printing a Message!");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("notifiable");
  button.addEventListener("click", function () {
    console.log("Printing a Message!");
  });
});
