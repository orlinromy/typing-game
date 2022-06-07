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
  "acknowledge",
  "acquaintance",
  "hypocrisy",
  "inoculate",
];

const typedKeys = [];
const matchedWords = [];
let prevMatchedWords = [];
let accuracy = 0;
let passLevelLimit = 0;
let score = 0;
let animationId = 0;
let dynamicStyles = null; // (https://stackoverflow.com/questions/59573722/how-can-i-set-a-css-keyframes-in-javascript)

const timeout = setTimeout(() => {
  clearInterval(createWordInterval);
  console.log("game stopped");
}, 60000);

function checkAccuracy() {
  if (accuracy >= 100) {
    console.log("stop game because accuracy limit is hit");
    const typeWords = document.querySelectorAll(".type-word");
    typeWords.forEach((word) => word.remove());
    clearTimeout(timeout);
    clearInterval(createWordInterval);
    const display = document.querySelector(".display");
    display.innerHTML = `<h3>GAME OVER</h3>`;
  }
}

function displayAccuracy(x) {
  const accuracy = document.querySelector(".accuracy");
  accuracyDisplay = x > 100 ? 100 : x;
  accuracy.innerText = "Accuracy: " + accuracyDisplay + "%";
}
function displayPassLimit(x) {
  const passLimit = document.querySelector(".pass-limit");
  limitDisplay = x > 100 ? 100 : x;
  passLimit.innerText = "Pass Limit: " + limitDisplay + "%";
}

function displayScore(x) {
  const score = document.querySelector(".score");
  score.innerText = "Score: " + x;
}

displayAccuracy(accuracy);
displayPassLimit(passLevelLimit);
displayScore(score);

function animationEndHandler(e) {
  if (matchedWords.includes(e.target)) {
    matchedWords.splice(matchedWords.indexOf(e.target), 1);
  }
  accuracy += 10;
  displayAccuracy(accuracy);
  checkAccuracy();
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
  const display = document.querySelector(".display");
  display.innerHTML = `<h3>${typedKeys.join("")}<h3>`;
}

function addAnimation(body) {
  // if (!dynamicStyles) {
  dynamicStyles = document.createElement("style");
  dynamicStyles.type = "text/css";
  document.head.appendChild(dynamicStyles);
  // }

  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

function findMatchAndHighlight(e) {
  if (matchedWords.length !== 0) {
    prevMatchedWords = [...matchedWords];
  }
  console.log(prevMatchedWords);
  // to remove
  if (e.key === "Backspace") {
    typedKeys.pop();
  } else if (e.key === "Enter" || e.key === "Space") {
    if (typedKeys.join("") === "fire") {
      const specialFire = document.querySelector(".fire-cloud");
      if (specialFire !== null) {
        const container = document.querySelector(".container");
        container.innerHTML = "";
        specialFire.remove();
      }
    } else if (typedKeys.join("") === "ice") {
      const specialIce = document.querySelector(".ice-cloud");
      if (specialIce !== null) {
        const typeWords = document.querySelectorAll(".type-word");

        typeWords.forEach((div) => {
          div.style.animationPlayState = "paused";
          toggleCreateWord();
          setTimeout(() => {
            div.style.animationPlayState = "running";
            toggleCreateWord();
          }, 6000);
        });
        specialIce.remove();
      }
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
          passLevelLimit += Math.round(Math.random()) + 10;
          score += word.innerText.length * 100 + Math.round(Math.random()) + 1;
          displayPassLimit(passLevelLimit);
          displayScore(score);
          word.remove();
        } else {
          let rect = word.getBoundingClientRect(); //https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
          console.log(rect.top);

          addAnimation(`
            @keyframes descend-faster-${animationId} {
              0% {
                transform: translateY(${rect.top + 0.75}px);
              }
              100% {
                transform: translateY(300px);
              }
            }
          `);
          // use class and data in css
          word.style.animation = `descend-faster-${animationId} ${
            (300 - rect.top + 0.75) / (((300 - 10) / 7) * 2.5)
          }s linear`;
          animationId++;
        }
      });
      prevMatchedWords.forEach((word) => {
        let rect = word.getBoundingClientRect(); //https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
        console.log(rect.top);

        addAnimation(`
            @keyframes descend-faster-${animationId} {
              0% {
                transform: translateY(${rect.top + 0.75}px);
              }
              100% {
                transform: translateY(300px);
              }
            }
          `);
        // use class and data in css
        word.style.animation = `descend-faster-${animationId} ${
          (300 - rect.top - 0.75) / (((300 - 10) / 7) * 2.5)
        }s linear`;
        animationId++;
      });
    }
    matchedWords.length = 0;
    typedKeys.length = 0;
    checkAccuracy();
  } else if (/^[a-zA-Z]$/.test(e.key)) {
    typedKeys.push(e.key);
  }

  displayTypedKeys(typedKeys);

  const words = document.querySelectorAll(".type-word");
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
  checkAccuracy();
  createWord();
}, Math.random() * 1000 + 500);
let isPaused = false;

// TODO: research why this part is probabilistic (source: https://stackoverflow.com/questions/21277900/how-can-i-pause-setinterval-functions)
function toggleCreateWord() {
  if (isPaused) {
    createWordInterval = setInterval(function () {
      checkAccuracy();
      createWord();
    }, Math.random() * 1000 + 2000);
    isPaused = false;
  } else {
    clearInterval(createWordInterval);
    isPaused = true;
  }
}
