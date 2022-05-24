# Array Properties

- Array has a bunch of usefull built in properties and methods.

## The length property

- An arrays length returns the number of its elements.

```js
var array = [1, 2, 3];
console.log(array.length); // 3
```

- The length property is read only.
- All indexes in an array are zero based.
- The length property is always 1 greater than the highest index.

## Quick Quiz

- Q. Array has a length property because it is an?

`a function` `an object` `a variable`

> Ans : `an object`

## Combining Arrays

- JavaScripts concat() methord allows you to combine two or more arrays and create an entirely new array.

```js
var c1 = [1, 2, 3];
var c2 = [4, 5, 6];
var c3 = c1.concat(c2); // [1, 2, 3, 4, 5, 6]
```

- concat does not affect the original arrays.
- concat returns a new array.

## Quick Quiz

- Q. concat() takes two or more arrays and ?

> Ans : `returns a new array` `does not affect the original arrays`
