## Practice Sheet - JavaScript

---

### 🔹 Section 1: Variables, Hoisting & Execution Context

1. **Default to Zero**
   Write a function `safeAdd(a, b)` that adds two numbers but if either is `undefined`, treat it as `0`.

2. **Block Scope Test**
   Inside a function, declare `count = 5` with `var`. Inside an `if` block, declare another `count = 10` with `let`. Return both values in an array.

3. **Const Object Mutation**
   Create a constant object `settings` with `{theme:"light"}`. Change `theme` to `"dark"` and return the object.

4. **Hoisting with Multiple Vars**
   Inside a function, assign `x = 1` before declaring it with `var`. Then declare `var x = 2`. Return `x`.

5. **Function Expression Hoisting**
   Declare a variable `sayHi` as a function expression that returns `"Hi"`. Try to call it before it’s defined, wrap in try/catch, and return `"Not available"` if it fails.

---

### 🔹 Section 2: Arrays

6. **Odd Squares**
   Given an array of numbers, return a new array of only odd numbers squared.

7. **Average of Numbers**
   Return the average of numbers in an array using `reduce`.

8. **Flatten to Single Level**
   Write a function that takes a nested array (one level deep) and flattens it into a single array.

9. **Unique Even Numbers**
   From an array, return only unique even numbers in sorted order.

10. **Count Greater Than X**
    Write a function that counts how many numbers in an array are greater than a given value `x`.

---

### 🔹 Section 3: Functional Programming

11. **Extract Names of Adults**
    Given an array of user objects `{name, age}`, return an array of names of users aged 18 or older.

12. **Multiply All by Factor**
    Write a function that multiplies every number in an array by a given factor.

13. **Find First Premium User**
    Given an array of users `{name, plan}`, return the first user whose plan is `"premium"`.

14. **Any Inactive Users?**
    Return `true` if any user in the array has `active:false`.

15. **All Numbers Positive?**
    Check if all numbers in an array are positive.

---

### 🔹 Section 4: Objects

16. **Invert Object**
    Write a function that inverts an object’s keys and values.
    Example: `{x:"y"}` → `{y:"x"}`

17. **Shallow Copy**
    Return a shallow copy of an object using the spread operator.

18. **Merge with Priority**
    Merge two objects but if both have the same key, keep the one from the first object.

19. **Property List**
    Return an array of strings in format `"key:value"` for each property of an object.

20. **Deep Property Default**
    Given an object and a path string like `"a.b.c"`, return the value if it exists, otherwise return `"Not Found"`.

---

### 🔹 Section 5: Strings

21. **Reverse Words**
    Reverse the order of words in a sentence.
    Example: `"hello world from js"` → `"js from world hello"`

22. **Count Vowels**
    Count how many vowels are in a string.

23. **Remove Extra Spaces**
    Trim a string and replace multiple spaces with a single space.

24. **Check Substring**
    Return `true` if one string is a substring of another (don’t use `.includes`).

25. **Initials from Name**
    Given `"John Doe Smith"`, return `"J.D.S"`.

---

## 💡 SOLUTIONS + EXPLANATIONS

---

### Q1 — Default to Zero

```js
function safeAdd(a, b) {
  let x = (a === undefined ? 0 : a);
  let y = (b === undefined ? 0 : b);
  return x + y;
}
```

🔍 **Explanation:**
If a value is `undefined`, we replace it with `0` before adding.

---

### Q2 — Block Scope Test

```js
function blockScopeTest() {
  var count = 5;
  let blockCount;
  if (true) {
    let count = 10;
    blockCount = count;
  }
  return [blockCount, count];
}
```

🔍 **Explanation:**
`var` is function-scoped, while `let` is block-scoped — both can exist with the same name.

---

### Q3 — Const Object Mutation

```js
function mutateSettings() {
  const settings = { theme: "light" };
  settings.theme = "dark";
  return settings;
}
```

🔍 **Explanation:**
You can modify properties of a `const` object, but can’t reassign it.

---

### Q4 — Hoisting with Multiple Vars

```js
function hoistVars() {
  x = 1;
  var x = 2;
  return x;
}
```

🔍 **Explanation:**
`var` declarations are hoisted, so JavaScript knows `x` before it’s declared.

---

### Q5 — Function Expression Hoisting

```js
function funcExprTest() {
  try {
    return sayHi();
    var sayHi = function() { return "Hi"; };
  } catch {
    return "Not available";
  }
}
```

---

### Q6 — Odd Squares

```js
function oddSquares(arr) {
  return arr.filter(function(num) {
    return num % 2 !== 0;
  }).map(function(num) {
    return num * num;
  });
}
```

🔍 **Explanation:**
First filters out only odd numbers, then maps each one to its square.

---

### Q7 — Average of Numbers

```js
function average(arr) {
  let sum = arr.reduce(function(total, num) {
    return total + num;
  }, 0);
  return sum / arr.length;
}
```

🔍 **Explanation:**
Adds all numbers using `reduce`, then divides by the array’s length to get the average.

---

### Q8 — Flatten to Single Level

```js
function flattenArray(arr) {
  return arr.reduce(function(flat, item) {
    return flat.concat(item);
  }, []);
}
```

🔍 **Explanation:**
Combines all subarrays into one array using `concat` inside `reduce`.

---

### Q9 — Unique Even Numbers

```js
function uniqueEven(arr) {
  let evens = arr.filter(function(num) {
    return num % 2 === 0;
  });
  let unique = Array.from(new Set(evens));
  return unique.sort(function(a, b) {
    return a - b;
  });
}
```

🔍 **Explanation:**
Filters even numbers, removes duplicates with `Set`, then sorts in ascending order.

---

### Q10 — Count Greater Than X

```js
function countGreater(arr, x) {
  let count = 0;
  arr.forEach(function(num) {
    if (num > x) count++;
  });
  return count;
}
```

🔍 **Explanation:**
Iterates over the array and increases count each time a number exceeds `x`.

---

### Q11 — Extract Names of Adults

```js
function getAdultNames(users) {
  return users.filter(function(user) {
    return user.age >= 18;
  }).map(function(user) {
    return user.name;
  });
}
```

🔍 **Explanation:**
Filters users aged 18 or above, then extracts only their `name` values.

---

### Q12 — Multiply All by Factor

```js
function multiplyAll(arr, factor) {
  return arr.map(function(num) {
    return num * factor;
  });
}
```

🔍 **Explanation:**
Uses `map` to multiply every element by the given `factor`.

---

### Q13 — Find First Premium User

```js
function findPremium(users) {
  return users.find(function(user) {
    return user.plan === "premium";
  });
}
```

🔍 **Explanation:**
`find()` returns the first user whose `plan` matches `"premium"`.

---

### Q14 — Any Inactive Users?

```js
function hasInactive(users) {
  return users.some(function(user) {
    return user.active === false;
  });
}
```

🔍 **Explanation:**
`some()` returns `true` if at least one user has `active:false`.

---

### Q15 — All Numbers Positive?

```js
function allPositive(arr) {
  return arr.every(function(num) {
    return num > 0;
  });
}
```

🔍 **Explanation:**
`every()` checks if all elements satisfy the condition of being greater than zero.

---

### Q16 — Invert Object

```js
function invertObject(obj) {
  let inverted = {};
  for (let key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
}
```

🔍 **Explanation:**
Loops over keys, swapping each key with its value.

---

### Q17 — Shallow Copy

```js
function shallowCopy(obj) {
  return { ...obj };
}
```

🔍 **Explanation:**
Uses the spread operator to copy the top-level properties of an object.

---

### Q18 — Merge with Priority

```js
function mergePriority(obj1, obj2) {
  return { ...obj2, ...obj1 };
}
```

🔍 **Explanation:**
By spreading `obj2` first, any duplicate keys from `obj1` overwrite them.

---

### Q19 — Property List

```js
function propertyList(obj) {
  return Object.keys(obj).map(function(key) {
    return key + ":" + obj[key];
  });
}
```

🔍 **Explanation:**
`Object.keys()` gives all keys, and `map()` creates `"key:value"` strings.

---

### Q20 — Deep Property Default

```js
function getValue(obj, path) {
  let parts = path.split(".");
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    if (current[parts[i]] === undefined) {
      return "Not Found";
    }
    current = current[parts[i]];
  }
  return current;
}
```

🔍 **Explanation:**
Splits the path like `"a.b.c"` and drills down into the object safely.

---

### Q21 — Reverse Words

```js
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
```

🔍 **Explanation:**
Splits into words, reverses their order, and joins them back together.

---

### Q22 — Count Vowels

```js
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) count++;
  }
  return count;
}
```

🔍 **Explanation:**
Checks each character; if it’s in the vowel string, increments the counter.

---

### Q23 — Remove Extra Spaces

```js
function cleanSpaces(str) {
  return str.trim().replace(/\s+/g, " ");
}
```

🔍 **Explanation:**
`trim()` removes outer spaces, `replace(/\s+/g, " ")` collapses multiple spaces into one.

---

### Q24 — Check Substring

```js
function isSubstring(str, sub) {
  return str.indexOf(sub) !== -1;
}
```

🔍 **Explanation:**
If `indexOf` returns `-1`, substring not found — otherwise it exists.

---

### Q25 — Initials from Name

```js
function getInitials(name) {
  return name.split(" ").map(function(word) {
    return word[0].toUpperCase();
  }).join(".");
}
```

🔍 **Explanation:**
Splits by space, takes first letter of each word, converts to uppercase, joins with dots.


