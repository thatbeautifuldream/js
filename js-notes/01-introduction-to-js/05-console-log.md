All modern browsers have a web console for debugging. The `console.log()` method is used to write messages to these consoles. For example, the following code will write a message to the console:

```js
// assigning 44 to a variable named sum
let sum = 44;
// logging the value of sum in console
console.log(sum); // 44
```

When you run the above code, 44 is printed on the console.

### Syntax

```js
console.log(message);
```

Here, the message(can be a string indicating message wrapped inside "" , '' or ``) refers to either a variable or a value(number, string, etc.).

### Example

Using the "", '', ``:

```js
console.log("Hello World");
console.log("Hello World");
console.log(`Hello World`);
```

In order to insert a variable into a string, you can use the `${}` syntax called template literals. For example:

Syntax : `` console.log(`example-string ${variable-name}`); ``

```js
let name = "John";
console.log(`Hello ${name}`);
```

Simmilarly, you can use the `${}` syntax to insert a value into a string:

```js
let value = 44;
console.log(`The value is ${value}`);
```
