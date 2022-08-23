# The alert, prompt and confirm functions

- The alert function displays a message to the user and waits for the user to press OK.
- The prompt function displays a message to the user and waits for the user to enter a value.
- The confirm function displays a message to the user and waits for the user to press OK or Cancel.

## Alert

```js
alert("Hello World!");
```

## Prompt

```js
var name = prompt("What is your name?");
alert("Hello " + name);
```

## Confirm

```js
var answer = confirm("Do you like JavaScript?");
if (answer) {
  alert("You said yes!");
} else {
  alert("You said no!");
}
```
