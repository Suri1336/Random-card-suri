/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let randomSuits = ["♦", "♥", "♠", "♣"];
  let randomNumber = Math.floor(Math.random() * 4);
  document.querySelector(".top-suit").innerHTML = randomSuits[randomNumber];
};