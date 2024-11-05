/////////////
// Global constants
////////////
const movieURL = "http://localhost:3000/movies";
let selectedMovie; // memoize the currently selected movie

/////////////
// DOM Selectors
/////////////
const movieList = document.querySelector("#movie-list");
const detailImage = document.querySelector("#detail-image");
const title = document.querySelector("#title")
const yearReleased = document.querySelector("#year-released")
const description = document.querySelector("#description")
const watched = document.querySelector("#watched")
const amount = document.querySelector("#amount")
const bloodForm = document.querySelector("#blood-form")
console.log("🚀 ~ bloodForm:", bloodForm)

//////////////
// Fetch fns
/////////////
function getAllMovies(url) {
  return fetch(url).then((response) => response.json());
}

/////////////http://127.0.0.1:5500/assets/f13-newblood.jpeg
// Render fns
/////////////
function renderAllMovies(movieArr) {
  movieArr.forEach((movie) => {
    renderInNav(movie)
});
}

function renderInNav(movie) {
//   console.log("🚀 ~ renderInNav ~ movie:", movie);
  const img = document.createElement("img");
  img.src = movie.image;
  img.alt = `${movie.title} poster`
  img.addEventListener('click', () => renderMovieDetails(movie))
  movieList.append(img)
}

function renderMovieDetails(movie){
    selectedMovie = movie // using the closure created with the movie obj to create semi-persistence (in the DOM)
    detailImage.src = movie.image
    detailImage.alt = `${movie.title} poster`
    title.textContent = movie.title
    yearReleased.textContent = movie.release_year
    description.textContent = movie.description
    let watchValue = movie.watched ? "Watched" : "Unwatched"
    watched.textContent = watchValue
    amount.textContent = movie.blood_amount
}

//////////////
// Event listeners/handler fns
//////////////

function toggleWatched() {
    selectedMovie.watched = !selectedMovie.watched
    renderMovieDetails(selectedMovie)
}

watched.addEventListener('click', toggleWatched)

function handleBloodSubmit(e) {
    e.preventDefault()
    console.log(e.target["blood-amount"].value)
    selectedMovie.blood_amount += Number(e.target["blood-amount"].value)
    renderMovieDetails(selectedMovie)
    e.target.reset()
}

bloodForm.addEventListener('submit', handleBloodSubmit)

////////////
// Intializers
////////////
getAllMovies(movieURL).then(movieArr => {
    renderAllMovies(movieArr)
    renderMovieDetails(movieArr[0])
});
