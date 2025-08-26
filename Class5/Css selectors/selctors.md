
# CSS Selectors 

CSS selectors are patterns that let you **select HTML elements** you want to style with CSS rules.


## 1. Simple Selectors

### a) Type (Element) Selector
- Selects elements by their tag name.
- Example: Selects all paragraphs `<p>`

```css
p {
  color: blue;
}
```

### b) Class Selector
- Selects elements with a specific class attribute.
- Use a dot `.` followed by class name.
- Can select multiple elements.
  
Example: Selects all elements with `class="highlight"`

```css
.highlight {
  background-color: yellow;
}
```

### c) ID Selector
- Selects a single unique element by its `id`.
- Use a hash `#` followed by the id value.
- IDs must be unique in the HTML.

Example: Select element with `id="main"`

```css
#main {
  font-weight: bold;
}
```

### d) Universal Selector
- Selects **all elements** on the page.
  
```css
* {
  margin: 0;
  padding: 0;
}
```



## 2. Grouping Selector

- Lets you apply the same styles to multiple selectors by separating them with commas.

Example: Style all `<h1>`, `<h2>`, and `<p>` tags the same way.

```css
h1, h2, p {
  color: red;
}
```



## 3. Attribute Selector

- Select elements based on the presence or value of an attribute.

Examples:

- All elements with a `title` attribute

```css
[title] {
  border-bottom: 1px dotted gray;
}
```

- Elements with `href` starting with "https"

```css
a[href^="https"] {
  color: green;
}
```



## 4. Combinator Selectors

- Select elements based on their relationship in the HTML tree.

Examples:

- Descendant selector (any level inside)

```css
div p {
  color: blue; /* any <p> inside a <div> */
}
```

- Child selector (direct child only)

```css
ul > li {
  list-style-type: square;
}
```

- Adjacent sibling selector (immediately after)

```css
h1 + p {
  margin-top: 0;
}
```



## 5. Pseudo-class Selectors

- Select elements based on their state or position.

Examples:

- Hover state

```css
a:hover {
  color: red;
}
```

- First child

```css
p:first-child {
  font-weight: bold;
}
```



## 6. Pseudo-element Selectors

- Style parts of elements, like before or after content.

Example:

```css
p::before {
  content: "Note: ";
  font-weight: bold;
}
```



## Summary Table

| Selector Type       | Syntax Example     | What it Selects                                |
|---------------------|--------------------|-----------------------------------------------|
| Type (Element)       | `p`                | All `<p>` tags                                |
| Class               | `.className`       | All elements with class `className`           |
| ID                  | `#idName`          | Element with id `idName`                       |
| Universal           | `*`                | All elements                                  |
| Grouping            | `h1, p, .class`    | Multiple selectors                             |
| Attribute           | `[attr="value"]`   | Elements with matching attribute & value      |
| Descendant          | `div p`            | `<p>` inside any `<div>`                      |
| Child               | `ul > li`          | `<li>` directly inside `<ul>`                 |
| Adjacent sibling    | `h1 + p`           | `<p>` immediately after `<h1>`               |
| Pseudo-class        | `a:hover`          | Elements in a state (hover, first-child, etc.)|
| Pseudo-element      | `p::before`        | Parts of element (before content, after, etc.)|


## Additional Resources and Practice

- [W3Schools - CSS Selectors](https://www.w3schools.com/css/css_selectors.asp)
- [MDN - Basic CSS selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
- [CSS-Tricks - CSS Selectors Cheatsheet](https://css-tricks.com/almanac/selectors/)
- [CSS Diner](https://flukeout.github.io/): A game for learning CSS selectors interactively.


