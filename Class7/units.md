
# CSS Units 

## Introduction

CSS units determine how big or small elements and text appear on the webpage. Choosing the right unit type helps create flexible, responsive, and accessible web designs.

***

## Types of CSS Units

### 1. Absolute Units (Fixed)

- **Pixels (px)**
  - Smallest dots on screen.
  - Pixel values give exact sizes.
  - Do **not scale** with screen size or user settings.
  - Best used for fixed-size UI elements like borders or icons.

  ```css
  .box {
    width: 200px;
    height: 150px;
  }
  ```

- **Other absolute units** include `cm`, `mm`, `in` (rarely used for screen design).

***

### 2. Relative Units (Flexible)

- Scale relative to other values, making layouts more adaptable.

#### Percentages (%)
- Relative to the size of the **parent element**.
- Width and height percentages are based on the parent's dimensions.
- Padding and margin percentages are based on **parent's width** even vertically.

```css
.sidebar {
  width: 25%;
}
```

#### REM (Root em)
- 1rem equals the font size of the root `<html>` element.
- Can scale entire layouts by adjusting root font size.
- Ideal for fonts, margins, paddings, and spacing to remain consistent across the site.

```css
html {
  font-size: 16px;
}
p {
  margin: 1rem; /* equals 16px */
  font-size: 1.5rem; /* equals 24px */
}
```

#### EM
- Relative to the font size of the **current element**.
- Can cause cascading effects, so use with caution.

***

### 3. Viewport Units

Based on the visible portion of the browser window (viewport).

- `vw` = 1% of viewport **width**  
- `vh` = 1% of viewport **height**  
- `vmax` = bigger of `vw` or `vh`  
- `vmin` = smaller of `vw` or `vh`

Good for responsive designs tied directly to screen size.

```css
.element {
  width: 50vw;  /* 50% of viewport width */
  height: 30vh; /* 30% of viewport height */
}
```

***

## Important Tips

- `%` is based on **parent container**, so nested containers must be managed carefully.
- REM units enhance accessibility as users’ browser font settings affect the root size.
- Viewport units can cause issues on mobile browsers due to dynamic UI chrome (address bars). Newer units like `svh`, `lvh`, and `dvh` are introduced to mitigate this.
- Be mindful combining different units to maintain both flexibility and design accuracy.

***

## Summary Table

| Unit Type      | Unit       | Relative To        | Best For                         |
|----------------|------------|--------------------|---------------------------------|
| Absolute       | px         | Fixed pixels       | Icons, borders, fixed UI elements|
| Relative       | %          | Parent container   | Fluid widths, flexible layouts  |
| Relative       | rem        | Root font size     | Typography, spacing             |
| Relative       | em         | Current element font size | Typography with cascading control |
| Viewport       | vw, vh     | Viewport size      | Full screen sections, responsive typography |

***

## Resources

- [MDN CSS Values and Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [W3Schools CSS Units](https://www.w3schools.com/cssref/css_units.asp)
- [CSS-Tricks Guide to CSS Units](https://css-tricks.com/the-lengths-of-css/)

