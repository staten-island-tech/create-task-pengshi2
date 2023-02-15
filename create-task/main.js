import "./style.css";
import { icons } from "./icons.js";

let computerScore = 1;

let playerScore = 1;

const rock = document.getElementById("buttons-rock");
const paper = document.getElementById("buttonspaper");
const scissors = document.getElementById("buttonsscissors");

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

function display(array) {
  icons.forEach((image) => {
    displayDiv.insertAdjacentHTML(
      "beforeend",
      `<img class = "icon" src = "${image.image}"> `
    );
  });
}

display();
