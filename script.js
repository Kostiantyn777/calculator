function add(number1, number2) {
  return parseInt(number1) + parseInt(number2);
}

function subtract(number1, number2) {
  return parseInt(number1) - parseInt(number2);
}

function multiply(number1, number2) {
  return parseInt(number1) * parseInt(number2);
}
function divide(number1, number2) {
  return parseInt(number1) / parseInt(number2);
}

let firstNumber = "";
let operator = "";
let secondNumber = "";
let resultOfCalculation = "";

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
getScreen.innerText = 0;

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
      secondNumber = "";
      secondNumber += e.target.innerText;
      console.log(`Second Number:${secondNumber}`);
    } else {
      secondNumber += e.target.innerText;
      console.log(`Second Number:${secondNumber}`);
    }
  });
});

allOperatorButtons.forEach((operatorItem) => {
  operatorItem.addEventListener("click", (e) => {
    getScreen.innerText += e.target.innerText;
    if (e.target.innerText !== "=") {
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
  });
});
