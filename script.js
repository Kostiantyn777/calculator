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
const deleteButton = document.querySelector(".delete-button");

allNumbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    getScreen.innerText += e.target.innerText;
    if (operator === "") {
      firstNumber += e.target.innerText;
      console.log(`First Number:${firstNumber}`);
    } else if (resultOfCalculation) {
      firstNumber = resultOfCalculation;
      console.log(`First Number:${firstNumber}`);
      secondNumber += e.target.innerText;
      console.log(`Second Number:${secondNumber}`);
    } else {
      secondNumber += e.target.innerText;
      console.log(`Second Number:${secondNumber}`);
    }
  });
});

allOperatorButtons.forEach((operatorItem) => {
  operatorItem.addEventListener("click", calculateWithOperatefunc);
});

getClearButton.addEventListener("click", refreshDisplay);

function calculateWithOperatefunc(e) {
  getScreen.innerText += e.target.innerText;
  if (e.target.innerText !== "=") {
    //Do something here to chain operators like 12 + 7 - 5 * 3 = 42

    //Save previous OPERATOR in  previousOperator variable
    previousOperator = operator;
    console.log(`PREVIOUS Operator:${previousOperator}`);

    if (previousOperator) {
      resultOfCalculation = operate(
        firstNumber,
        previousOperator,
        secondNumber
      );

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
  } else {
    switch (operator) {
      case "+":
        resultOfCalculation = operate(firstNumber, "+", secondNumber);
        getScreen.innerText = resultOfCalculation;

        console.log(resultOfCalculation);
        break;

      case "-":
        resultOfCalculation = operate(firstNumber, "-", secondNumber);
        getScreen.innerText = resultOfCalculation;
        console.log(resultOfCalculation);
        break;

      case "*":
        resultOfCalculation = operate(firstNumber, "*", secondNumber);
        getScreen.innerText = resultOfCalculation;
        console.log(resultOfCalculation);
        break;

      case "/":
        resultOfCalculation = operate(firstNumber, "/", secondNumber);
        getScreen.innerText = resultOfCalculation;
        console.log(resultOfCalculation);
        break;

      default:
        break;
    }
  }
}

function refreshDisplay() {
  getScreen.innerText = "0";
  firstNumber = "";
  operator = "";
  secondNumber = "";
  resultOfCalculation = "";
}
