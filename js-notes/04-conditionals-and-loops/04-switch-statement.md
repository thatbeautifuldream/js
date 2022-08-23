# The switch statement

- The switch statement is a more powerful way to write a conditional statement, it takes a value and then checks if it matches with a case provided.
- The switch statement is a bit like a switch in other languages.
- The switch statement syntax is:

```js
switch (value) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
  // code block
}
```

- The default case is optional, but it is recommended to use it.
- It helps to give a case to the user when none of the cases get matched.

## Example

```js
var day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Today is not a day of the week");
}
```

- Here the control variable is `day`, and the value of the variable is `"Tuesday"`, so the switch statement will check if the value of the variable matches with any of the cases and it matches with the case `"Tuesday"`, so it will execute the code block and print `"Today is Tuesday"`.
