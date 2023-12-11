/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// let SuitsArray = ["♦", "♥", "♠", "♣"];
// let numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

// const changeCard = () => {
//   console.log("test");
//   let randomSuitIndex = Math.floor(Math.random() * SuitsArray.length);
//   let randomCardNumberIndex = Math.floor(Math.random() * numbersArray.length);

//   let randomSuit = SuitsArray[randomSuitIndex];
//   let randomNumber = numbersArray[randomCardNumberIndex];

//   let topSuitDiv = document.querySelector(".top-suit");
//   let bottomSuitDiv = document.querySelector(".bottom-suit");
//   let numberDiv = document.querySelector(".number");

//   bottomSuitDiv.innerHTML = randomSuit;
//   topSuitDiv.innerHTML = randomSuit;
//   numberDiv.innerHTML = randomNumber;
//   if (randomSuit === "♥" || randomSuit === "♦") {
//     topSuitDiv.style.color = "red";
//     bottomSuitDiv.style.color = "red";
//     numberDiv.style.color = "red";
//   } else {
//     topSuitDiv.style.color = "black";
//     bottomSuitDiv.style.color = "black";
//     numberDiv.style.color = "black";
//   }
// };
// let button = document.querySelector(".btn");
// console.log(button);
// button.addEventListener("click", changeCard);
// window.onload = function() {
//   changeCard();
// };
// Arrays for card suits and numbers
const suitsArray = ["♦", "♥", "♠", "♣"];
const numbersArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K"
];

// Function to change and display a random card
const changeCard = () => {
  // Generate random indices for suit and number
  const randomSuitIndex = Math.floor(Math.random() * suitsArray.length);
  const randomCardNumberIndex = Math.floor(Math.random() * numbersArray.length);

  // Retrieve the suit and number using the random indices
  const randomSuit = suitsArray[randomSuitIndex];
  const randomNumber = numbersArray[randomCardNumberIndex];

  // Update the HTML content of card elements
  const topSuitDiv = document.querySelector(".top-suit");
  const bottomSuitDiv = document.querySelector(".bottom-suit");
  const numberDiv = document.querySelector(".number");

  bottomSuitDiv.innerHTML = randomSuit;
  topSuitDiv.innerHTML = randomSuit;
  numberDiv.innerHTML = randomNumber;

  // Adjust text color based on the selected suit
  if (randomSuit === "♥" || randomSuit === "♦") {
    topSuitDiv.style.color = "red";
    bottomSuitDiv.style.color = "red";
    numberDiv.style.color = "red";
  } else {
    topSuitDiv.style.color = "black";
    bottomSuitDiv.style.color = "black";
    numberDiv.style.color = "black";
  }
};

// Event listener for the button click
const button = document.querySelector(".btn");
button.addEventListener("click", changeCard);

// Initialize the card when the window loads
window.onload = function() {
  changeCard();
};
