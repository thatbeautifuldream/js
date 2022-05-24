# Assignment Operators

- We use assignment operators to assign values to variables in JavaScript.
- There are many assignment operators in JavaScript, which are:

| Operator | Example     | Is equivalent to |
| -------- | ----------- | ---------------- |
| =        | a = 10;     | a = 10;          |
| +=       | a += 10;    | a = a + 10;      |
| -=       | a -= 10;    | a = a - 10;      |
| \*=      | a \*= 10;   | a = a \* 10;     |
| /=       | a /= 10;    | a = a / 10;      |
| %=       | a %= 10;    | a = a % 10;      |
| \*\*=    | a \*\*= 10; | a = a \*\* 10;   |

> Note : you can use multiple assignment operators in a single statement `a += b -= c %= 10;`

## Quiz time!

- What is the value of answer after executing the following code?

```js
var number = 2;
number *= 5;
document.write(number);
```

> Answer : `number *= 5 = 2 * 5 = 10`
