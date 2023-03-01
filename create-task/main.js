const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const playGame = () => {
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
      result.innerHTML = "Tie";
    } else if (player === "rock") {
      if (computer === "paper") {
        result.innerHTML = "Computer Won";
        computerScore++;
        computerScoreBoard.innerHTML = computerScore;
      } else {
        result.innerHTML = "Player Won";
        playerScore++;
        playerScoreBoard.innerHTML = playerScore;
      }
    } else if (player === "scissors") {
      if (computer === "rock") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreBoard.innerHTML = computerScore;
      } else {
        result.innerHTML = "Player Won";
        playerScore++;
        playerScoreBoard.innerHTML = playerScore;
      }
    } else if (player === "paper") {
      if (computer === "scissors") {
        result.innerHTML = "Computer Won";
        computerScore++;
        computerScoreBoard.innerHTML = computerScore;
      } else {
        result.innerHTML = "Player Won";
        playerScore++;
        playerScoreBoard.innerHTML = playerScore;
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
