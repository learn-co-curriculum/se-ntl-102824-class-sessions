MANTRA
1. FETCH the data
2. SELECT `DOM` elements
3. CREATE new elements (as needed)
4. ATTACH event listeners (as needed)
5. ASSIGN data to element attributes
6. APPEND new elements to the DOM

# Deliverables
As a user, I should be able to:
1. View all movies in nav element on page load
- [x] Fetch all movies from the server at `http://localhost:3000/movies`
- [x] Select the `nav` element `#movie-list`
- [x] Iterate over the movies and pass each movie to the `renderInNav` function
- [x] Create a new `img` element
- [x] Assign the `src` attribute of the `img` element to the movie's `image` attribute
- [x] Append each `img` element to the `nav` element

2. View the 1st movie's details in the `#movie-info` div on page load
- [x] (use the 1st movie in the alread fetched array)
- [x] Select the child elements of the `#movie-info` div
- [x] declare a function `renderMovieDetails` that accepts a movie object as an argument
- [x] Assign movie attributes to the corresponding elements
- [x] Call the `renderMovieDetails` function with the 1st movie in the array

3. Click on a movie in the `#movie-list` to view its details in the `#movie-info` div
- [] Attach a click event listener to each  `img` in  `nav` element
- [] When an `img` is clicked, call the `renderMovieDetails` function with the movie object

4. Click the watched button to toggle the `watched` attribute of the movie object
- [] Select the `#watched` button
- [] Attach a click event listener to the `#watched` button
- [] When the button is clicked, toggle the `watched` attribute of the currently selected movie object

5. Enter the amount of blood in the `#blood-amount` input field and it persists in the DOM
- [] Select the `#blood-form` element
- [] Attach a submit event listener to the `#blood-form` element
- [] When the form is submitted, prevent the default behavior
- [] When the form is submitted get the value of the input and add it to the current movie object `blood_amount` attribute


# Data shape
```json
{
    "id": 1,
    "title": "Friday the 13th",
    "release_year": 1980,
    "description": "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
    "image": "./assets/f13-1.jpeg",
    "watched": false,
    "blood_amount": 0
}
```