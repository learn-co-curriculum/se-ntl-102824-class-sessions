# Discussion Questions: Events

## Objectives

* Recall the different types of JavaScript Events
* Identify when the `DOMContentLoaded` event will trigger
* Implement a callback attached to an event handler

## Exercise

Take a look at each of the code samples below. For each sample, work with your
group to answer the following questions.

1. What does each line of code do?
2. How does this piece of code work?
3. Given this code sample, what can you learn or describe about JavaScript

### Example 1

```html
// index.html
...

<button id="notify">Click Me!</button>

<script src="index.js"></script>
```

```js
// index.js

const button = document.getElementById("notify")
button.addEventListener('click', function(){
  console.log("Printing a Message!")
})
```

### Example 2

```html
// index.html
...

<button id="notify">Click Me!</button>

<script src="index.js"></script>
```

```js
// index.js

const button = document.getElementById("notify")
button.addEventListener('mouseover', function(){
  console.log("Printing a Message!")
})
```

### Example 3

```html
// index.html
...
<script src="index.js"></script>

<button id="notify">Click Me!</button>

```

```js
// index.js

const button = document.getElementById("notify")
button.addEventListener('mouseover', function(){
  console.log("Printing a Message!")
})
```

### Example 4

```html
// index.html
...
<script src="index.js"></script>

<button id="notify">Click Me!</button>

```

```js
// index.js
document.addEventListener("DOMContentLoaded", function(){
  const button = document.getElementById("notify")
  button.addEventListener('mouseover', function(){
    console.log("Printing a Message!")
  })
});
```

### Example 5

Oops. Looks like this developer made some mistakes typing. Identify the mistakes.

```html
// index.html
...
<script src="index.js"></script>

<button id="notifiable">Click Me!</button>

```

```js
// index.js
document.addListenerEvent("DOMContentLoaded", function(){
  const button = document.getElementById("notifliable")
  button.addListenerEvent('click', function(){
    console.log("Printing a Message!")
  })
});
```
