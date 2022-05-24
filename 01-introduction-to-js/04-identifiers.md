An identifier is a name that is given to entities like variables, functions, class, etc.

1. Identifier names must start with either a **letter**, an underscore **\_**, or the dollar sign **$**. For example,

```js
//valid
const a = "hello";
const _a = "hello";
const $a = "hello";
```

2. Identifier names cannot start with numbers. For example,

```js
//invalid
const 1a = 'hello'; // this gives an error
```

3. JavaScript is **case-sensitive**. So y and Y are different identifiers. For example,

```js
const y = "hi";
const Y = 5;
console.log(y); // hi
console.log(Y); // 5
```

4. Keywords cannot be used as identifier names. For example,

```js
//invalid
const new = 5; // Error! new is a keyword.
```

> Note: Though you can name identifiers in any way you want, it's a good practice to give a descriptive identifier name.
> If you are using an identifier for a variable to store the number of students, it is better to use **students** or **numberOfStudents** rather than x or n.
