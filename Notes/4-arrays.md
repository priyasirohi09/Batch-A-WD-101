## JavaScript Arrays

JavaScript arrays are special objects used to store ordered collections of values. They are versatile and provide many methods to manipulate the data effectively.

***

## Defining and Initializing Arrays

Arrays can be defined using square brackets `[]` with comma-separated values:

```js
let fruits = ["Apple", "Banana", "Mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["Hello", 10, true];
```

Alternatively, arrays can be created using the `Array` constructor, though this is less common:

```js
let arr = new Array("a", "b", "c");
```

***

## Accessing Elements and Array Properties

- Access elements by zero-based index:

```js
console.log(fruits[0]); // "Apple"
console.log(numbers[3]); // 4
```

- Use `.length` for the number of elements:

```js
console.log(fruits.length); // 3
```

- Update elements by assigning to an index:

```js
fruits[1] = "Orange"; // Changes "Banana" to "Orange"
```

***

## Common Array Methods

### push()

Adds one or more elements to the end of an array and returns the new length.

```js
fruits.push("Kiwi"); // ["Apple", "Banana", "Mango", "Kiwi"]
```

### pop()

Removes the last element from an array and returns it.

```js
let lastFruit = fruits.pop(); // "Kiwi", fruits back to ["Apple", "Banana", "Mango"]
```

### shift()

Removes the first element from an array and returns it.

```js
let firstFruit = fruits.shift(); // "Apple", fruits becomes ["Banana", "Mango"]
```

### unshift()

Adds one or more elements to the beginning of an array and returns the new length.

```js
fruits.unshift("Lemon"); // ["Lemon", "Banana", "Mango"]
```

### splice()

Changes the array by removing, replacing, or adding elements at a specific index.

```js
fruits.splice(1, 1, "Pineapple"); // Removes 1 at index 1, adds "Pineapple" 
// Result: ["Lemon", "Pineapple", "Mango"]
```

### slice()

Returns a shallow copy of a portion of an array into a new array.

```js
let citrus = fruits.slice(0, 2); // ["Lemon", "Pineapple"]
```

***

## Additional Array Methods

### includes()

Checks if an array contains a value; returns `true` or `false`.

```js
fruits.includes("Banana"); // false (after previous modifications)
```

### indexOf()

Returns the first index of a value in the array or `-1` if not found.

```js
fruits.indexOf("Mango"); // 2
```

### reverse()

Reverses the array in place.

```js
fruits.reverse(); // ["Mango", "Pineapple", "Lemon"]
```

### join()

Joins array elements into a string with an optional separator.

```js
fruits.join(", "); // "Mango, Pineapple, Lemon"
```

***

## Summary Table of Array Methods

| Method      | Description                               | Example                                    |
|-------------|-----------------------------------------|--------------------------------------------|
| `push()`    | Add element(s) to end                    | `arr.push("x")`                            |
| `pop()`     | Remove last element                      | `arr.pop()`                               |
| `shift()`   | Remove first element                     | `arr.shift()`                             |
| `unshift()` | Add element(s) to front                  | `arr.unshift("x")`                        |
| `splice()`  | Remove/add elements at any position      | `arr.splice(1, 2, "x")`                   |
| `slice()`   | Extract portion into new array           | `arr.slice(1, 3)`                         |
| `includes()`| Check if array contains value            | `arr.includes("x")`                       |
| `indexOf()` | Get index of value (-1 if not present)  | `arr.indexOf("x")`                        |
| `reverse()` | Reverse the array in place                | `arr.reverse()`                           |
| `join()`    | Join elements to string with separator   | `arr.join(", ")`                          |

***

**References:**

- [W3Schools JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)
- [JavaScript.info Array Methods](https://javascript.info/array-methods)
- [MDN Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [MDN Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [MDN Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
