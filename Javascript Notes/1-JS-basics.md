## JavaScript Basics: Syntax, Structure, and Data Types

JavaScript is a flexible, case-sensitive scripting language used to create dynamic, interactive effects on web pages. 

### Syntax and Structure

- Every JavaScript statement ends with a semicolon (optional but recommended for clarity).
- Whitespace and indentation are used for readability, not execution.
- Comments:  
  - Single line: `// Comment here`
  - Multi-line: 
    ```js
    /*
      Multi-line 
      comment here
    */
    ```

#### Identifiers and Naming
- Variables (identifiers) must start with a letter, `_`, or `$`, can include numbers later, and cannot be reserved keywords.
- JavaScript favors "lower camel case" (e.g., `firstName`).

#### Example
```js
let total = 5 + 10;
console.log(total); // Outputs: 15
```

### Expressions and Operators

- Expressions combine variables, literals, and operators to produce values:  
  ```js
  let sum = x + y;
  let greeting = "Hello, " + name;
  ```
- Arithmetic operators: `+`, `-`, `*`, `/`



### JavaScript Data Types

JavaScript has dynamic and loosely typed variables, allowing reassignment of different types to the same variable.

**Primitive types:**  
- String, Number, BigInt, Boolean, Undefined, Null, Symbol

**Object:**  
- Used for more complex data structures (arrays, functions, general objects).

| Data Type   | Example                | typeof result | Description             |
|-------------|------------------------|--------------|-------------------------|
| String      | `"Alice"`                | "string"     | Text value              |
| Number      | `42`, `3.5`              | "number"     | Numeric (float or int)  |
| BigInt      | `123n`                   | "bigint"     | Large integers          |
| Boolean     | `true`, `false`          | "boolean"    | Logical state           |
| Undefined   | `let y;` (`y` is undefined) | "undefined" | No value assigned       |
| Null        | `null`                   | "object"     | Explicit no value       |
| Symbol      | `Symbol("id")`           | "symbol"     | Unique identifiers      |
| Object      | `{key: "val"}`           | "object"     | Collections or complex  |

For detailed descriptions of each type: [MDN Data Structures]

***

## Working with Variables

Variables are containers used to store data values in JavaScript.

```js
let score = 90;
```

### Declaring Variables

- Declaration can use `let`, `const`, or (archaically) `var`:

```js
let x = 5;
const pi = 3.14;
var name = "Sam";
```

- Names are case-sensitive and should follow identifier rules.



## let, var, and const

### let
- Declares block-scoped variables.
- Allows reassignment, but not redeclaration in the same scope.

  ```js
  let count = 1;
  count = 2; // Allowed
  ```

### var
- Declares function-scoped or globally scoped variables.
- Can be redeclared and updated within the same function or global scope.

  ```js
  var age = 30;
  var age = 31; // Allowed
  ```

### const
- Declares block-scoped constants.
- Must be initialized at declaration, cannot be reassigned.

  ```js
  const birthYear = 1990;
  // birthYear = 1994; // Error
  ```

***

## Differences Between let, var, and const

| Feature                  | var         | let                 | const                        |
|--------------------------|-------------|---------------------|------------------------------|
| Scope                    | Function/global | Block              | Block                        |
| Re-declaration           | Yes         | No                  | No                           |
| Re-assignment            | Yes         | Yes                 | No                           |
| Hoisted?                 | Yes (as undefined) | Yes (TDZ)   | Yes (TDZ)                    |
| Initialization required? | No          | No                  | Yes                          |



**References:**

1. [W3Schools: JavaScript Syntax and Variables](https://www.w3schools.com/js/js_syntax.asp)
2. [MDN: JavaScript Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures)


