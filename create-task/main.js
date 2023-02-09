import "./style.css";

let computerScore = 1;

let playerScore = 1;

const randomChoice = [rock, paper, scissors];

const rock = buttons - rock;
const paper = buttons - paper;
const scissors = buttons - scissors;
let displayDiv = document.getElementById(".display");

let randomNum = Math.floor(Math.random() * randomChoice.length);
console.log(randomNum);

if (randomNum === 0 || randomNum === 1) {
  console.log("rock");
} else console.log("paper");
