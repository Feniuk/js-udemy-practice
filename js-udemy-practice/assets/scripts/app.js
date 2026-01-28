let currentResult = 0;
let operationDescription = "Mishanya skladivayet dva chisla yepta!";

function add() {
  currentResult += userInput.value;
  outputResult(currentResult, operationDescription);
}

addBtn.addEventListener("click", add);
