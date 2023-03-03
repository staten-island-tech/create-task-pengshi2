const DOM = {
  history: document.getElementById("#history"),
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const initialize = () => {
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissor = document.querySelector(".scissor");
    const playerChoices = [rock, paper, scissor];
    const computerChoices = ["rock", "paper", "scissors"];

    playerChoices.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");

        moves++;

        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);

        const computerChoice = computerChoices[choiceNumber];

        winner(this.innerText, computerChoice);

        if (moves === 10) {
          terminate(playerChoices, movesLeft);
        }
      });
    });
  };

  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const resultCPU = document.querySelector(".resultCPU");
    const playerScoreBoard = document.querySelector(".ps-score");
    const computerScoreBoard = document.querySelector(".cs-score");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.innerHTML = "Tie";
      resultCPU.innerHTML = `Timothy chose ${player}`;
    } else if (player === "rock") {
      if (computer === "paper") {
        result.innerHTML = "Timothy Won";
        resultCPU.innerHTML = "Timothy chose paper";
        computerScore++;

        computerScoreBoard.innerHTML = computerScore;
      } else {
        result.innerHTML = "You Won";
        resultCPU.innerHTML = "Timothy chose scissors";
        playerScore++;

        playerScoreBoard.innerHTML = playerScore;
        history.push("Loss");
      }
    } else if (player === "scissors") {
      if (computer === "rock") {
        result.textContent = "Timothy Won";
        resultCPU.innerHTML = "Timothy chose rock";
        computerScore++;

        computerScoreBoard.innerHTML = computerScore;
        history.push("Loss");
      } else {
        result.innerHTML = "You Won";
        resultCPU.innerHTML = "Timothy chose paper";
        playerScore++;

        playerScoreBoard.innerHTML = playerScore;
      }
    } else if (player === "paper") {
      if (computer === "scissors") {
        result.innerHTML = "Timothy Won";
        resultCPU.innerHTML = "Timothy chose scissors";
        computerScore++;

        computerScoreBoard.innerHTML = computerScore;
      } else {
        result.innerHTML = "You Won";
        resultCPU.innerHTML = "Timothy chose rock";
        playerScore++;

        playerScoreBoard.innerHTML = playerScore;
      }
    }
  };

  const terminate = (playerChoices, movesLeft) => {
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

      result.innerText = "Draw!";

      result.style.color = "grey";
    }
    reloadBtn.innerText = "Restart?";

    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  initialize();
};

game();

const history = [];

for (let i = 0; i < history.length; i++) {
  if (i === 0) {
    DOM.history.innerHTML = "";
  } else {
    DOM.history.insertAdjacentHTML(
      "beforeend",
      `<div>
        Trial ${i + 1}: ${history[i]}
      </div>`
    );
  }
}
