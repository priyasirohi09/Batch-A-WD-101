## Strings in JavaScript

JavaScript strings are sequences of characters used to represent text data. Strings are immutable, meaning once created, they cannot be changed directly, but new strings can be created from existing ones.

***

### Defining Strings

Strings can be created using:
- Double quotes `"Hello"`
- Single quotes `'Hello'`
- Backticks (template literals) `` `Hello` ``

```js
let single = 'Single quotes';
let double = "Double quotes";
let backtick = `Backticks for template literals`;
```

***

### Common String Methods

| Method           | Description                                 | Example                                       | Output                |
|------------------|---------------------------------------------|-----------------------------------------------|-----------------------|
| `length`         | Returns the length of the string            | `"Hello".length`                              | `5`                   |
| `charAt(index)`  | Returns character at specified index        | `"Hello".charAt(1)`                           | `"e"`                 |
| `toUpperCase()`  | Converts string to uppercase                 | `"hello".toUpperCase()`                       | `"HELLO"`             |
| `toLowerCase()`  | Converts string to lowercase                 | `"HELLO".toLowerCase()`                       | `"hello"`             |
| `substring(start, end)` | Returns substring between `start` and `end` indexes | `"Hello".substring(1,4)`                      | `"ell"`               |
| `split(separator)` | Splits string into array by separator       | `"a,b,c".split(",")`                          | `["a", "b", "c"]`     |
| `replace(search, replaceWith)` | Replaces text in string               | `"Hello".replace("H", "J")`                   | `"Jello"`             |

Example usage:
```js
let str = "JavaScript";
console.log(str.length);           // 10
console.log(str.charAt(4));        // "S"
console.log(str.toUpperCase());    // "JAVASCRIPT"
console.log(str.substring(4, 10)); // "Script"
console.log(str.split("a"));       // ["J", "v", "Script"]
console.log(str.replace("Script", "Rocks")); // "JavaRocks"
```

You can go through this article to read about String Methods in detail: [W3Schools String Methods](https://www.w3schools.com/js/js_string_methods.asp)
***

### Embedding Expressions, Multi-line Strings, and String Interpolation

Using template literals (backticks) allows:
- Embedding expressions via `${}`:
```js
let name = "Alice";
console.log(`Hello, ${name}!`); // "Hello, Alice!"
```

- Multi-line strings without concatenation:
```js
let message = `This is a
multi-line
string.`;
console.log(message);
```

- Complex expressions inside interpolation:
```js
console.log(`2 + 2 = ${2 + 2}`); // "2 + 2 = 4"
```

***

**References:**

- [W3Schools String Methods](https://www.w3schools.com/js/js_string_methods.asp)
- [MDN String toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [MDN String charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [JavaScript.info: Strings](https://javascript.info/string)

