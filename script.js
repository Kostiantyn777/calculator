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
const backspaceButton = document.querySelector(".backspace-button");

allNumbers.forEach((number) => {
  number.addEventListener("click", runOnNumbers);
});

allOperatorButtons.forEach((operatorItem) => {
  operatorItem.addEventListener("click", calculateWithOperatefunc);
});

getClearButton.addEventListener("click", refreshDisplay);

backspaceButton.addEventListener("click", () => {
  // to delete the last character from the string on the screen
  //getScreen.innerText = getScreen.innerText.slice(0, -1);
  console.log(`First Number:${typeof firstNumber}`);
});

function calculateWithOperatefunc(e) {
  if (e.target.innerText !== "=") {
    getScreen.innerText += e.target.innerText;

    if (!firstNumber && firstNumber !== 0) {
      firstNumber = 0;
      console.log(`First Number:${firstNumber}`);
    }

    previousOperator = operator;
    console.log(`PREVIOUS Operator:${previousOperator}`);

    if (previousOperator) {
      resultOfCalculation = operate(
        firstNumber,
        previousOperator,
        secondNumber
      );
      resultOfCalculation = parseFloat(resultOfCalculation.toFixed(3));
      //Display result of calculation
      getScreen.innerText = resultOfCalculation;

      getScreen.innerText += e.target.innerText;
      //Save result of calculation in firstNumber variable
      firstNumber = resultOfCalculation;

      //Reset secondNumber variable
      secondNumber = "";
    }

    operator = e.target.innerText;

    console.log(`Operator:${operator}`);
  } else if (secondNumber && operator) {
    resultOfCalculation = parseFloat(
      operate(firstNumber, operator, secondNumber).toFixed(3)
    );
    getScreen.innerText = resultOfCalculation;
    console.log(resultOfCalculation);
  }
}

function runOnNumbers(e) {
  // Regular expression to remove leading zeros, except for "0."
  const currentNumber = getScreen.innerText.replace(/^0+(?!\.)/, "");

  // Check if the button clicked is the "." button and if there is already a decimal point in the current number and an operator is present
  if (
    e.target.innerText === "." &&
    ((operator && secondNumber.includes(".")) ||
      (!operator && firstNumber.includes(".")))
  ) {
    return; // Do nothing if there is already a decimal point in the current number and an operator is present
  }

  getScreen.innerText = currentNumber + e.target.innerText;
  if (operator === "") {
    firstNumber += e.target.innerText;
    console.log(`First Number:${firstNumber}`);
  } else if (resultOfCalculation) {
    resultOfCalculation = parseFloat(resultOfCalculation.toFixed(3));
    firstNumber = resultOfCalculation;
    console.log(`First Number:${firstNumber}`);
    secondNumber += e.target.innerText;
    console.log(`Second Number:${secondNumber}`);
  } else {
    secondNumber += e.target.innerText;
    console.log(`Second Number:${secondNumber}`);
  }
}

function refreshDisplay() {
  getScreen.innerText = "0";
  firstNumber = "";
  operator = "";
  secondNumber = "";
  resultOfCalculation = "";
}
