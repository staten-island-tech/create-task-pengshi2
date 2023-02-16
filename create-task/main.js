import "./style.css";
import { icons } from "./icons.js";
import { players } from "./icons.js";

let computerScore = 1;

let playerScore = 1;

const rock = document.getElementById("buttons-rock");
const paper = document.getElementById("buttonspaper");
const scissors = document.getElementById("buttonsscissors");

const randomChoice = [rock, paper, scissors];

let displayDiv = document.querySelector("#display");
let displayDiv3 = document.querySelector("#display3");

let randomNum = Math.floor(Math.random() * randomChoice.length);
console.log(randomNum);

if (randomNum === 0) {
  console.log("rock");
} else if (randomNum === 1) {
  console.log("paper");
} else if (randomNum === 2) {
  console.log("scissors");
}

function display() {
  icons.forEach((image) => {
    displayDiv.insertAdjacentHTML(
      "beforeend",
      `<img class = "icon" src = "${image.image}"> `
    );
  });
}

display();

function display3() {
  players.forEach((image) => {
    displayDiv3.insertAdjacentHTML(
      "beforeend",
      `<h2 class = "name"> ${image.name}</h2> 
      <img class = "icon" src = "${image.image}"> `
    );
  });
}

display3();
