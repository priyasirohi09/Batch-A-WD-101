## JavaScript Functions

Functions are blocks of code that handle specific tasks and help organize and reuse code.

### Function Declarations

Defined using `function` and a name. They are “hoisted” (available before their definition).
```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```
- Hoisted: can be called before declaration.

### Function Expressions

Stored in variables; can be anonymous and are not hoisted.
```js
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(2, 3)); // 6
```
- Only available after their assignment.



## JavaScript Loops

Loops allow repeated actions until a condition changes.

### for Loop

Repeats a block a set number of times.
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
- Best for count-based iterations.

### while Loop

Repeats while the condition is true.
```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
- Used when iterations are not predetermined.

### do...while Loop

Runs block at least once, then repeats while condition is true.
```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
- Ensures block runs at least one time.

***

## Control Statements

Control statements guide how loops or blocks behave.

- `break` ends the loop early:
  ```js
  for (let i = 0; i < 10; i++) {
    if (i === 5) break; // Loop stops at 5
    console.log(i);
  }
  ```
- `continue` skips current iteration:
  ```js
  for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // Skips '2'
    console.log(i);
  }
  ```

***

## Conditional Statements: if, else if, else, and switch

Conditional statements let programs make decisions based on logic.

### if

Executes a block if the condition is true.
```js
if (temperature > 30) {
  console.log("It's hot!");
}
```

### if ... else

Runs one block if true, another if false.
```js
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### if ... else if ... else

Chains multiple conditions.
```js
let score = 70;
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 75) {
  console.log("Good");
} else {
  console.log("Needs Improvement");
}
```

### switch

Checks a single value against many possible cases.
```js
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Banana selected");
    break;
  case "apple":
    console.log("Apple selected");
    break;
  default:
    console.log("Unknown fruit");
}
```
- `break` prevents fall-through.
- `default` handles unmatched cases[1][2][6][8].

***

**References:**

1. [W3Schools Functions](https://www.w3schools.com/js/js_function_definition.asp)
2. [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
3. [FreeCodeCamp: Function Declaration vs Function Expression](https://www.freecodecamp.org/news/function-declaration-vs-function-expression/)
4. [W3Schools if/else Statements](https://www.w3schools.com/js/js_if_else.asp)
5. [GeeksforGeeks: JavaScript if, else, else if](https://www.geeksforgeeks.org/javascript/javascript-if-else-else-if/)
