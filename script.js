let firstNumber = "";
let previousOperator = "";
let operator = "";
let secondNumber = "";
let resultOfCalculation = 0;

function add(number1, number2) {
  return parseFloat(number1) + parseFloat(number2);
}

function subtract(number1, number2) {
  return parseFloat(number1) - parseFloat(number2);
}

function multiply(number1, number2) {
  return parseFloat(number1) * parseFloat(number2);
}
function divide(number1, number2) {
  if (number2 === "0") {
    alert(`You can not divide by 0`);
  }
  return parseFloat(number1) / parseFloat(number2);
}

function operate(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  }
}

const getScreen = document.querySelector(".screen");
getScreen.innerText = "0";

const allNumbers = document.querySelectorAll(".number-button");

const allOperatorButtons = document.querySelectorAll(".operator-button");

const dotButton = document.querySelector(".dot-button");

const getClearButton = document.querySelector(".clear-button");

allNumbers.forEach((number) => {
  number.addEventListener("click", runOnNumbers);
});

allOperatorButtons.forEach((operatorItem) => {
  operatorItem.addEventListener("click", calculateWithOperatefunc);
});

getClearButton.addEventListener("click", refreshDisplay);

function calculateWithOperatefunc(e) {
  if (e.target.innerText !== "=") {
    getScreen.innerText += e.target.innerText;

    if (!firstNumber && firstNumber !== 0) {
      firstNumber = 0;
    }
    previousOperator = operator;

    if (previousOperator) {
      resultOfCalculation = operate(
        firstNumber,
        previousOperator,
        secondNumber
      );
      resultOfCalculation = parseFloat(resultOfCalculation.toFixed(3));

      getScreen.innerText = resultOfCalculation;

      getScreen.innerText += e.target.innerText;

      firstNumber = resultOfCalculation;

      secondNumber = "";
    }

    operator = e.target.innerText;
  } else if (secondNumber && operator) {
    resultOfCalculation = parseFloat(
      operate(firstNumber, operator, secondNumber).toFixed(3)
    );
    getScreen.innerText = resultOfCalculation;
  }
}

function runOnNumbers(e) {
  const currentNumber = getScreen.innerText.replace(/^0+(?!\.)/, "");
  if (
    e.target.innerText === "." &&
    ((operator && secondNumber.includes(".")) ||
      (!operator && firstNumber.includes(".")))
  ) {
    return;
  }
  getScreen.innerText = currentNumber + e.target.innerText;

  if (operator === "") {
    firstNumber += e.target.innerText;
  } else if (resultOfCalculation) {
    resultOfCalculation = parseFloat(resultOfCalculation.toFixed(3));
    firstNumber = resultOfCalculation;

    secondNumber += e.target.innerText;
  } else {
    secondNumber += e.target.innerText;
  }
}

function refreshDisplay() {
  getScreen.innerText = "0";
  firstNumber = "";
  operator = "";
  secondNumber = "";
  resultOfCalculation = "";
}
