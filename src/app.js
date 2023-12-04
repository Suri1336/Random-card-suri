/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let randomSuits = ["♦", "♥", "♠", "♣"];
  let randomSuitNumber = Math.floor(Math.random() * randomSuits.length);
  document.querySelector(".top-suit").innerHTML = randomSuits[randomSuitNumber];
  document.querySelector(".bottom-suit").innerHTML =
    randomSuits[randomSuitNumber];

  let randomCardNumbers = [
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
  let randomNumber = Math.floor(Math.random() * randomCardNumbers.length);
  document.querySelector(".number").innerHTML = randomCardNumbers[randomNumber];
};
