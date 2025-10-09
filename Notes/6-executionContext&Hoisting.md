# Understanding Execution Context and Hoisting in JavaScript

## Execution Context

JavaScript code runs inside an environment called an **execution context**. Think of it as the environment where your code is parsed, variables and functions are stored, and the code is executed.

### Types of Execution Contexts

1. **Global Execution Context**  
   - Created when the JavaScript engine first starts your program.  
   - It represents the global scope (e.g., `window` object in browsers).  
   - Only one global context per program.

2. **Function Execution Context**  
   - Created whenever a function is called.  
   - Has its own local scope, variables, and parameters.

### Execution Context Lifecycle - Two Phases

- **Creation Phase**  
  - Memory is allocated for variables, functions, and the scope chain setup.  
  - Variables declared with `var` are initialized with `undefined`.  
  - Function declarations are fully hoisted and available.  
  - Variables declared with `let` and `const` are not initialized yet—they are in the *Temporal Dead Zone*.  

- **Execution Phase**  
  - Code runs line by line. Variables get their assigned values, functions get called, etc.

***

## Hoisting

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.

### Variables Hoisting

- `var` declarations are hoisted and initialized with `undefined`. You can access them before the declaration, but the value will be `undefined`.
  
  ```js
  console.log(a); // undefined
  var a = 10;
  ```

- `let` and `const` are hoisted but **not initialized**. Accessing them before declaration causes a **ReferenceError** due to the **Temporal Dead Zone** (TDZ).

  ```js
  console.log(b); // ReferenceError
  let b = 20;
  ```

### Temporal Dead Zone (TDZ)

- The period between entering the scope and variable initialization where variables declared with `let` and `const` cannot be accessed.
- Prevents using variables before they are declared.

***

## Function Hoisting

- **Function declarations** are hoisted entirely. They can be called before the declaration in the code.

  ```js
  console.log(square(5)); // 25
  
  function square(x) {
    return x * x;
  }
  ```

- **Function expressions** (including arrow functions) are not hoisted. You cannot call them before the actual assignment.

  ```js
  console.log(square); // undefined
  console.log(square(5)); // TypeError: square is not a function
  
  var square = function(x) {
    return x * x;
  };
  ```

***

## Summary Table

| Concept                 | var                         | let                           | const                         | Function Declaration       | Function Expression    |
|-------------------------|-----------------------------|-------------------------------|-------------------------------|----------------------------|-----------------------|
| Scope                   | Function/Global             | Block                         | Block                         | Function Scope             | Depends on variable    |
| Hoisted                 | Yes, initialized `undefined` | Yes, uninitialized (TDZ)       | Yes, uninitialized (TDZ)       | Yes, whole function        | Variable hoisted as undefined |
| Usage before declaration| Allowed (value undefined)   | Not Allowed (ReferenceError)   | Not Allowed (ReferenceError)   | Allowed                   | Not Allowed           |

***

**References:**

- [FreeCodeCamp: How JavaScript Works - Execution Context](https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/)
- [MDN: Execution Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#execution_context)
- [MDN: Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [JavaScript.info: Hoisting](https://javascript.info/hoisting)
