import "./style.css";
import { icons } from "./assets.js";
import { Timothy } from "./assets.js";
import { you } from "./assets.js";
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

function display() {
  icons.forEach((image) => {
    displayDiv.insertAdjacentHTML(
      "beforeend",
      `<br> <img id = "${image.name}" src = "${image.image}"> `
    );
  });
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
display();
displayTimothy();
display();

document.getElementById("rock").addEventListener("click", function () {
  displayDiv.insertAdjacentHTML("beforeend", `<h3 class = "test> test </h3>`);
});

function kskskskks() {
  let button = document.getElementById("button");
  button.innerHTML = `<img src = "https://nehalhazem.github.io/rockPaperScissors.io/img/paper.png",
  "`;
}

kskskskks();
