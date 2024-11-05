/////////////
// Global constants
////////////
const movieURL = "http://localhost:3000/movies";

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
  console.log("🚀 ~ renderInNav ~ movie:", movie);
  const img = document.createElement("img");
  img.src = movie.image;
  img.alt = `${movie.title} poster`
  img.addEventListener('click', () => renderMovieDetails(movie))
  movieList.append(img)
}

function renderMovieDetails(movie){
    detailImage.src = movie.image
    detailImage.alt = `${movie.title} poster`
    title.textContent = movie.title
    yearReleased.textContent = movie.release_year
    description.textContent = movie.description
    let watchValue = movie.watch ? "Watched" : "Unwatched"
    watched.textContent = watchValue
    amount.textContent = movie.blood_amount
}

//////////////
// Event listeners/handler fns
//////////////

////////////
// Intializers
////////////
getAllMovies(movieURL).then(movieArr => {
    renderAllMovies(movieArr)
    renderMovieDetails(movieArr[0])
});
