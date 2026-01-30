let currentResult = 0;

function getUserInput() {
  return parseInt(userInput.value);
}

function outputInit(operator, resultBeforeCalc, resultAfterCalc) {
  const operationDescription = `${resultBeforeCalc} ${operator} ${resultAfterCalc}`;
  outputResult(currentResult, operationDescription);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  outputInit("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  outputInit("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  outputInit("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  outputInit("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
