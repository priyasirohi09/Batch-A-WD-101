# 🌐 Basic CSS Properties

## 🎨 Background in CSS

- **Property Recap:**
  - `color` → changes **text color**
  - `background-color` → changes the **background color** behind text

### Example: Background Color
```css
h1 {
    background-color: blue;
}
```
> All `<h1>` elements inside the selected container get a blue background.

### Background Images
```css
h1 {
    background-image: url("image.jpg");
}
```
> Use a valid image URL. Images may tile/repeat by default.

### Background Size
```css
h1 {
    background-image: url("image.jpg");
    background-size: 400px;
}
```
> Controls how large the image appears.  
Use keywords:
- `cover` – stretches the image to cover the whole area.
- `contain` – scales image to fit entirely.

### Background Repeat
Prevent image tiling:
```css
h1 {
    background-repeat: no-repeat;
}
```
More options: `repeat-x`, `repeat-y`.

### Position
Control image position:
```css
h1 {
    background-position: center top;
}
```

### Extra Resources
- [MDN: background property](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
- [CSS Tricks: Complete Guide to Backgrounds](https://css-tricks.com/almanac/properties/b/background/)

***

## ✍️ Fonts in CSS

Fonts let you style text appearance, choose typefaces, and adjust size and weight.

### Font Family
- Defines typeface (e.g., Arial, Georgia, sans-serif).
- Use multiple to ensure fallback if a font isn’t available.

```css
.heading_1 {
    font-family: Arial, Helvetica, sans-serif;
}
```
> Use generic families like `serif`, `sans-serif`, `monospace` for broad compatibility.

### Font Weight
Controls boldness. Common values:
- `normal`, `bold`
- Numeric: 100 (thin) → 900 (extra-bold)

```css
.heading_1 {
    font-weight: 700;
}
```
> Not all fonts support every weight.

### Font Size
Sets text size.  
Units: px, em, rem, %, keywords (`small`, `large`, etc.)

```css
.heading_1 {
    font-size: 2em;
}
```

### Font Style
Italic or normal:
```css
.heading_1 {
    font-style: italic;
}
```

### Google Fonts (Custom Web Fonts)
- Visit [Google Fonts](https://fonts.google.com/)
- Select fonts and add the generated `<link>` in your HTML `<head>`
- Use the provided `font-family` in your CSS.

Example:
```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>
```
```css
.heading_1 {
    font-family: 'Roboto', sans-serif;
}
```
> Web fonts let you use custom styles, but can affect site performance. Use sparingly for fast-loading sites.

### Extra Resources
- [MDN: font property](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
- [Google Fonts Getting Started](https://fonts.google.com/)
- [CSS Tricks: Using @font-face](https://css-tricks.com/snippets/css/using-font-face-in-css/)

***

## 📝 Text in CSS

CSS text properties let you control alignment, decoration, spacing, and more.

**Font ≠ Text:**  
- Fonts: typeface and styling  
- Text: alignment, spacing, decoration  

### Text Alignment
Aligns text horizontally.
```css
.heading_1 {
    text-align: left;     /* other options: right, center, justify */
}
```
> Use `center` for headlines, `justify` for paragraphs.

### Text Decoration
Adds decoration:
- `underline`
- `line-through`
- `overline`
- `none` (removes all decoration)

```css
.heading_1 {
    text-decoration: underline;
}
```

### Word Spacing
Space between words.
```css
.heading_1 {
    word-spacing: 1.2em;
}
```
Also try negative values for compact text.

### Letter Spacing
Space between letters:
```css
.heading_1 {
    letter-spacing: 0.1em;
}
```

### Line Height
Space between lines of text:
```css
.heading_1 {
    line-height: 2;
}
```
> Use values without units for relative spacing.

### Text Transform
Change case of text:
```css
.heading_1 {
    text-transform: uppercase;
}
```
Options: `lowercase`, `capitalize`

### Extra Resources
- [MDN: text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
- [MDN: text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
- [CSS Tricks: Text Properties](https://css-tricks.com/almanac/properties/t/text/)

***

## Quick Practice Tips

- Use [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/) to experiment with CSS live.
- Try changing background, font, and text styles on a simple HTML page to see the impact.

