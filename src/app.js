/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
  setInterval(() => {
    //write your code here
    document.querySelector(".card").classList.remove(generateRandomSuit());
    document.querySelector(".card").classList.add(generateRandomSuit());
    document.querySelector(".card").innerHTML = generateRandomNumber();
  }, 1000);
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "🃏"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["♦️", "♠️", "♥️", "♣️", "🃏"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
