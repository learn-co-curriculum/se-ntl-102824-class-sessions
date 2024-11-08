/////////////
// Global vars
////////////
const baseURL = "http://localhost:3000/ramens";
let selectedRamen;

///////////
// Selectors
////////////
const menu = document.querySelector("#ramen-menu");

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
  getAllRamens().then((rArr) => rArr.forEach(renderRamen));
};

function renderRamen(ramenObj) {
  console.log("🚀 ~ renderRamen ~ ramenObj:", ramenObj);
  const img = document.createElement("img");
  img.src = ramenObj.image
  img.alt = `${ramenObj.name} thumbnail`
  menu.append(img)
}

/////////////
// Event listners/handlers
//////////////
const handleClick = (ramen) => {
  // Add code
};

const handleSubmit = (e) => {};

///////////////
// Initializers
///////////////

// Callbacks

const addSubmitListener = () => {
  // Add code
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
