import "./style.css";
import { Timothy } from "./assets.js";
import { you } from "./assets.js";

const game = () => {
  let computerScore = 0;
  let playerScore = 0;
};

const rock = document.getElementById("buttons-rock");
const paper = document.getElementById("buttonspaper");
const scissors = document.getElementById("buttonsscissors");
const playerScoreboard = document.querySelector("p-score");
const playerChoice = [rock, paper, scissors];
const computerScoreboard = document.querySelector("c-score");
const randomChoice = [rock, paper, scissors];
let displayDiv = document.querySelector("#display");
let randomNum = Math.floor(Math.random() * randomChoice.length);
console.log(randomNum);

if (randomNum === 0) {
  console.log("rock");
} else if (randomNum === 1) {
  console.log("paper");
} else if (randomNum === 2) {
  console.log("scissors");
}

function displayTimothy() {
  Timothy.forEach((image) => {
    displayDiv.insertAdjacentHTML(
      "beforeend",
      `<h2 class = "name"> ${image.name}</h2> 
      <img class = "icon" src = "${image.image}"> `
    );
  });
}

function displayPlayer() {
  you.forEach((image) => {
    displayDiv.insertAdjacentHTML(
      "beforeend",
      `<h2 class = "name"> ${image.name}</h2> 
      <img class = "icon" src = "${image.image}"> `
    );
  });
}

displayPlayer();
displayTimothy();

document.getElementById("rock").addEventListener("click", function () {
  displayDiv.insertAdjacentHTML("beforeend", `<h3 class = "test> test </h3>`);
});

if (playerChoice === computerChoice) {
  result.textContent = "Tie";
} else if (playerChoice === "Rock") {
  if (computerChoice === "Paper") {
    result.textContent = "Timothy Won";
    computerScore++;
    computerScoreboard.textContent = computerScore;
  }
} else {
  result.textContent = "You Won";
  playerScore++;
  playerScoreboard.textContent = playerScore;
}
