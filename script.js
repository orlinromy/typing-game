// for testing only
const commonWords = [
  "common",
  "clock",
  "hello",
  "marks",
  "read",
  "reap",
  "sow",
  "attempt",
];

const typedKeys = [];
let matchedWords = [];
let prevMatchedWords = [];

function animationEndHandler(e) {
  e.target.remove();
}

function createWord() {
  const container = document.querySelector(".container");
  const word = document.createElement("div");
  word.style.left = Math.random() * 100 + "px";
  word.className = "type-word";
  word.innerText = commonWords[Math.floor(Math.random() * commonWords.length)];
  word.addEventListener("animationend", animationEndHandler);
  container.appendChild(word);

  return word;
}

function findMatchAndHighlight(e) {
  // to remove
  console.log("matched words");
  matchedWords.forEach((word) => {
    console.log(word.innerText);
  });
  // console.log("matched words: ", matchedWords);
  if (e.key === "Backspace") {
    typedKeys.pop();
  } else if (e.key === "Enter" || e.key === "Space") {
    // TODO: separate to different function
    matchedWords.forEach((word) => {
      if (word.innerText === typedKeys.join("")) {
        word.remove();
      } else {
        word.classList.add("type-word-faster");
      }
    });

    // reset the stuff
    matchedWords.length = 0;
    typedKeys.length = 0;
  } else if (/^[a-zA-Z]$/.test(e.key)) {
    typedKeys.push(e.key);
  }

  const words = document.querySelectorAll(".type-word");
  matchedWords = [];
  words.forEach((word) => {
    const regex = new RegExp("^" + typedKeys.join(""), "i");
    word.innerHTML = word.innerText.replace(
      regex,
      `<span class="highlight">${typedKeys.join("")}</span>`
    );
    if (regex.test(word.innerText) && !matchedWords.includes(word)) {
      matchedWords.push(word);
    }
  });
  console.log(typedKeys);
}

// TODO: 1. put check and highlight functions here
// TODO: 2. think whether this should be a keyup or keydown (keypress is deprecated);
window.addEventListener("keyup", findMatchAndHighlight);

const myInterval = setInterval(() => {
  createWord();
}, Math.random() * 1000 + 2000);

setTimeout(() => {
  clearInterval(myInterval);
  console.log("game stopped");
}, 30000);
