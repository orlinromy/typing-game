const typedKeys = [];
const matchedWords = [];
let prevMatchedWords = [];
let accuracy = 0;
let passLevelLimit = 20;
let score = 0;
let animationId = 0;
let dynamicStyles = null; // (https://stackoverflow.com/questions/59573722/how-can-i-set-a-css-keyframes-in-javascript)
let level = 0;
let minMaxLength = {
  1: { min: 3, max: 4 },
  2: { min: 3, max: 5 },
  3: { min: 3, max: 6 },
  4: { min: 4, max: 6 },
  5: { min: 4, max: 6 },
  6: { min: 4, max: 7 },
  7: { min: 4, max: 8 },
  8: { min: 4, max: 9 },
  9: { min: 4, max: 9 },
  10: { min: 4, max: 9 },
  11: { min: 4, max: 10 },
  12: { min: 4, max: 10 },
  13: { min: 4, max: 10 },
  14: { min: 4, max: 10 },
  15: { min: 4, max: 10 },
  16: { min: 5, max: 10 },
  17: { min: 5, max: 10 },
  18: { min: 5, max: 10 },
  19: { min: 5, max: 11 },
  20: { min: 5, max: 11 },
  21: { min: 6, max: 10 },
  22: { min: 6, max: 10 },
  23: { min: 6, max: 10 },
  24: { min: 6, max: 11 },
  25: { min: 6, max: 11 },
  26: { min: 6, max: 11 },
  27: { min: 6, max: 12 },
  28: { min: 6, max: 12 },
  29: { min: 6, max: 12 },
  30: { min: 6, max: 12 },
};
let iceTimeout = null;
let slowTimeout = null;
let createWordInterval = null;
let isPaused = false;
let isGameOver = false;
let wordTimeout = null;
let selectWord = [];

function startGame() {
  console.log("fired");
  if (isGameOver) {
    isGameOver = false;
    level = 0;
    createWordInterval = null;
    score = 0;
    const specials = document.querySelector(".specials");
    specials.innerHTML = "<div>SPECIALS</div>";
  }
  window.addEventListener("keyup", findMatchAndHighlight);
  if (createWordInterval === null) {
    createWordInterval = setInterval(function () {
      wordTimeout = setTimeout(() => {
        createWordDiv(level);
      }, Math.random() * 500);
    }, 600);
  } else if (isPaused) {
    toggleCreateWord();
  }
  typedKeys.length = 0;
  passLevelLimit = 0;
  accuracy = 0;
  level++;
  selectWord = getSelectedWord(level);
  displayLevel(level);
  displayAccuracy(accuracy);
  displayPassLimit(passLevelLimit);
  displayScore(score);
}
function openOverlay() {
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("overlay-on");
}
function removeOverlay() {
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("overlay-on");
}

function openPopup(isGameOver) {
  if (iceTimeout !== null || slowTimeout !== null) {
    clearTimeout(iceTimeout);
    clearTimeout(slowTimeout);
  }
  const popup = document.querySelector(".popup");
  popup.classList.add("open-popup");
  const h3 = popup.querySelector(".level");

  if (isGameOver) {
    h3.innerText = "GAME OVER";
    const cntBtn = document.querySelector(".front");
    cntBtn.innerText = "PLAY AGAIN";
    const instruction = document.querySelector(".instruction");
    if (instruction !== null) {
      instruction.remove();
    }
  } else if (level === 0) {
    h3.innerText = "astrotype";
  } else {
    h3.innerText = "Level " + (level + 1);
    const instruction = document.querySelector(".instruction");
    if (instruction !== null) {
      instruction.remove();
    }
  }
  openOverlay();
  const popupBtn = document.querySelector(".continue-btn");
  popupBtn.addEventListener("click", closePopup);
  window.addEventListener("keyup", closePopupSpace);
}

function closePopup() {
  const popup = document.querySelector(".popup");
  popup.classList.remove("open-popup");
  const popupBtn = document.querySelector(".continue-btn");
  removeOverlay();
  popupBtn.removeEventListener("click", closePopup);
  window.removeEventListener("keyup", closePopupSpace);
  startGame();
}

function closePopupSpace(e) {
  if (e.code === "Space") {
    closePopup();
  }
}

openPopup(isGameOver);

// TODO: research why this part is probabilistic (source: https://stackoverflow.com/questions/21277900/how-can-i-pause-setinterval-functions)
function toggleCreateWord() {
  if (isPaused) {
    createWordInterval = setInterval(function () {
      wordTimeout = setTimeout(() => {
        createWordDiv(level);
      }, Math.random() * 500);
    }, 600);
    isPaused = false;
  } else {
    clearInterval(createWordInterval);
    clearTimeout(wordTimeout);
    isPaused = true;
  }
}

function checkAccuracy() {
  if (accuracy >= 10) {
    const typeWords = document.querySelectorAll(".type-word");
    typeWords.forEach((word) => word.remove());
    clearInterval(createWordInterval);
    clearTimeout(wordTimeout);
    isGameOver = true;
    const typedWords = document.querySelector(".typed-word");
    typedWords.innerText = "";
    openPopup(isGameOver);
    window.removeEventListener("keyup", findMatchAndHighlight);
  }
  if (passLevelLimit >= 100) {
    toggleCreateWord();
    const typeWords = document.querySelectorAll(".type-word");
    typeWords.forEach((word) => word.remove());
    openPopup(isGameOver);
    window.removeEventListener("keyup", findMatchAndHighlight);
  }
}

function displayLevel(x) {
  const display = document.querySelector(".display");
  const level = display.querySelector(".level");
  level.innerText = "Level " + x;
}

function displayAccuracy(x) {
  const accuracyDiv = document.querySelector(".accuracy");
  if (x !== 0) {
    const switchImg = accuracyDiv.querySelector("#img-" + accuracy);
    switchImg.src = "assets/switch-off.png";
    switchImg.classList.add("switch-off");
  } else if (x === 0 || isGameOver) {
    const switches = document.querySelectorAll(".switch");
    switches.forEach((switchItem) => {
      switchItem.style.display = "inline";
      switchItem.src = "assets/switch-on.png";
      switchItem.classList.remove("switch-off");
    });
  }
}

function displayPassLimit(x) {
  const passLimit = document.querySelector(".pass-limit-num");
  limitDisplay = x > 100 ? 100 : parseInt(x);
  passLimit.innerText = limitDisplay + "%";
  const passLimitBar = document.querySelector(".bar");
  passLimitBar.style.width = limitDisplay + "%";
}

function displayScore(x) {
  const score = document.querySelector(".score");
  score.innerText = "Score: " + x;
}

function animationEndHandler(e) {
  if (matchedWords.includes(e.target)) {
    matchedWords.splice(matchedWords.indexOf(e.target), 1);
  }
  accuracy += 1;
  displayAccuracy(accuracy);
  checkAccuracy();
  e.target.remove();
}

function getSelectedWord(level) {
  let minLength = 0;
  let maxLength = 0;
  if (level > 30) {
    minLength = 5;
    maxLength = 13;
  } else {
    minLength = minMaxLength[level].min;
    maxLength = minMaxLength[level].max;
  }
  const selectWord = commonWords.filter(
    (word) => word.length <= maxLength && word.length >= minLength
  );
  return selectWord;
}
function createWordDiv(level) {
  const container = document.querySelector(".container");
  const word = document.createElement("div");
  word.style.left = Math.random() * 430 + 10 + "px";
  let duration = 13 / (1 + level / 25) - Math.random() * 3;
  word.style.animationDuration = duration + "s";
  word.className = "type-word";
  let randomizeSpecialCloud = Math.random();
  if (randomizeSpecialCloud < 0.1) {
    word.classList.add("fire");
  } else if (randomizeSpecialCloud < 0.2) {
    word.classList.add("ice");
  } else if (randomizeSpecialCloud < 0.3) {
    word.classList.add("heal");
  } else if (randomizeSpecialCloud < 0.4) {
    word.classList.add("slow");
  }
  let index = Math.floor(Math.random() * selectWord.length);
  word.innerText = selectWord[index];
  selectWord.splice(index, 1);
  if (selectWord.length === 0) {
    selectWord = getSelectedWord(level);
  }
  word.addEventListener("animationend", animationEndHandler);
  container.appendChild(word);

  return word;
}

function displayTypedKeys(typedKeys) {
  const typedWord = document.querySelector(".typed-word");
  typedWord.innerHTML = typedKeys.join("");
}

function addAnimation(anim) {
  dynamicStyles = document.createElement("style");
  document.head.appendChild(dynamicStyles);
  dynamicStyles.sheet.insertRule(anim, dynamicStyles.length);
}

function createSpecialClouds(wordClassName) {
  const specials = document.querySelector(".specials");
  if (specials.children.length < 8) {
    const specialCloud = document.createElement("div");
    specialCloud.className = `${wordClassName}-cloud`;
    specialCloud.classList.add(wordClassName);
    specialCloud.innerText = wordClassName.toUpperCase();
    specials.appendChild(specialCloud);
  }
}

function fasterDropSpeed(word) {
  let rect = word.getBoundingClientRect(); //https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
  addAnimation(`
            @keyframes descend-faster-${animationId} {
              0% {
                transform: translateY(${rect.top - 1}px);
              }
              100% {
                transform: translateY(500px);
              }
            }
          `);
  let duration = 13 / (1 + level / 25);
  word.style.animation = `descend-faster-${animationId} ${
    (500 - rect.top + 1) / (((500 - 10) / duration) * 3)
  }s linear`;
  animationId++;
}
function findMatchAndHighlight(e) {
  if (matchedWords.length !== 0) {
    prevMatchedWords = [...matchedWords];
  }

  if (e.key === "Backspace") {
    typedKeys.pop();
  } else if (e.key === "Enter") {
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

        // if the iceTimeout is triggered before
        if (iceTimeout !== null) {
          clearTimeout(iceTimeout);
          typeWords.forEach((div) => {
            if (div.style.animationPlayState === "paused") {
              div.style.animationPlayState = "running";
            }
          });
        }
        if (!isPaused) {
          toggleCreateWord();
        }

        typeWords.forEach((div) => {
          div.style.animationPlayState = "paused";
        });
        iceTimeout = setTimeout(() => {
          typeWords.forEach((div) => {
            div.style.animationPlayState = "running";
          });
          if (isPaused) {
            toggleCreateWord();
          }
        }, 6000);
        specialIce.remove();
      }
    } else if (typedKeys.join("") === "heal") {
      const specialHeal = document.querySelector(".heal-cloud");
      if (specialHeal !== null) {
        accuracy = 0;
        displayAccuracy(accuracy);
      }
      specialHeal.remove();
    } else if (typedKeys.join("") === "slow") {
      const specialSlow = document.querySelector(".slow-cloud");
      if (specialSlow !== null) {
        const container = document.querySelector(".container");
        container.classList.add("slow-down");
        console.log(container.style);
        setTimeout(() => {
          container.classList.remove("slow-down");
        }, 5000);
      }
      specialSlow.remove();
    } else {
      // TODO: separate to different function
      matchedWords.forEach((word) => {
        if (word.innerText === typedKeys.join("")) {
          if (word.classList.contains("fire")) {
            createSpecialClouds("fire");
          } else if (word.classList.contains("ice")) {
            createSpecialClouds("ice");
          } else if (word.classList.contains("slow")) {
            createSpecialClouds("slow");
          } else if (word.classList.contains("heal")) {
            createSpecialClouds("heal");
          }
          passLevelLimit += Math.round(Math.random()) + 10 / (1 + level / 40);
          score += word.innerText.length * 100 + Math.round(Math.random()) + 1;
          displayPassLimit(passLevelLimit);
          displayScore(score);
          word.remove();
        } else {
          fasterDropSpeed(word);
        }
      });
      prevMatchedWords.forEach((word) => {
        if (!matchedWords.includes(word)) {
          fasterDropSpeed(word);
        }
      });
    }
    matchedWords.length = 0;
    typedKeys.length = 0;
    checkAccuracy();
  } else if (/^[a-zA-Z]$/.test(e.key)) {
    typedKeys.push(e.key.toLowerCase());
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
}
