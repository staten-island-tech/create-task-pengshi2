import "./style.css";

let computerScore = 1;

let playerScore = 1;

const rock = document.getElementById("buttons-rock");
const paper = document.getElementById("buttonspaper");
const scissors = document.getElementById("buttonsscissors");

const icons = [
  {
    name: "rock",
    image:
      "https://www.seekpng.com/png/detail/111-1113492_rock-paper-scissors-boston.png",
  },

  {
    name: "paper",
    image: "https://nehalhazem.github.io/rockPaperScissors.io/img/paper.png",
  },

  {
    name: "scissors",
    image: "https://nehalhazem.github.io/rockPaperScissors.io/img/scissors.png",
  },
];

const randomChoice = [rock, paper, scissors];

let displayDiv = document.querySelector("#display");

let randomNum = Math.floor(Math.random() * randomChoice.length);
console.log(randomNum);

if (randomNum === 0 || randomNum === 1) {
  console.log("rock");
} else console.log("paper");

function display() {
  icons.forEach((image) => {
    displayDiv.insertAdjacentHTML(
      "beforeend",
      `<img class = "icons" src = "${icons.image}">  `
    );
  });
}

display();
