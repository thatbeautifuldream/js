# The do while loop

- The do while loop is a type of loop that executes a block of code at least once, and then checks the condition.
- It is used when we know how many times the loop will execute, it is an exit controlled loop.

## Syntax

```js
do {
  // code block
} while (condition);
```

## Example

- Logging out the numbers from 1 to 10

```js
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```
