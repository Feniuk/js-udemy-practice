let currentResult = 0;
let inputValues = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function outputInit(operator, resultBeforeCalc, resultAfterCalc) {
  const operationDescription = `${resultBeforeCalc} ${operator} ${resultAfterCalc}`;
  outputResult(currentResult, operationDescription);
}

function writeObjectToLog(
  operatorSymbol,
  previousResult,
  operationNumber,
  newResult,
) {
  const inputValue = {
    operation: operatorSymbol,
    prevResult: previousResult,
    number: operationNumber,
    result: newResult,
  };
  inputValues.push(inputValue);
  console.log(inputValues);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();
  if (!enteredNumber) {
    return;
  }
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  } else {
    alert("Invalid element!");
  }
  outputInit(mathOperator, initialResult, enteredNumber);
  writeObjectToLog(
    calculationType,
    initialResult,
    enteredNumber,
    currentResult,
  );
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
