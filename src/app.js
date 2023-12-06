/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let SuitsArrey = ["♦", "♥", "♠", "♣"];
  let numbersArrey = [
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

  
  let randomSuitIndex = Math.floor(Math.random() * SuitsArrey.length);
  let randomCardNumberIndex = Math.floor(Math.random() * numbersArrey.length);

  let randomSuit = SuitsArrey[randomSuitIndex];
  let randomNumber = numbersArrey[randomCardNumberIndex];

  let topSuitDiv = document.querySelector(".top-suit");
  let bottomSuitDiv = document.querySelector(".bottom-suit");
  let numberDiv = document.querySelector(".number");

  bottomSuitDiv.innerHTML = randomSuit;
  topSuitDiv.innerHTML = randomSuit;
  numberDiv.innerHTML = randomNumber;
  if (randomSuit === "♥" || randomSuit === "♦") {
    topSuitDiv.style.color = "red";
    bottomSuitDiv.style.color = "red";
    numberDiv.style.color = "red";
  }
};
