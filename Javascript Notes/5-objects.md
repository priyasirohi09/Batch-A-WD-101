# JavaScript Objects

Objects in JavaScript are collections of key-value pairs, useful for storing complex data structures.

***

## Object Literals, Properties, and Methods

### Object Literals

Object literals define objects with properties and methods enclosed in curly braces `{}`:

```js
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
```

- Properties hold values like strings, numbers, arrays, other objects, or functions.
- Methods are functions attached to objects that can act on object data.

***

## Accessing Object Properties: Dot Notation vs Bracket Notation

### Dot Notation

```js
console.log(person.name); // Output: "John"
```
- Accesses properties using a literal property name.
- Property names must be valid JavaScript identifiers (cannot start with a number, contain spaces or special characters, etc.).
- Most concise and commonly used.

### Bracket Notation

```js
console.log(person["age"]); // Output: 30
```
- Accesses properties using string keys.
- Allows property names with spaces, special characters, or numeric keys.
- Can use variables or expressions to specify the property name dynamically.

**Example with dynamic keys:**

```js
const propName = "name";
console.log(person[propName]); // Output: "John"
```

### Key Differences

| Aspect                    | Dot Notation                          | Bracket Notation                     |
|---------------------------|-------------------------------------|------------------------------------|
| Property name             | Must be valid identifier             | Can be any string or expression     |
| Access with variable key  | Not possible                        | Possible                           |
| Use cases                | Known, valid property names          | Dynamic or invalid property names   |

***

## Adding, Updating, and Deleting Properties

### Adding Properties

Add new properties using either notation:

```js
person.job = "Developer";        // Using dot notation
person["hobby"] = "Photography"; // Using bracket notation
```

### Updating Properties

Modify existing properties similarly:

```js
person.age = 31;
person["name"] = "Jane";
```

### Deleting Properties

Remove a property using the `delete` operator:

```js
delete person.job;
```

***

## Example Summary

```js
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2023,
  startEngine: function() {
    console.log("Engine started");
  }
};

// Accessing
console.log(car.make);         // Toyota
console.log(car["model"]);     // Camry

// Dynamic access
const prop = "year";
console.log(car[prop]);        // 2023

// Adding property
car.color = "blue";

// Updating property
car.year = 2024;

// Deleting property
delete car.color;

// Calling method
car.startEngine();             // Engine started
```

***

**References:**

- [MDN: Property accessors - dot notation and bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [FreeCodeCamp: Dot Notation vs Bracket Notation](https://www.freecodecamp.org/news/dot-notation-vs-square-brackets-javascript/)
- [MDN: Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)

***
