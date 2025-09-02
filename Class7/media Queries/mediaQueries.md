# Media Queries 

## What Are Media Queries?

- CSS rules applied conditionally based on device features or viewport properties.
- Essential for crafting responsive designs that adapt smoothly to many screen types.

***

## Common Media Query Types and Examples

### 1. Width and Height Queries

Control when styles apply based on viewport width or height.

- **max-width:** Apply styles if viewport width is less or equal to value.

```css
@media (max-width: 480px) {
  /* styles for small phones */
}
```

- **min-width:** Apply styles if viewport width is greater or equal to value.

```css
@media (min-width: 1024px) {
  /* styles for desktops and large screens */
}
```

- You can combine both for targeting ranges:

```css
@media (min-width: 481px) and (max-width: 1023px) {
  /* styles for tablets */
}
```

- Similarly for viewport height:

```css
@media (max-height: 600px) {
  /* styles for short windows or landscape phones */
}
```

***

### 2. Orientation Queries

Target whether the device is in portrait or landscape orientation.

```css
@media (orientation: portrait) {
  /* styles for portrait mode */
}

@media (orientation: landscape) {
  /* styles for landscape mode */
}
```

Useful for adjusting layouts or images for mobile phones/tablets when turned sideways.

***

### 3. Resolution Queries

Detect screen density and high-resolution displays.

```css
@media (min-resolution: 192dpi), (min-resolution: 2dppx) {
  /* styles for Retina and high-density screens */
}
```

Higher resolution images or sharper fonts can be loaded or styled here.

***

### 4. Aspect Ratio

Target devices with specific width-to-height ratios.

```css
@media (aspect-ratio: 16/9) {
  /* widescreen layouts */
}
```

***

### 5. Pointer and Hover Capabilities

Detect if user device has fine pointer (mouse) or supports hover.

```css
@media (hover: hover) {
  /* styles for devices that support hover */
}

@media (pointer: coarse) {
  /* styles for touch devices */
}
```

***

### 6. Light and Color Scheme

Adapt to user preferences such as dark mode or reduced motion.

```css
@media (prefers-color-scheme: dark) {
  /* dark theme styles */
}

@media (prefers-reduced-motion: reduce) {
  /* simplified animations */
}
```

***

### Combining Multiple Features

- Combine queries with logical operators `and`, `or (comma)`, and `not`.

```css
@media (min-width: 600px) and (orientation: landscape) {
  /* layout for large landscape screens */
}
```

***

## Mobile-First Strategy with Media Queries

- Write base styles for small screens (mobile).
- Add media queries for larger devices using `min-width`.

Example:

```css
/* Base styles (mobile) */
.container {
  padding: 10px;
}

/* Tablets and up */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Desktops and up */
@media (min-width: 1024px) {
  .container {
    padding: 30px;
  }
}
```

***

## Summary of Media Query Features

| Feature            | Description                           | Example                            |
|--------------------|-------------------------------------|----------------------------------|
| max-width          | Style below or equal to width       | `(max-width: 600px)`              |
| min-width          | Style above or equal to width       | `(min-width: 1024px)`             |
| orientation        | Portrait or landscape                | `(orientation: portrait)`         |
| resolution         | Screen pixel density                 | `(min-resolution: 192dpi)`        |
| aspect-ratio       | Width to height ratio                | `(aspect-ratio: 16/9)`            |
| hover              | Pointer hover capability             | `(hover: hover)`                  |
| pointer            | Pointer accuracy (fine or coarse)   | `(pointer: coarse)`               |
| prefers-color-scheme | Light or dark mode preference       | `(prefers-color-scheme: dark)`   |
| prefers-reduced-motion | Motion animation preferences       | `(prefers-reduced-motion: reduce)`|

***

## Useful Links to Explore More

- [freeCodeCamp: Media Queries](https://www.freecodecamp.org/news/media-queries-css/)
- [MDN: Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [CSS-Tricks: Complete Guide to Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

