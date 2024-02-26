"use strict"
window.addEventListener("load", start);

function start() {
  console.log("Javascript running");
  makeBoardClickable();
}

function makeBoardClickable() {
  document.querySelector("#board")
  .addEventListener("click", boardClicked);
}

function boardClicked(event) {
  const cell = event.target;
  console.log(cell);
}