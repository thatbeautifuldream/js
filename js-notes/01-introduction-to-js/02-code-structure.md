The syntax of JavaScript is the set of rules that define a correctly structured JavaScript program. Let's study some of the building blocks of JavaScript code:

### Comments

1. The comments are a meaningful way to deliver the message (description to code) for others/for future reference and to understand/follow the code statements/lines
2. Comments are special lines written for other developers as a reference purpose and browser ignores while interpreting

There are 2 types of comments -

1. Singleline comment - starts with `//`
2. Multiline comment - starts with `/**` and ends with `**/`

```js
// This is a single line comment.
// This is another single line comment.

/**
  This is a multiline comment
  Everything enclosed inside this will be a comment.
**/
```

### Statement

1. One line of JavaScript Code is one JavaScript Statement / Instruction / Command
2. A Statement is a piece of code that expresses an action to take place
3. Statements are separated by `Semicolon;` so we may write many statements in a line

```js
/**
  These are just comments
  This code contains 2 statements.
  The first statement assings "Javascript" value to a variable named courseName
  The second statement logs the courseName in the console.
**/
let courseName = "Javascript";
console.log(courseName);
```

### JS Code blocks

1. JavaScript commands/statements/code can be grouped together in code blocks, inside curly brackets `{...}`
2. Grouped statements/lines form code blocks
3. The purpose of code blocks is to define statements to be executed together like a single JavaScript command
4. An often occurrence of a code block in JavaScript is a JavaScript `function`

```js
/**
  Below is a code block wrapped inside a function named - sayHello
  When you call a function, it executes all the statements in that block
**/
function sayHello() {
  alert("Hello All! Welcome to JavaScript!!");
}

/**
  Below is an other example of a function named - showTotal
**/
function showTotal() {
  var num1 = 10;
  var num2 = 20;
  var total = num1 + num2;
  alert("Total is : " + total);
}

/**
calling above defined functions, to execute all the statements in a block at once.
**/
sayHello();
showTotal();
```
