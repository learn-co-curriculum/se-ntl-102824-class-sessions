/////////////
// Global constants
////////////
const movieURL = "http://localhost:3000/movies";

/////////////
// DOM Selectors
/////////////
const movieList = document.querySelector("#movie-list");

//////////////
// Fetch fns
/////////////
function getAllMovies(url) {
  return fetch(url).then((response) => response.json());
}

/////////////
// Render fns
/////////////
function renderAllMovies(movieArr) {
  movieArr.forEach((movie) => renderInNav(movie));
}

function renderInNav(movie) {
  console.log("🚀 ~ renderInNav ~ movie:", movie);
  const img = document.createElement("img");
  img.src = movie.image;
  img.alt = `${movie.title} poster`
  movieList.append(img)
}

//////////////
// Event listeners/handler fns
//////////////

////////////
// Intializers
////////////
getAllMovies(movieURL).then(renderAllMovies);
