# Basic HTML Tags

- `<!DOCTYPE html>` – Declares the document type and version.
- `<html>` – Root element for the entire HTML page.
- `<head>` – Contains metadata, links, and title.
- `<title>` – Sets the browser tab title.
- `<body>` – Holds the visible content (text, images, links, etc.).
- `<h1>` to `<h6>` – Heading tags for important titles (h1 most important, h6 least).[3][9]
- `<p>` – Paragraph of text.
- `<br>` – Line break (inserts blank line).
- `<hr>` – Horizontal line (divider).
- `<a href="">` – Link to another page or resource.
- `<img src="" alt="">` – Displays images.



# HTML Lists

## Unordered List

- Uses bullets.
- Tags: `<ul>` (list), `<li>` (item)

```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
```


## Ordered List

- Uses numbers.
- Tags: `<ol>` (list), `<li>` (item)

```html
<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
</ol>
```


## Description List

- To define terms and descriptions.
- Tags: `<dl>`, `<dt>`, `<dd>`

```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```




# HTML Tables

- Used for arranging data in rows and columns.

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>25</td>
  </tr>
</table>
```
- `<table>` – The table itself
- `<tr>` – Table row
- `<th>` – Table header (bold, centered)
- `<td>` – Table data (cell)




# HTML Forms

- Used to collect user input (text, choices, etc.).

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>
```
- `<form>` – Container for form elements
- `<input>` – Single-line input (type can be text, email, password, etc.)
- `<label>` – Text label for input field
- `<button>` – Button for submitting or resetting form
- `<select>` `<option>` – Drop-down menu with choices




# Semantic HTML Tags

Semantic tags make web pages more meaningful for browsers and search engines.

- `<header>` – Top section, usually with logo/title/nav.
- `<nav>` – Navigation links.
- `<main>` – Main content of the document.
- `<section>` – Parts/sections of content.
- `<article>` – Self-contained content block (blog post, etc.).
- `<aside>` – Sidebar or related info.
- `<footer>` – Bottom of page (copyright, contact info).




# Quick Reference Table

| Tag         | Purpose                            | Example                |
|-------------|------------------------------------|------------------------|
| `<p>`       | Paragraph                          | `<p>This is text.</p>` |
| `<ul>`      | Unordered list                     | `<ul><li>Item</li></ul>` |
| `<ol>`      | Ordered list                       | `<ol><li>Item</li></ol>` |
| `<table>`   | Table structure                    | `<table>...</table>`   |
| `<form>`    | User input form                    | `<form>...</form>`     |
| `<header>`  | Page/header block                  | `<header>...</header>` |
| `<main>`    | Main page content                  | `<main>...</main>`     |
| `<footer>`  | Footer section                     | `<footer>...</footer>` |



# Resources for Practice

- [W3Schools - HTML Basic](https://www.w3schools.com/html/html_basic.asp)
- [MDN - HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [GeeksforGeeks - HTML Tags A to Z List](https://www.geeksforgeeks.org/html/html-tags-a-to-z-list/)


## Extra Resources
1. **Online Resources:**
   - **HowStuffWorks - How the Internet Infrastructure Works:**
     - [HowStuffWorks - Internet Infrastructure](https://computer.howstuffworks.com/internet-infrastructure.htm)

2. **YouTube Videos:**
 - **"The Internet: Wires, Cables & WiFi" by ColdFusion:**
     - [The Internet: Wires, Cables & WiFi](https://www.youtube.com/watch?v=ZhEf7e4kopM)

3. **Documentation and Standards:**
   - **W3C (World Wide Web Consortium):**
     - [W3C Website](https://www.w3.org/)


