const socket = io();
const STATE = { word: "" };
const wordDisplay = document.getElementById("word-display");

function addLetter(e) {
  if (wordDisplay.children.length === 6) return;
  const text = e.innerText;
  STATE.word = STATE.word + text.toLowerCase();
  wordDisplay.innerHTML += `<div class="btn-floating btn-small">${text.toUpperCase()}</div>`;
}

function clearDisplay() {
  wordDisplay.innerHTML = "";
  STATE.word = "";
}

function deleteDisplay() {
  wordDisplay.removeChild(wordDisplay.lastElementChild);
  STATE.word = STATE.word.slice(0, -1);
}

document.addEventListener("keyup", (e) => {
  if (e.keyCode === 8) return deleteDisplay();
  const letterList = document.querySelectorAll("#letter-btn");
  letterList.forEach((element) => {
    if (element.innerText.toLowerCase() === e.key.toLowerCase())
      addLetter(element);
  });
});
