
# JavaScript Higher-Order Array Methods

## Functions as First-Class Citizens

In JavaScript, functions are **first-class citizens**, meaning they can be:

- Assigned to variables
- Passed as arguments to other functions
- Returned from other functions

This allows for flexible, powerful programming patterns including higher-order functions.

***

## Higher-Order Functions

A **higher-order function (HOF)** is a function that:

- Takes other functions as arguments, or
- Returns a function as a result

Array methods like `map()`, `filter()`, and `reduce()` are classic examples of higher-order functions because they accept callback functions.

***

## Common Higher-Order Array Methods

### map()

- Transforms each element in an array based on a callback function and returns a new array.
- Does not modify the original array.

```js
var numbers = [1, 2, 3];
var doubled = numbers.map(function(n) {
  return n * 2;
});
console.log(doubled); // [2, 4, 6]
```

### filter()

- Creates a new array with elements that satisfy a condition specified in the callback.

```js
var numbers = [1, 2, 3, 4, 5];
var evens = numbers.filter(function(n) {
  return n % 2 === 0;
});
console.log(evens); // [2, 4]
```

### reduce()

- Reduces the array to a single value by applying a reducer function on each element.

```js
var numbers = [1, 2, 3, 4];
var sum = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
}, 0);
console.log(sum); // 10
```

### find()

- Returns the first element that satisfies the given condition, or `undefined` if none do.

```js
var numbers = [1, 2, 3, 4];
var firstEven = numbers.find(function(n) {
  return n % 2 === 0;
});
console.log(firstEven); // 2
```

### some() & every()

- `some()` returns `true` if **any** elements match the condition.
- `every()` returns `true` if **all** elements match the condition.

```js
var numbers = [1, 2, 3, 4];
console.log(numbers.some(function(n) { return n > 3; }));  // true
console.log(numbers.every(function(n) { return n > 0; })); // true
```

### findIndex()

- Returns the index of the first element that satisfies the condition or `-1` if none do.

```js
var numbers = [1, 2, 3, 4];
var index = numbers.findIndex(function(n) {
  return n === 3;
});
console.log(index); // 2
```

### forEach()

- Executes a function on each array element.
- Does **not** return a new array.
- Used for side effects like logging or DOM manipulation.

```js
var fruits = ["Apple", "Banana"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Output:
// Apple
// Banana
```

***

## Example Using Multiple Methods

```js
var products = [
  { name: "Shirt", price: 20 },
  { name: "Pants", price: 30 },
  { name: "Hat", price: 10 }
];

// Get names of products that cost more than $15
var expensiveProducts = products
  .filter(function(product) {
    return product.price > 15;
  })
  .map(function(product) {
    return product.name;
  });

console.log(expensiveProducts); // ["Shirt", "Pants"]
```

***

## Benefits of Higher-Order Methods

- Promotes **declarative** programming style (focus on what, not how).
- Simplifies data transformation and filtering.
- Helps in writing concise, readable, and functional code.
- Avoids explicit loops and mutable state, promoting immutability.

***

**References:**

- [Dev.to: Higher Order Array Methods](https://dev.to/shrihankp/higher-order-array-methods-in-javascript-14e7)
- [GeeksforGeeks: JavaScript Higher Order Functions](https://www.geeksforgeeks.org/javascript/javascript-higher-order-functions/)
- [FreeCodeCamp: Higher Order Functions](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/)
- [MDN Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

***
## Callback Functions

A **callback function** is a function passed as an argument to another function, which is then invoked inside the outer function to complete a routine or task. Callbacks allow functions to be executed after some operation, often used for asynchronous tasks or functional programming patterns.

### Example of a Callback Function

```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Output:
// Hello, Alice
// Goodbye!
```

- `sayGoodbye` is passed as a callback to `greet`.
- Inside `greet`, the callback is called after greeting.
- Important: When passing a function as a callback, do **not** include parentheses.

### Callbacks with Array Methods

Methods like `map()`, `filter()`, and `forEach()` use callbacks to process each element.

```js
var numbers = [1, 2, 3];
var doubled = numbers.map(function(x) {
  return x * 2;
});
console.log(doubled); // [2, 4, 6]
```

***

## Pure and Impure Functions

### Pure Functions

A **pure function** satisfies two key properties:

1. **Deterministic:** Given the same input, it always returns the same output.
2. **No side effects:** It does not modify external state or variables outside its scope.

Example:

```js
function add(a, b) {
  return a + b;
}
```

- Always produces the same result for the same inputs.
- Does not change anything outside the function.

### Impure Functions

Functions are impure if they:

- Depend on external state or variables that may change.
- Modify external data or cause side effects (like modifying DOM, changing global variables, logging).

Example:

```js
var count = 0;

function increment() {
  count++;
}
```

- Depends on external variable `count`.
- Changes external state, so it has side effects.

***

## Why Pure Functions Matter

- Easier to **test** and **debug**.
- Predictable and reliable.
- Foundation of **functional programming**.
- Facilitate **memoization** and **optimization**.

***

**References:**

- [W3Schools Callback Functions](https://www.w3schools.com/js/js_callback.asp)
- [MDN Callback Function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [FreeCodeCamp: Callback Functions](https://www.freecodecamp.org/news/how-to-use-callback-functions-in-javascript/)
- [JavaScript.info Pure Functions](https://javascript.info/pure-functions)
