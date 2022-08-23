# The else statement

- When the condition is false for the existing if clause, the else block gets executed

```js
if (condition) {
  // code to execute
} else {
  // code to execute if condition is false
}
```

## Example

```js
var age = 12;
if (age > 18) {
  console.log("You are an adult");
} else {
  // Condition is false so the else block gets executed
  console.log("You are not an adult");
}
```
