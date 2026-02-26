const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const default_value = ROCK;
const DRAW = "DRAW";
const PLAYER_WON = "PLAYER WON";
const COMPUTER_WON = "COMPUTER WON";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const pick = prompt(
    `Choose ${ROCK}, ${PAPER} or ${SCISSORS}`,
    "",
  ).toUpperCase();
  if (pick !== ROCK && pick !== PAPER && pick !== SCISSORS) {
    alert("You entered wrong option, default ROCK is used!");
    return;
  }
  return pick;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const findWinner = (cPick, pPick = default_value) =>
  pPick === cPick
    ? DRAW
    : (pPick === SCISSORS && cPick === PAPER) ||
        (pPick === PAPER && cPick === ROCK) ||
        (pPick === ROCK && cPick === SCISSORS)
      ? PLAYER_WON
      : COMPUTER_WON;

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerPick = getPlayerChoice();
  const computerPick = getComputerChoice();
  let winner;
  if (playerPick) {
    winner = findWinner(computerPick, playerPick);
  } else {
    winner = findWinner(computerPick);
  }
  let message = `Computer picked ${computerPick} but your choice was ${playerPick || default_value} as a result - `;
  if (winner === DRAW) {
    message += "draw";
  } else if (winner === PLAYER_WON) {
    message += "victory";
  } else {
    message += "loss";
  }
  alert(message);
  gameIsRunning = false;
});
