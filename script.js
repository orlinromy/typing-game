// for testing only
const commonWords = [
  "questionable",
  "suffer",
  "useful",
  "red",
  "languid",
  "ship",
  "lame",
  "rake",
  "hobbies",
  "view",
  "treatment",
  "ticket",
  "hat",
  "punch",
  "pin",
  "righteous",
  "breathe",
  "caring",
  "limit",
  "rabid",
  "sordid",
  "spot",
  "oven",
  "innocent",
  "driving",
  "drum",
  "responsible",
  "purple",
  "mend",
  "shock",
  "shade",
  "feigned",
  "vague",
  "frogs",
  "oatmeal",
  "unequal",
  "discovery",
  "appear",
  "spark",
  "trees",
  "pet",
  "provide",
  "happy",
  "creature",
  "sick",
  "thundering",
  "acrid",
  "amuse",
  "clip",
  "annoyed",
  "coil",
  "cows",
  "concerned",
  "dock",
  "blood",
  "funny",
  "bizarre",
  "oil",
  "train",
  "heady",
  "bloody",
  "damp",
  "quick",
  "muddled",
  "messy",
  "foamy",
  "protect",
  "quarrelsome",
  "mom",
  "cheerful",
  "count",
  "sharp",
  "settle",
  "confuse",
  "superficial",
  "warm",
  "pies",
  "race",
  "scribble",
  "stuff",
  "design",
  "salty",
  "domineering",
  "stew",
  "number",
  "wail",
  "occur",
  "scribble",
  "smash",
  "punish",
  "seat",
  "tug",
  "sense",
  "blow",
  "addition",
  "close",
  "cakes",
  "goofy",
  "interest",
  "curved",
  "boat",
  "zip",
  "train",
  "substantial",
  "form",
  "frogs",
  "scissors",
  "careful",
  "laugh",
  "alarm",
  "coach",
  "perpetual",
  "fruit",
  "approve",
  "false",
  "respect",
  "staking",
  "selection",
  "snow",
  "intelligent",
  "clumsy",
  "outrageous",
  "husky",
  "taste",
  "gabby",
  "look",
  "sneeze",
  "ruthless",
  "swanky",
  "early",
  "perfect",
  "unfasten",
  "sedate",
  "spoil",
  "upbeat",
  "request",
  "difficult",
  "edge",
  "account",
  "picayune",
  "mask",
  "page",
  "living",
  "camera",
  "bucket",
  "spooky",
  "pies",
  "bait",
  "eight",
  "sleet",
  "numberless",
  "whisper",
  "outgoing",
  "representative",
  "hydrant",
  "flame",
  "cynical",
  "beam",
  "brass",
  "sneeze",
  "literate",
  "boil",
  "rinse",
  "love",
  "silky",
  "observe",
  "watch",
  "step",
  "fallacious",
  "employ",
  "unsightly",
  "person",
  "telling",
  "fancy",
  "bizarre",
  "wary",
  "flat",
  "cross",
  "wrong",
  "clear",
  "fireman",
  "mushy",
  "bushes",
  "aromatic",
  "bustling",
  "uttermost",
  "bubble",
  "reproduce",
  "thoughtless",
  "brief",
  "bruise",
  "girls",
  "caring",
  "incompetent",
  "bawdy",
  "wait",
  "sore",
  "bury",
  "squirrel",
  "abounding",
  "grey",
  "interfere",
  "idiotic",
  "disappear",
  "dinosaurs",
  "foamy",
  "describe",
  "screeching",
  "awesome",
  "men",
  "race",
  "large",
  "purpose",
  "suggest",
  "steel",
  "debonair",
  "paddle",
  "twist",
  "sea",
  "governor",
  "road",
  "roll",
  "oranges",
  "nappy",
  "roasted",
  "egg",
  "airplane",
  "monkey",
  "butter",
  "succinct",
  "flesh",
  "delicate",
  "crowd",
  "deliver",
  "venomous",
  "grin",
  "offer",
  "queue",
  "eatable",
  "alluring",
  "use",
  "hilarious",
  "frame",
  "wry",
  "word",
  "punish",
  "carve",
  "interesting",
  "frog",
  "madly",
  "legal",
  "imminent",
  "alive",
  "difficult",
  "superb",
  "seal",
  "letters",
  "filthy",
  "cute",
  "futuristic",
  "offer",
  "increase",
  "detail",
  "tub",
  "obey",
  "laugh",
  "uttermost",
  "smell",
  "first",
  "unbecoming",
  "care",
  "laugh",
  "ambitious",
  "addicted",
  "spicy",
  "pumped",
  "wasteful",
  "string",
  "airplane",
  "jellyfish",
  "knowledgeable",
  "small",
  "stir",
  "normal",
  "entertain",
  "dust",
  "invite",
  "wiggly",
  "influence",
  "rub",
  "cakes",
  "smooth",
  "afraid",
  "unadvised",
  "queue",
  "border",
  "rambunctious",
  "rod",
  "skillful",
  "violet",
  "mundane",
  "quizzical",
  "poke",
  "frame",
  "sturdy",
  "bashful",
  "wary",
  "unite",
  "fancy",
  "tooth",
  "hill",
  "teaching",
  "greasy",
  "serious",
  "holiday",
  "attack",
  "mice",
  "smell",
  "ordinary",
  "toes",
  "heavy",
  "overrated",
  "calculating",
  "decay",
  "rustic",
  "oval",
  "breath",
  "bury",
  "unsightly",
  "satisfying",
  "high",
  "grape",
  "bell",
  "mitten",
  "button",
  "embarrass",
  "shop",
  "agreement",
  "distance",
  "curve",
  "prick",
  "daffy",
  "force",
  "purring",
  "woman",
  "guiltless",
  "downtown",
  "flag",
  "scorch",
  "wail",
  "offer",
  "heal",
  "mute",
  "regular",
  "filthy",
  "harsh",
  "worry",
  "cautious",
  "time",
  "statuesque",
  "flippant",
  "berry",
  "royal",
  "charge",
  "righteous",
  "short",
  "trouble",
  "flesh",
  "sail",
  "colour",
  "defiant",
  "scandalous",
  "bike",
  "paddle",
  "match",
  "lamentable",
  "hateful",
  "subsequent",
  "attractive",
  "super",
  "aftermath",
  "need",
  "repeat",
  "lean",
  "zephyr",
  "offend",
  "distinct",
  "nippy",
  "dear",
  "plant",
  "mark",
  "disillusioned",
  "scarecrow",
  "reflect",
  "industry",
  "natural",
  "understood",
  "cooing",
  "jewel",
  "minister",
  "rhetorical",
  "silent",
  "quiet",
  "slip",
  "ancient",
  "fold",
  "damage",
  "object",
  "snow",
  "jail",
  "grate",
  "knee",
  "hover",
  "treat",
  "sweater",
  "dime",
  "cold",
  "gifted",
  "snotty",
  "frighten",
  "partner",
  "believe",
  "pink",
  "writer",
  "cough",
  "gaping",
  "abundant",
  "land",
  "suit",
  "endurable",
  "spotty",
  "lovely",
  "tasteful",
  "soft",
  "delicious",
  "frogs",
  "whimsical",
  "earthy",
  "guarded",
  "crown",
  "aunt",
  "tank",
  "terrify",
  "form",
  "interfere",
  "tightfisted",
  "offer",
  "degree",
  "jewel",
  "general",
  "regret",
  "eyes",
  "aromatic",
  "charge",
  "horn",
  "buzz",
  "squeak",
  "disastrous",
  "dime",
  "large",
  "educated",
  "baby",
  "crayon",
  "blood",
  "enthusiastic",
  "blink",
  "cold",
  "succinct",
  "condemned",
  "mark",
  "river",
  "stale",
  "excited",
  "cheer",
  "recess",
  "quiver",
  "chase",
  "land",
  "effect",
  "billowy",
  "overt",
  "future",
  "representative",
  "provide",
  "spiritual",
  "route",
  "daffy",
  "whisper",
  "ancient",
  "middle",
  "misty",
  "produce",
  "wobble",
  "boorish",
  "young",
  "rightful",
  "story",
  "imported",
  "wiry",
  "laugh",
  "sack",
  "crown",
  "shrug",
  "garrulous",
  "verse",
  "superb",
  "tacit",
  "rhyme",
  "pull",
  "functional",
  "carry",
  "permit",
  "force",
  "political",
  "cagey",
  "hum",
  "puffy",
  "colossal",
  "obey",
  "radiate",
  "evasive",
  "tired",
  "amusing",
  "disapprove",
  "attack",
  "shade",
  "cloth",
  "things",
  "steer",
  "way",
  "polish",
  "sail",
  "winter",
  "crime",
  "appreciate",
  "start",
  "excellent",
  "mass",
  "obsolete",
  "spill",
  "race",
  "colorful",
  "prick",
  "whirl",
  "man",
  "defiant",
  "abounding",
  "stain",
  "cheat",
  "red",
  "educate",
  "needy",
  "zebra",
  "plain",
  "lush",
  "alert",
  "calendar",
  "knock",
  "jaded",
  "things",
  "magical",
  "unit",
  "fresh",
  "time",
  "repeat",
  "quack",
  "hope",
  "experience",
  "protect",
  "word",
  "analyse",
  "surround",
  "suffer",
  "dynamic",
  "example",
  "bizarre",
  "glamorous",
  "pine",
  "receive",
  "need",
  "classy",
  "license",
  "lovely",
  "furry",
  "friction",
  "promise",
  "bubble",
  "unknown",
  "flood",
  "noisy",
  "outrageous",
  "jobless",
  "neighborly",
  "smooth",
  "craven",
  "hydrant",
  "miniature",
  "private",
  "embarrass",
  "fabulous",
  "hand",
  "jump",
  "royal",
  "tight",
  "wander",
  "noiseless",
  "slimy",
  "sweltering",
  "dreary",
  "record",
  "flashy",
  "nippy",
  "thumb",
  "sloppy",
  "flaky",
  "exchange",
  "doubtful",
  "sleep",
  "few",
  "pine",
  "lame",
  "condemned",
  "wash",
  "tiny",
  "fold",
  "stereotyped",
  "devilish",
  "dog",
  "chickens",
  "brick",
  "cure",
  "aboriginal",
  "step",
  "eminent",
  "hydrant",
  "sincere",
  "drawer",
  "nervous",
  "fine",
  "fixed",
  "idiotic",
  "meddle",
  "waste",
  "lie",
  "abandoned",
  "thrill",
  "sticky",
  "resolute",
  "cemetery",
  "soak",
  "strengthen",
  "future",
  "barbarous",
  "pleasure",
  "store",
  "unsightly",
  "rightful",
  "harmonious",
  "camp",
  "humorous",
  "surprise",
  "nondescript",
  "unknown",
  "fairies",
  "trains",
  "dapper",
  "observant",
  "learned",
  "profit",
  "bathe",
  "difficult",
  "expensive",
  "paltry",
  "float",
  "daffy",
  "heap",
  "sad",
  "angry",
  "announce",
  "color",
  "broad",
  "rush",
  "look",
  "hanging",
  "simple",
  "fear",
  "taste",
  "start",
  "succinct",
  "fabulous",
  "nerve",
  "trip",
  "cross",
  "callous",
  "learned",
  "curve",
  "grade",
  "wait",
  "lush",
  "ablaze",
  "guide",
  "nation",
  "thrill",
  "lavish",
  "volleyball",
  "believe",
  "oatmeal",
  "flock",
  "probable",
  "ambiguous",
  "stocking",
  "telephone",
  "maid",
  "clear",
  "numerous",
  "skip",
  "internal",
  "mug",
  "beginner",
  "seemly",
  "spill",
  "locket",
  "cure",
  "abrasive",
  "edge",
  "price",
  "instinctive",
  "risk",
  "plan",
  "toothsome",
  "scale",
  "preach",
  "few",
  "alike",
  "bizarre",
  "grass",
  "agreeable",
  "calm",
  "nest",
  "lopsided",
  "peel",
  "wary",
  "wistful",
  "zoo",
  "certain",
  "provide",
  "worried",
  "thread",
  "brother",
  "point",
  "tendency",
  "basketball",
  "malicious",
  "sweater",
  "jar",
  "furry",
  "food",
  "pine",
  "fearless",
  "needless",
  "screeching",
  "shy",
  "erratic",
  "rain",
  "near",
  "hateful",
  "sore",
  "rotten",
  "spoil",
  "sedate",
  "dress",
  "paste",
  "difficult",
  "talk",
  "governor",
  "scrawny",
  "run",
  "deliver",
  "railway",
  "honey",
  "low",
  "sugar",
  "shock",
  "place",
  "coil",
  "concern",
  "wrap",
  "stretch",
  "worthless",
  "stormy",
  "office",
  "smash",
  "example",
  "needless",
  "guiltless",
  "bumpy",
  "pale",
  "spark",
  "square",
  "please",
  "mute",
  "suggest",
  "polish",
  "colossal",
  "recognise",
  "crash",
  "expert",
  "spiteful",
  "coal",
  "guarded",
  "sparkle",
  "sprout",
  "cent",
  "supreme",
  "spooky",
  "money",
  "rain",
  "five",
  "disagree",
  "lean",
  "plate",
  "confuse",
  "wreck",
  "arrogant",
  "snow",
  "arrest",
  "depend",
  "blink",
  "destruction",
  "cynical",
  "clip",
  "realise",
  "cute",
  "malicious",
  "cough",
  "pine",
  "worthless",
  "flagrant",
  "sticky",
  "workable",
  "unkempt",
  "strap",
  "owe",
  "wipe",
  "island",
  "cats",
  "ink",
  "wish",
  "faint",
  "channel",
  "title",
  "arrest",
  "committee",
  "cap",
  "thumb",
  "vulgar",
  "return",
  "gather",
  "smile",
  "start",
  "jumbled",
  "year",
  "measure",
  "smooth",
  "cynical",
  "grip",
  "disarm",
  "angle",
  "confuse",
  "damp",
  "zippy",
  "steer",
  "letter",
  "exultant",
  "planes",
  "murder",
  "invite",
  "grieving",
  "ajar",
  "sweet",
  "calculating",
  "filthy",
  "copy",
  "funny",
  "ablaze",
  "rain",
  "smash",
  "fearless",
  "tight",
  "toe",
  "ludicrous",
  "jittery",
  "stone",
  "frog",
  "curve",
  "low",
  "admire",
  "jaded",
  "wacky",
  "view",
  "hulking",
  "concentrate",
  "sound",
  "godly",
  "own",
  "cheap",
  "profuse",
  "painful",
  "scratch",
  "egg",
  "humorous",
  "hurry",
  "wire",
  "apathetic",
  "abrupt",
  "highfalutin",
  "wonder",
  "tick",
  "quack",
  "wary",
  "comparison",
  "hot",
  "handy",
  "moan",
  "beginner",
  "tense",
  "lacking",
  "mailbox",
  "stale",
  "square",
  "zip",
  "increase",
  "zephyr",
  "fear",
  "porter",
  "perform",
  "start",
  "wail",
  "chin",
  "silent",
  "dam",
  "prick",
  "bored",
  "obeisant",
  "airplane",
  "wire",
  "word",
  "income",
  "null",
  "internal",
  "powerful",
  "oafish",
  "tested",
  "pastoral",
  "redundant",
  "gun",
  "drain",
  "offend",
  "borrow",
  "scarecrow",
  "hesitant",
  "abusive",
  "robust",
  "flashy",
  "childlike",
  "past",
  "oval",
  "shaky",
  "cheese",
  "lumpy",
  "fantastic",
  "separate",
  "smart",
  "panoramic",
  "moan",
  "loss",
  "bucket",
  "cheer",
  "cautious",
  "pin",
  "known",
  "glove",
  "puncture",
  "decorous",
  "stare",
  "functional",
  "identify",
  "numerous",
  "hot",
  "maddening",
  "pretend",
];

const typedKeys = [];
const matchedWords = [];
let prevMatchedWords = [];
let accuracy = 0;
let passLevelLimit = 0;
let score = 0;
let animationId = 0;
let dynamicStyles = null; // (https://stackoverflow.com/questions/59573722/how-can-i-set-a-css-keyframes-in-javascript)
let level = 1;
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
};
let iceTimeout = null;

function checkAccuracy() {
  if (accuracy >= 100) {
    const typeWords = document.querySelectorAll(".type-word");
    typeWords.forEach((word) => word.remove());
    clearInterval(createWordInterval);
    const display = document.querySelector(".display");
    display.innerHTML = `<h3>GAME OVER</h3>`;
  }
  if (passLevelLimit >= 100) {
    toggleCreateWord();
    const typeWords = document.querySelectorAll(".type-word");
    typeWords.forEach((word) => word.remove());

    setTimeout(() => {
      toggleCreateWord();
    }, 5000);
    passLevelLimit = 0;
    accuracy = 0;
    level++;
    displayLevel(level);
    displayAccuracy(accuracy);
    displayPassLimit(passLevelLimit);
  }
}

function displayLevel(x) {
  const level = document.querySelector(".level");
  level.innerText = "Level " + x;
}

function displayAccuracy(x) {
  const accuracy = document.querySelector(".accuracy");
  accuracyDisplay = x > 100 ? 100 : x;
  accuracy.innerText = "Accuracy Penalty: " + accuracyDisplay + "%";
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

function createWordDiv(level) {
  let selectWord = commonWords.filter(
    (word) =>
      word.length <= minMaxLength[level].max &&
      word.length >= minMaxLength[level].min
  );
  console.log("selected word length: ", selectWord.length);
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
  word.innerText = selectWord[Math.floor(Math.random() * selectWord.length)];
  word.addEventListener("animationend", animationEndHandler);
  container.appendChild(word);

  return word;
}

function displayTypedKeys(typedKeys) {
  const typedWord = document.querySelector(".typed-word");
  typedWord.innerHTML = typedKeys.join("");
}

function addAnimation(body) {
  dynamicStyles = document.createElement("style");
  dynamicStyles.type = "text/css";
  document.head.appendChild(dynamicStyles);

  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

function findMatchAndHighlight(e) {
  if (matchedWords.length !== 0) {
    prevMatchedWords = [...matchedWords];
  }
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
          toggleCreateWord();
        }, 6000);
        specialIce.remove();
      }
    } else {
      // TODO: separate to different function
      matchedWords.forEach((word) => {
        if (word.innerText === typedKeys.join("")) {
          if (word.classList.contains("fire")) {
            const specials = document.querySelector(".specials");
            if (specials.children.length < 8) {
              const specialCloud = document.createElement("div");
              specialCloud.className = "fire-cloud";
              specialCloud.innerText = "FIRE";
              specials.appendChild(specialCloud);
            }
          } else if (word.classList.contains("ice")) {
            const specials = document.querySelector(".specials");
            if (specials.children.length < 8) {
              const specialCloud = document.createElement("div");
              specialCloud.className = "ice-cloud";
              specialCloud.innerText = "ICE";
              specials.appendChild(specialCloud);
            }
          }
          passLevelLimit += Math.round(Math.random()) + 10;
          score += word.innerText.length * 100 + Math.round(Math.random()) + 1;
          displayPassLimit(passLevelLimit);
          displayScore(score);
          word.remove();
        } else {
          let rect = word.getBoundingClientRect(); //https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element

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

window.addEventListener("keyup", findMatchAndHighlight);

let createWordInterval = setInterval(function () {
  // checkAccuracy();
  createWordDiv(level);
}, Math.random() * 500 + 1000);
let isPaused = false;

// TODO: research why this part is probabilistic (source: https://stackoverflow.com/questions/21277900/how-can-i-pause-setinterval-functions)
function toggleCreateWord() {
  if (isPaused) {
    createWordInterval = setInterval(function () {
      // checkAccuracy();
      createWordDiv(level);
    }, Math.random() * 500 + 1000);
    isPaused = false;
  } else {
    clearInterval(createWordInterval);
    isPaused = true;
  }
}
