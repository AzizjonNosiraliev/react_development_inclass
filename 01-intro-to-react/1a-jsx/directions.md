# React and JSX

## What is React?

React JS is a library to build active User Interfaces. React provides the developers with a package `react-dom` to access and modify the DOM. Let's see in brief the need for this package.

## What is the DOM and React's Virtual DOM?

DOM, abbreviated as Document Object Model, is the logical representation of a webpage. In easier words, DOM is a tree-like structure that contains all the elements and properties of a website as nodes in the tree. DOM provides a language-neutral interface that allows accessing and updating of the content of any element of a webpage.

For example, consider the following HTML code:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <div>
      <h1>This is a Heading</h1>
      <p>This is a paragraph.</p>
    </div>
  </body>
</html>
```

The above code will be represented in the DOM as:

```
- HTML
  - HEAD
    - TITLE
      - "Page Title"
  - BODY
    - DIV
        - H1
            - "This is a Heading"
        - P
            - "This is a paragraph."
```

The DOM is commonly represented in JavaScript as a tree of objects. Each object represents a node in the tree, and the properties of the object represent the properties of the node. For example, the DOM node representing the `<h1>` element in the example above might look like this in JavaScript:

```javascript
{
  tagName: 'H1',
  children: ['This is a Heading']
}
```

And the DOM node representing the `<div>` element might look like this:

```javascript
{
  tagName: 'DIV',
  children: [
    {
      tagName: 'H1',
      children: ['This is a Heading']
    },
    {
      tagName: 'P',
      children: ['This is a paragraph.']
    }
  ]
}
```

When you update the DOM, the browser has to re-render the entire page. This can be slow and inefficient, especially for complex web applications with a lot of elements.

React uses a virtual DOM to improve performance. The virtual DOM is a lightweight copy of the actual DOM. React uses the virtual DOM to keep track of the changes that need to be made to the actual DOM. When a change is made to the virtual DOM, React compares the virtual DOM to the actual DOM and only updates the parts of the actual DOM that have changed. This makes React faster and more efficient than updating the entire DOM every time a change is made.

## JSX

React uses a syntax extension of JavaScript called JSX (which stands for JavaScript Extensible Markup Language) that allows us to write HTML content directly into our JavaScript code. This may seem strange at first but, it is great because it makes it easy to blend JavaScript logic with HTML; something that we do a lot in React. As you will see, JSX looks very similar to the HTML, but there are a few key differences that we will look at.

### Creating a simple JSX element

In this example we are storing JSX element directly inside an JavaScript constant.

```jsx
const heading = <h1>Bob's Used Cars</h1>;
```

_Note: You can store JSX in `var` or `let` variables as well, but in React often we use constants for performance reasons as they often do not change their value._

We can also add JavaScript inside of JSX elements by including the JavaScript inside of `{` `}` curly braces.

### JavaScript code inside JSX elements

```jsx
let name = "Bob";
const heading = <h1>{name}'s Used Cars</h1>;
```

This heading would show up in the browser as "Bob's Used Cars".

### Comments inside JSX elements

Comments can also be added inside JSX elements.

```jsx
const heading = (
  <h1>
    Bob's Used Cars
    {/* This is a multi line JavaScript comment */}
  </h1>
);
```

### Self closing elements

JSX allows us to use self closing HTML elements such as `<img>`, `<br>`, `<hr>` to name a few. However when using these elements in JSX we must remember to always add a closing `/` slash in order to avoid syntax errors. So these would need to written as `<img />`, `<br />`, `<hr />` in JSX.

```jsx
const logo = <img src="..." alt="..." />;
```

### Nesting JSX elements

We can nest elements inside of others the same as you do in HTML.

```jsx
const header = (
  <header>
    <h1>Bob's Used Cars</h1>
    <p>Nobody beats our prices!</p>
  </header>
);
```

Furthermore we can nest other existing JSX elements by referring to them by name wrapped in `{` `}` curly braces.

```jsx
const heading = <h1>Bob's Used Cars</h1>;

const subheading = <p>Nobody beats our prices!</p>;

const header = (
  <header>
    {heading}
    {subheading}
  </header>
);
```

### Applying CSS class styles to JSX elements

In JavaScript the `class` keyword is reserved by the language, so if you want to refer to a CSS class within a JSX element, then you must use the attribute `className` instead.

```jsx
const intro = (
  <p className="introduction">
    Bob's used cars will provide you with the best price for the newest models
    guaranteed.
  </p>
);
```

### Applying CSS inline styles to JSX elements

The `style` attribute allows us to add CSS inline styles directly to our JSX elements.

```jsx
const intro = (
  <p style={{ fontSize: "2em", color: "red" }}>
    Bob's used cars will provide you with the best price for the newest models
    guaranteed.
  </p>
);
```

The `style` attribute accepts an object. the object is filled with key value pairs where the key is a CSS property name and the value is the value to set for that CSS property. CSS properties with `-` hyphens in their name such as `font-size` are converted to camel case, as in `fontSize`. Number values can be provided as numbers, but units that must include suffixes such as `px` or `em` must be written as strings... `'fontSize: '1em'` as an example.

We can also pass the style an object stored in another variable or constant.

```jsx
const introStyle = {
  fontSize: "2em",
  color: "red",
};

const intro = (
  <p style={introStyle}>
    Bob's used cars will provide you with the best price for the newest models
    guaranteed.
  </p>
);
```
