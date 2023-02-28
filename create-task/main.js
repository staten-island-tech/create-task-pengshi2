// import "./style.css";
// import { Timothy } from "./assets.js";
// import { you } from "./assets.js";

// const computerScore = 0;
// const playerScore = 0;

// const rock = document.getElementById("rock");

// const paper = document.getElementById("paper");

// const scissors = document.getElementById("scissors");

// const playerScoreboard = document.querySelector("p-score");

// const playerChoice = [rock, paper, scissors];

// const computerScoreboard = document.querySelector("c-score");

// const randomChoice = [rock, paper, scissors];

// const result = document.querySelector(".result");
// let displayDiv = document.querySelector("#display");

// playerChoice.forEach((option) => {
//   option.addEventListener("click", function () {
//     const movesLeft = document.querySelector(".movesleft");
//     movesLeft++;
//     movesLeft.innerText = `Moves Left: ${10 - moves}`;
//     let randomNum = Math.floor(Math.random() * randomChoice.length);
//     if (randomNum === 0) {
//       let computerChoice = "rock";
//     } else if (randomNum === 1) {
//       let computerChoice = "paper";
//     } else if (randomNum === 2) {
//       let computerChoice = "scissors";
//     }
//   });
// });
// console.log(randomNum);

// console.log(computerChoice);

// function displayTimothy() {
//   Timothy.forEach((image) => {
//     displayDiv.insertAdjacentHTML(
//       "beforeend",
//       `<h2 class = "name"> ${image.name}</h2>
//       <img class = "icon" src = "${image.image}"> `
//     );
//   });
// }

// function displayPlayer() {
//   you.forEach((image) => {
//     displayDiv.insertAdjacentHTML(
//       "beforeend",
//       `<h2 class = "name"> ${image.name}</h2>
//       <img class = "icon" src = "${image.image}"> `
//     );
//   });
// }

// displayPlayer();
// displayTimothy();

// document.getElementById("rock").addEventListener("click", function () {
//   displayDiv.insertAdjacentHTML("beforeend", `<h3 class = "test> test </h3>`);
// });

// if (playerChoice === computerChoice) {
//   result.textContent = "Tie";
// } else if (playerChoice === "Rock") {
//   if (computerChoice === "Paper") {
//     result.textContent = "Timothy Won";
//     computerScore++;
//     computerScoreboard.textContent = computerScore;
//   }
// } else {
//   result.textContent = "You Won";
//   playerScore++;
//   playerScoreboard.textContent = playerScore;
// }

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const playGame = () => {
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissor = document.querySelector(".scissor");
    const playerChoices = [rock, paper, scissor];
    const computerOptions = ["rock", "paper", "scissors"];

    playerChoices.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerChoices[choiceNumber];

        winner(this.innerText, computerChoice);

        if (moves === 10) {
          gameOver(playerChoices, movesLeft);
        }
      });
    });
  };

  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".ps-score");
    const computerScoreBoard = document.querySelector(".cs-score");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.textContent = "Tie";
    } else if (player === "rock") {
      if (computer === "paper") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player === "scissors") {
      if (computer === "rock") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player === "paper") {
      if (computer === "scissors") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };

  const gameOver = (playerChoices, movesLeft) => {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");

    playerChoices.forEach((option) => {
      option.style.display = "none";
    });

    chooseMove.innerText = "Results";
    movesLeft.style.display = "none";

    if (playerScore > computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You beat Timothy!";
      result.style.color = "green";
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "Timothy beat you!";
      result.style.color = "red";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Tie!";
      result.style.color = "grey";
    }
    reloadBtn.innerText = "Restart?";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  const history = [];

  document.querySelector("#history");
  playGame();
};

game();
