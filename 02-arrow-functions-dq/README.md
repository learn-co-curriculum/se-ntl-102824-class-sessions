# Arrow Function Discussion Questions

## Learning Goals

- Recognize different types of function syntax

## Instructions

Arrow functions are a relatively new feature that was introduced with ES6.
They use a different syntax and carry slightly different behavior than
function expressions.

Take a look at the following code examples with your group
mates. Without looking anything up, see if you can deduce the differences
and similarities in how arrow functions behave.  What will the function return?
You may run the code if you wish.

### Examples

### Arrow Function Shortcuts

```js
// Example 1

const playMusic = function (music) {
  return "Playing some " + music;
};
playMusic("Jazz");
```

```js
// Example 2

const playMusic = (music) => {
  return "Playing some " + music;
};
playMusic("Jazz");
```

```js
// Example 3

const playMusic = (music) => {
  "Playing some " + music;
};
playMusic("Jazz");
```

```js
// Example 4

const playMusic = (music) => "Playing some " + music;
playMusic("Jazz");
```

```js
// Example 5

const playMusic = music => "Playing some " + music;
playMusic("Jazz");
```

```js
// Example 6

const readBooks = (book1, book2) => {
  return `I read '${book1}' and '${book2}'`;
};
readBooks("The Old Man and the Sea", "1984");
```

```js
// Example 7

const readBooks = (book1, book2) => `I read '${book1}' and '${book2}'`;
readBooks("The Old Man and the Sea", "1984");
```

```js
// Example 8

const readBooks = book1, book2 =>  `I read '${book1}' and '${book2}'`
```
