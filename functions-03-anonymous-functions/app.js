const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const default_value = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
  const pick = prompt(
    `Choose ${ROCK}, ${PAPER} or ${SCISSORS}`,
    "",
  ).toUpperCase();
  if (pick !== ROCK && pick !== PAPER && pick !== SCISSORS) {
    alert("You entered wrong option, default ROCK is used!");
    return default_value;
  }
  return pick;
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerPick = getPlayerChoice();
  console.log(playerPick);
});
