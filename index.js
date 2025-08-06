var rs = require("readline-sync");
const operators={
  '+':(fN, sN) => fN+sN,
 '-':(fN, sN) => fN-sN,
 '*':(fN, sN) => fN*sN,
 '/':(fN, sN) => fN/sN,
 '%':(fN, sN) => fN%sN
};

// Setting variables to invalid
let operator = "@";
let firstNum = NaN;
let secondNum = NaN;
let firstPrompt = "";
let secondPrompt = "";



while (!operators.hasOwnProperty(operator))
  {
  operator = rs.question("What operation would you like to perform? ");

  if (!operators.hasOwnProperty(operator))
   {
    console.log("That is not a valid operation");
  }

  }

let whatOp=operators[operator];

let k=typeof firstNum;
let l=typeof secondNum;

  

while ((k != "number" && firstPrompt.trim().length==0) || Number.isNaN(firstNum)) {
  firstPrompt = rs.question("Please enter the first number: ");
  firstNum = Number(firstPrompt); 
  
  k=typeof firstNum;

  if (k != "number" || firstPrompt.trim().length==0 ||Number.isNaN(firstNum)) {
    console.log("This is not a number");
    k="";
    firstPrompt="";
    firstNum=NaN;
  }
}



while ((l != "number" && secondPrompt.trim().length==0) || Number.isNaN(secondNum)) {
  secondPrompt = rs.question("Please enter second number: ");
  secondNum = Number(secondPrompt);
  l=typeof secondNum

  if (l != "number" || secondPrompt.trim().length==0 ||Number.isNaN(secondNum)) {
    console.log("This is not a number");
  }
}

console.log("The result is " + whatOp(firstNum, secondNum));
