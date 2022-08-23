# Logical or Boolean Operators

- The logical or boolean operators are used to combine conditions or expressions and return a single boolean value
- The logical operators are (AND, OR, NOT)

| Logical Operator | Description                                                       | Example |
| ---------------- | ----------------------------------------------------------------- | ------- |
| &&               | Logical AND (returns true if both operands are true)              | a && b  |
| \|\|             | Logical OR (returns true if either of the operand is true)        | a \| b  |
| !                | Logical NOT (returns true if the oparand is false and vice versa) | !a      |

- These operators are use to perform boolean operations on the operands, and return a single boolean value

## Quiz time!

```js
var a = true;
var b = false;
var c = true;
var o1 = (a && !b) || !c;
```

> Output: true
