// On initialise des variables dans lesquelles on va stocker les chiffres

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

// On crée les fonctions avec les operateurs

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Fonction qui permet d'utiliser les opérations

function operate(a, b, operator) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return substract(a, b);
      break;
    case "*":
      return divide(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      return null;
  }
}

// On vient récupérer les différents boutons

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear-button");
const equalButton = document.querySelector("#equal-button");
const dotButton = document.querySelector("#dot-button");
const screen = document.querySelector("#screen");
const lastOperationScreen = document.querySelector("#lastOperationScreen");

// On fait les events listeners pour les boutons

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});

clearButton.addEventListener("click", clear);
equalButton.addEventListener("click", evaluate);
dotButton.addEventListener("click", appendDot);

// Fonctions helper

function appendNumber(number) {
  if (screen.textContent === "0" || shouldResetScreen) resetScreen();
  screen.textContent += number;
}

function appendDot() {
  if (shouldResetScreen) resetScreen();
  if (screen.textContent.includes(".")) return;
  screen.textContent += ".";
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = screen.textContent;
  currentOperation = operator;
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  secondOperand = screen.textContent;
  screen.textContent = operate(firstOperand, secondOperand, currentOperation);
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function clear() {
  screen.textContent = "";
  lastOperationScreen.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function resetScreen() {
  screen.textContent = "";
  shouldResetScreen = false;
}
