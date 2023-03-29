"use strict";

const winner = document.querySelector(".winner");
const scissor = document.querySelector(".scissor");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");

const winner1 = document.querySelector(".winnerone");
const winner2 = document.querySelector(".winnertwo");

const stat1 = document.querySelector(".stat1");
const stat2 = document.querySelector(".stat2");

let yourstat = 0;
let computerstat = 0;

const combination = ["მაკრატელი", "ქვა", "ქაღალდი"];

scissor.addEventListener("click", () => {
  const random = Math.floor(Math.random() * combination.length);
  winner1.textContent = "მაკრატელი";
  winner2.textContent = combination[random];
  if (winner2.textContent === "ქაღალდი") {
    yourstat++;
    stat1.textContent = yourstat;
    winner.textContent = "თქვენ მოიგეთ";
  } else if (winner2.textContent === "ქვა") {
    computerstat++;
    stat2.textContent = computerstat;
    winner.textContent = "კომპიუტერა მოიგო";
  } else if (winner2.textContent === "მაკრატელი") {
    winner.textContent = "ფრე";
  }

  if (yourstat === 10) {
    winner.textContent = "კომპიუტერი დამარცხდა თქვენთან";
    stat1.textContent = 0;
    stat2.textContent = 0;
    yourstat = 0;
    computerstat = 0;
    winner1.textContent = "";
    winner2.textContent = "";
  } else if (computerstat === 10) {
    winner.textContent = "თქვენ დამარცხდით კომპიუტერთან";
    stat1.textContent = 0;
    stat2.textContent = 0;
    yourstat = 0;
    computerstat = 0;
    winner1.textContent = "";
    winner2.textContent = "";
  }
});

rock.addEventListener("click", () => {
  const random = Math.floor(Math.random() * combination.length);
  winner1.textContent = "ქვა";
  winner2.textContent = combination[random];
  if (winner2.textContent === "ქაღალდი") {
    computerstat++;
    stat2.textContent = computerstat;
    winner.textContent = "კომპიუტერმა მოიგო";
  } else if (winner2.textContent === "მაკრატელი") {
    yourstat++;
    stat1.textContent = yourstat;
    winner.textContent = "თქვენ მოიგეთ";
  } else if (winner2.textContent === "ქვა") {
    winner.textContent = "ფრე";
  }

  if (yourstat === 10) {
    winner.textContent = "კომპიუტერი დამარცხდა თქვენთან";
    stat1.textContent = 0;
    stat2.textContent = 0;
    yourstat = 0;
    computerstat = 0;
    winner1.textContent = "";
    winner2.textContent = "";
  } else if (computerstat === 10) {
    winner.textContent = "თქვენ დამარცხდით კომპიუტერთან";
    stat1.textContent = 0;
    stat2.textContent = 0;
    yourstat = 0;
    computerstat = 0;
    winner1.textContent = "";
    winner2.textContent = "";
  }
});

paper.addEventListener("click", () => {
  const random = Math.floor(Math.random() * combination.length);
  winner1.textContent = "ქაღალდი";
  winner2.textContent = combination[random];
  if (winner2.textContent === "ქაღალდი") {
    winner.textContent = "ფრე";
  } else if (winner2.textContent === "მაკრატელი") {
    computerstat++;
    stat2.textContent = computerstat;
    winner.textContent = "კომპიუტერმა მოიგო";
  } else if (winner2.textContent === "ქვა") {
    yourstat++;
    stat1.textContent = yourstat;
    winner.textContent = "თქვენ მოიგეთ";
  }

  if (yourstat === 10) {
    winner.textContent = "კომპიუტერი დამარცხდა თქვენთან";
    stat1.textContent = 0;
    stat2.textContent = 0;
    yourstat = 0;
    computerstat = 0;
    winner1.textContent = "";
    winner2.textContent = "";
  } else if (computerstat === 10) {
    winner.textContent = "თქვენ დამარცხდით კომპიუტერთან";
    stat1.textContent = 0;
    stat2.textContent = 0;
    yourstat = 0;
    computerstat = 0;
    winner1.textContent = "";
    winner2.textContent = "";
  }
});
