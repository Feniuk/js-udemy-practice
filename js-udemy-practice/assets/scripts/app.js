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

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  outputInit("+", initialResult, enteredNumber);
  writeObjectToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  outputInit("-", initialResult, enteredNumber);
  writeObjectToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  outputInit("*", initialResult, enteredNumber);
  writeObjectToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  outputInit("/", initialResult, enteredNumber);
  writeObjectToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
