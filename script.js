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
const matchedWords = [];
let prevMatchedWords = [];
let accuracy = 0;

function displayAccuracy(x) {
  const accuracy = document.querySelector(".accuracy");
  accuracy.innerText = x + "%";
}

displayAccuracy(0);

function animationEndHandler(e) {
  if (matchedWords.includes(e.target)) {
    matchedWords.splice(matchedWords.indexOf(e.target), 1);
  }
  accuracy += 10;
  displayAccuracy(accuracy);
  e.target.remove();
}

function createWord() {
  const container = document.querySelector(".container");
  const word = document.createElement("div");
  word.style.left = Math.random() * 200 + "px";
  word.style.marginTop = "10px";
  word.className = "type-word";
  let randomizeSpecialCloud = Math.random();
  if (randomizeSpecialCloud < 0.25) {
    word.classList.add("fire");
  } else if (randomizeSpecialCloud < 0.5) {
    word.classList.add("ice");
  }
  word.innerText = commonWords[Math.floor(Math.random() * commonWords.length)];
  word.addEventListener("animationend", animationEndHandler);
  container.appendChild(word);

  return word;
}

function displayTypedKeys(typedKeys) {
  let str = typedKeys.join("");
  const display = document.querySelector(".display");
  display.innerHTML = `<h3>${str}<h3>`;
}

function findMatchAndHighlight(e) {
  // to remove
  if (e.key === "Backspace") {
    typedKeys.pop();
  } else if (e.key === "Enter" || e.key === "Space") {
    if (typedKeys.join("") === "fire") {
      const specialFire = document.querySelector(".fire-cloud");
      if (specialFire !== null) {
        const container = document.querySelector(".container");
        container.innerHTML = "";
      }
      specialFire.remove();
    } else if (typedKeys.join("") === "ice") {
      const specialIce = document.querySelector(".ice-cloud");
      if (specialIce !== null) {
        const typeWords = document.querySelectorAll(".type-word");

        typeWords.forEach((div) => {
          div.style.animationPlayState = "paused";
          freezeWord();
          setTimeout(() => {
            div.style.animationPlayState = "running";
            freezeWord();
          }, 6000);
        });
      }
      specialIce.remove();
    } else {
      // TODO: separate to different function
      matchedWords.forEach((word) => {
        if (word.innerText === typedKeys.join("")) {
          if (word.classList.contains("fire")) {
            const specials = document.querySelector(".specials");
            const specialCloud = document.createElement("div");
            specialCloud.className = "fire-cloud";
            specialCloud.innerText = "FIRE";
            specials.appendChild(specialCloud);
          } else if (word.classList.contains("ice")) {
            const specials = document.querySelector(".specials");
            const specialCloud = document.createElement("div");
            specialCloud.className = "ice-cloud";
            specialCloud.innerText = "ICE";
            specials.appendChild(specialCloud);
          }
          word.remove();
        } else {
          word.classList.add("type-word-faster");
          accuracy += 10;
          displayAccuracy(accuracy);
        }
      });
    }
    matchedWords.length = 0;
    typedKeys.length = 0;
  } else if (/^[a-zA-Z]$/.test(e.key)) {
    typedKeys.push(e.key);
  }

  displayTypedKeys(typedKeys);

  const words = document.querySelectorAll(".type-word");
  // const fireWords = document.querySelector(".fire-cloud");
  // const iceWords = document.querySelector(".ice-cloud");
  // const allWords = [...words, fireWords, iceWords];
  matchedWords.length = 0;
  words.forEach((word) => {
    const regex = new RegExp("^" + typedKeys.join(""), "i");
    word.innerHTML = word.innerText.replace(
      regex,
      `<span class="highlight">${typedKeys.join("")}</span>`
    );
    if (
      regex.test(word.innerText) &&
      !matchedWords.includes(word) &&
      typedKeys.length !== 0
    ) {
      matchedWords.push(word);
    }
  });
  console.log(typedKeys);
}

window.addEventListener("keyup", findMatchAndHighlight);

let createWordInterval = setInterval(function () {
  createWord();
}, Math.random() * 1000 + 2000);
let isPaused = false;

function freezeWord() {
  if (isPaused) {
    createWordInterval = setInterval(function () {
      createWord();
    }, Math.random() * 1000 + 2000);
    isPaused = false;
  } else {
    clearInterval(createWordInterval);
    isPaused = true;
  }
}

setTimeout(() => {
  clearInterval(createWordInterval);
  console.log("game stopped");
}, 30000);
