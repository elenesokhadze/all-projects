let calcDisplay = document.querySelector(".calc-screen__display");
let error = document.getElementById("error");

const calculator = {
  firstNumber: "",
  secondNumber: "",
  operator: "",
  displayValue: "",
  secondNumberExist: false,
  result: 0,
  error: "",
  isNegative: false,
};

const calculateResult = (operator, number1, number2) => {
  switch (operator) {
    case "-":
      return number1 - number2;
    case "+":
      return parseFloat(number1) + parseFloat(number2);
    case "*":
      return number1 * number2;
    case "/":
      if (number2 == 0) {
        let err = new Error("Invalid operation");
        calculator.error = err;
        error.textContent = calculator.error;
        throw err;
      } else {
        return number1 / number2;
      }
    case "^":
      return Math.pow(number1, number2);
    case "√":
      if (number1 < 0) {
        let err = new Error("Invalid operation");
        calculator.error = err;
        error.textContent = calculator.error;
        throw err;
      } else {
        return Math.sqrt(number1);
      }
  }
};

const resetCalculator = () => {
  calculator.firstNumber = "";
  calculator.secondNumber = "";
  calculator.operator = "";
  calculator.displayValue = "";
  calculator.secondNumberExist = false;
  calculator.result = 0;
  calculator.error = "";
};

const deleteOne = () => {
  calculator.displayValue = calculator.displayValue.substr(
    0,
    calculator.displayValue.length - 1
  );
  calculator.secondNumberExist
    ? (calculator.secondNumber = calculator.secondNumber
        .toString()
        .substr(0, calculator.secondNumber.length - 1))
    : (calculator.firstNumber = calculator.firstNumber
        .toString()
        .substr(0, calculator.firstNumber.length - 1));

  calculator.operator == "=";
};

const checkResultLength = () => {
  if (calculator.result.toString().length < 10) {
    calculator.displayValue = calculator.result.toString();
    calculator.firstNumber = calculator.result.toString();
  } else {
    if (calculator.result.toString().includes(".")) {
      calculator.displayValue = calculator.result
        .toFixed(11)
        .toString()
        .substr(0, 11);
      calculator.firstNumber = calculator.result
        .toFixed(11)
        .toString()
        .substr(0, 11);
    } else {
      calculator.displayValue = calculator.result
        .toFixed(10)
        .toString()
        .substr(0, 10);
      calculator.firstNumber = calculator.result
        .toFixed(10)
        .toString()
        .substr(0, 10);
    }
  }
  calculator.secondNumber = "";
};

const checkInputLength = () => {
  if (
    calculator.firstNumber.toString().length > 10 ||
    calculator.secondNumber.toString().length > 10
  ) {
    let err = new Error("Input is too long");
    calculator.error = err;
    error.textContent = calculator.error;
    throw err;
  } else {
    calculator.error = "";
    error.textContent = "";
  }
};

calcButton.forEach((button) =>
  button.addEventListener("click", function calculate() {
    const { operator, secondNumberExist } = calculator;

    if (button.className.includes("number")) {
      calculator.displayValue += button.value;
      checkInputLength();
      if (secondNumberExist == false && calculator.isNegative == false) {
        calculator.firstNumber += button.value;
      } else if (secondNumberExist == true && calculator.isNegative == false) {
        calculator.secondNumber += button.value;
      } else if (secondNumberExist == false && calculator.isNegative == true) {
        calculator.firstNumber += button.value;
        calculator.firstNumber = -Math.abs(calculator.firstNumber);
        calculator.isNegative = false;
      } else if (secondNumberExist == true && calculator.isNegative == true) {
        calculator.secondNumber += button.value;
        calculator.secondNumber = -Math.abs(calculator.secondNumber);
        calculator.isNegative = false;
      }
    } else if (
      button.className.includes("operator") &&
      secondNumberExist == false &&
      calculator.firstNumber != ""
    ) {
      calculator.displayValue += button.value;
      calculator.operator = button.value;
      calculator.secondNumberExist = true;
    } else if (
      button.className.includes("operator") &&
      secondNumberExist == false &&
      button.value == "-" &&
      calculator.firstNumber == ""
    ) {
      calculator.displayValue += button.value;
      calculator.isNegative = true;
    } else if (
      button.className.includes("operator") &&
      secondNumberExist == true &&
      button.value == "-" &&
      calculator.firstNumber != ""
    ) {
      calculator.displayValue += button.value;
      calculator.isNegative = true;
    } else if (button.value == ".") {
      calculator.displayValue += button.value;
      if (secondNumberExist == false) {
        calculator.firstNumber += button.value;
      } else {
        calculator.secondNumber += button.value;
      }
    } else if (button.value == "=") {
      calculator.secondNumberExist = false;
      calculator.result = calculateResult(
        operator,
        calculator.firstNumber,
        calculator.secondNumber
      );
      checkResultLength();
    } else if (button.value == "RESET") {
      resetCalculator();
    } else if (button.value == "DEL") {
      deleteOne();
      checkInputLength();
    }
    calcDisplay.innerHTML = calculator.displayValue;
    error.textContent = calculator.error;
  })
);
