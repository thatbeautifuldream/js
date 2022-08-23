# The for loop

- The for loop comes in a class of iterative statements.
- It is used to iterate over a block of code a specified number of times.

## Syntax

```js
for (initialization; condition; final - expression) {
  // code block
}
```

- Here, the initialization is the code that is executed before the loop starts.
- The condition is the code that is executed to check if the loop should continue.
- The final expression is the code that is executed after the loop finishes, usually used to update the control variable.

## Example

- Logging out the numbers from 1 to 10

```js
var i = 0;
for (i = 0; i < 10; i++) {
  console.log(i);
}
```

- Here the control variable is `i`, and the value of the variable is `0`, so the loop will start at `0` and it will check if the value of the variable is less than `10`, so it will execute the code block and print `0`, then it will update the value of the variable to `1` and it will check if the value of the variable is less than `10`, so it will execute the code block and print `1`, then it will update the value of the variable to `2` and it will check if the value of the variable is less than `10`, so it will execute the code block and print `2`, and so on.
