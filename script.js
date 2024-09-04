let firstOperand = "";
let secondOperand = "";
let currentOperation = null;

//Get the differents components

const screen = document.querySelector("#screen");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear-button");
const equalButton = document.querySelector("#equal-button");
const dotButton = document.querySelector("#dot-button");

// Event listeners for the buttons

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});

clearButton.addEventListener("click", clear);

equalButton.addEventListener("click", evaluate);

dotButton.addEventListener("click", appendDot);

// Calculator functions

const add = (num1, num2) => {
  return num1 + num2;
};

const substract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

// Get the result function

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return substract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    default:
      return null;
  }
}

//Reset the screen content (HELPER FUNCTION)

function resetScreen() {
  screen.textContent = "";
}

// Clear the screen (HELPER FUNCTION)

function clear() {
  screen.textContent = "";
}

//Add the number to the screen

function appendNumber(number) {
  screen.textContent += number;
}

// Append dot function

function appendDot() {
  screen.textContent += ".";
}

// Store the firstOperand variant and the operator variant

function setOperation(operator) {
  firstOperand = parseFloat(screen.textContent);
  currentOperation = operator;
  screen.textContent = operator;
  console.log(typeof firstOperand);
}

// Store the second operand, get the result and show it on screen

function evaluate() {
  secondOperand = parseFloat(screen.textContent);
  screen.textContent = operate(firstOperand, secondOperand, currentOperation);
}
