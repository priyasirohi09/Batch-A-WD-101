# CSS Flexbox Beginner Notes

## What is Flexbox?

- Flexbox (Flexible Box Layout) is a CSS layout model designed for **one-dimensional layouts** (rows or columns).
- It helps arrange, align, and distribute space among items inside a container.
- Flexbox simplifies designing responsive layouts without floats or positioning hacks.

***

## Flexbox Components

- **Flex Container**: The parent element with `display: flex;`
- **Flex Items**: The child elements inside the flex container

***

## Axes in Flexbox

- **Main axis**: Direction in which flex items are placed (default left to right).
- **Cross axis**: Perpendicular to the main axis (default top to bottom).
![alt text](image.png)
Flex direction controls the main axis:

- `flex-direction: row;` (default): main axis is horizontal
- `flex-direction: column;`: main axis is vertical



## Important Flexbox Properties for Alignment

### 1. justify-content (Aligns along the **main axis**)

Controls how flex items are aligned **horizontally** (if `flex-direction: row`) or vertically (if `column`) inside the flex container.

Values:

- `flex-start` (default): items align at the start
- `flex-end`: items align at the end
- `center`: items centered
- `space-between`: items evenly spread, first at start and last at end
- `space-around`: items evenly spread with equal space around
- `space-evenly`: equal space between items and edges

Example:

```css
.flex-container {
  display: flex;
  justify-content: center;
}
```


### 2. align-items (Aligns along the **cross axis**)

Controls how flex items are aligned **vertically** (if `flex-direction: row`) or horizontally (if `column`).

Values:

- `stretch` (default): items stretch to fill container cross-axis
- `flex-start`: items aligned at start of cross axis
- `flex-end`: items aligned at end of cross axis
- `center`: items centered
- `baseline`: items aligned by their text baseline

Example:

```css
.flex-container {
  display: flex;
  align-items: center;
}
```

***

## Simple Example of Flex Container with Alignment

```html
<div class="flex-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

```css
.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background-color: lightgray;
}
.flex-container > div {
  background-color: teal;
  color: white;
  padding: 10px;
  width: 80px;
  text-align: center;
}
```

***

## Summary of Flexbox Alignment

| Property         | Axis         | Purpose                                | Common Values                                   |
|------------------|--------------|---------------------------------------|------------------------------------------------|
| `justify-content`| Main axis    | Horizontal alignment in row, vertical in column | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `align-items`    | Cross axis   | Vertical alignment in row, horizontal in column | `stretch`, `center`, `flex-start`, `flex-end`, `baseline` |

***

## Additional Tips

- Use `flex-direction` to switch between row (horizontal) and column (vertical) layouts.
- `justify-content` spaces items along the line of layout.
- `align-items` affects the perpendicular direction.
- Combine these properties for flexible and responsive layouts.

***

## Resources for Learning

- [MDN Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [CSS-Tricks A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [W3Schools Flexbox Tutorial](https://www.w3schools.com/css/css3_flexbox.asp)
- [Flexbox Froggy](https://flexboxfroggy.com/)
