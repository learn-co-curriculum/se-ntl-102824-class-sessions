/////////////
// Global vars
////////////
const baseURL = "http://localhost:3000/ramens";
let selectedRamen;

///////////
// Selectors
////////////
const menu = document.querySelector("#ramen-menu");
const detailImage = document.querySelector("#ramen-detail .detail-image")
console.log("🚀 ~ detailImage:", detailImage)
const detailName = document.querySelector("#ramen-detail .name")
const detailRestaurant = document.querySelector("#ramen-detail .restaurant")
const ratingDisplay = document.querySelector("#rating-display")
const commentDisplay = document.querySelector("#comment-display")

////////////
// Fetch fns
/////////////

function getAllRamens() {
  return fetch(baseURL).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

////////////
// Render fns
/////////////
const displayRamens = () => {
  // Add code
  getAllRamens().then((rArr) => {
    rArr.forEach(renderRamen)
    renderDetails(rArr[0])
  });
};

function renderRamen(ramenObj) {
  console.log("🚀 ~ renderRamen ~ ramenObj:", ramenObj);
  const img = document.createElement("img");
  img.src = ramenObj.image
  img.alt = `${ramenObj.name} thumbnail`
  img.addEventListener('click', () =>  handleClick(ramenObj));
  menu.append(img)
}

function renderDetails(ramenObj){
  selectedRamen = ramenObj // for persistence of editing rating or comments using closures
  detailImage.src = ramenObj.image
  detailRestaurant.textContent = ramenObj.restaurant
  detailName.textContent = ramenObj.name
  ratingDisplay.textContent = ramenObj.rating
  commentDisplay.textContent = ramenObj.comment
  /* 
    ramenDetail.innerHTML = `
    `<img src=${ramenObj.image} />
    ...
    `
  */
}

/////////////
// Event listners/handlers
//////////////
const handleClick = (ramen) => {
  console.log("🚀 ~ handleClick ~ ramen:", ramen)
  // Add code
  renderDetails(ramen)
};

const handleSubmit = (event) => {
  event.preventDefault()
  console.log("🚀 ~ handleSubmit ~ e:", event.target)
  const {name, restaurant, image} = event.target // object destructuring assignment
  const newRamen = {
    name: event.target.name.value,
    restaurant: event.target.restaurant.value,
    image: event.target.image.value,
    rating: event.target.rating.value,
    comment: event.target["new-comment"].value
  }
  // const ramen = {
  //   name, // js shorthand for when key == variable
  //   restaurant,
  // }
  renderRamen(newRamen)
  // TODO: advanced deliverable => POST /ramens with newRamen obj
};

///////////////
// Initializers
///////////////

// Callbacks

const addSubmitListener = (form) => {
  // Add code
  form.addEventListener('submit', handleSubmit)
  // document.querySelector('#new-ramen').addEventListener('submit', handleSubmit)
};

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
};

main();

// Export functions for testing
export { displayRamens, addSubmitListener, handleClick, main };
