# Understanding function parameters

- To complete the statement, A function is a block of code that performs a specific task, `when called`.
- In order to call a function, we use the function name followed by parentheses `()`.
- The parameters of a function are the values that are passed to the function when it is called.
- The parameters are separated by commas `,`.
- The parameters are optional, and function can be called without any parameters.

## Example

```js
function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("John");
```

- The function `sayHello` is defined with the `function` keyword, followed by the name of the function.
- The function has one parameter, `name`, which is a string.
- The function logs out a hello message, followed by the name of the person.
- The function is called with the `sayHello` function name followed by parentheses `()`, followed by the name of the person we want to say hello to.
- The message is logged out to the console.

## Parameters

- There can be multiple parameters in a function.

```js
function sayHello(name, age) {
  console.log("Hello " + name + " you are " + age + " years old.");
}
sayHello("John", 30);
```
