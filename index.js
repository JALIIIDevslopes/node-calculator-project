var rs = require("readline-sync");

let operator = "@";
let firstNum = "w";
let secondNum = "w";
let firstPrompt = "w";
let secondPrompt = "w";

function doMath(op, fN, sN) {
  let result = 0;
  switch (op) {
    case "/":
      result = fN / sN;
      break;
    case "+":
      result = fN + sN;
      break;
    case "-":
      result = fN - sN;
      break;
    case "*":
      result = fN * sN;
      break;
    default:
      result = " a broken calculator";
  }

  return result;
}

while (
  operator != "/" &&
  operator != "*" &&
  operator != "+" &&
  operator != "-"
) {
  operator = rs.question("What operation would you like to perform? ");

  if (
    operator != "/" &&
    operator != "*" &&
    operator != "+" &&
    operator != "-"
  ) {
    console.log("That is not a valid operation");
  }
}

while (!Number.isInteger(firstNum)) {
  firstPrompt = rs.question("Please enter the first number: ");
  firstNum = firstPrompt * 1;
  if (!Number.isInteger(firstNum)) {
    console.log("This is not a number");
  }
}

while (!Number.isInteger(secondNum)) {
  secondPrompt = rs.question("Please enter second number: ");
  secondNum = secondPrompt * 1;

  if (!Number.isInteger(secondNum)) {
    console.log("This is not a number");
  }
}

console.log("The result is " + doMath(operator, firstNum, secondNum));
