# The break and continue statements

- The break statement is used to exit a loop.
- The continue statement is used to skip the rest of the code in a loop.

## Syntax

```js
var i = 0;
for (; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

- The break statement here is used to exit the loop when i is equal to 5, so the code ony runs till i is equal to 5.

```js
var i = 0;
for (; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
```

- Here the continue statement is used to skip the rest of the code in the loop when i is equal to 5.
