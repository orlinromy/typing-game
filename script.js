const commonWords = [
  "purple",
  "burn",
  "plain",
  "collect",
  "structure",
  "clam",
  "eggnog",
  "fit",
  "yawn",
  "cough",
  "replace",
  "macho",
  "corn",
  "steep",
  "flap",
  "gold",
  "riddle",
  "great",
  "guitar",
  "shiny",
  "accidental",
  "bubble",
  "hobbies",
  "hot",
  "defective",
  "wrong",
  "military",
  "selection",
  "battle",
  "tame",
  "hammer",
  "grotesque",
  "elbow",
  "exchange",
  "crowd",
  "giddy",
  "promise",
  "gather",
  "underwear",
  "press",
  "dry",
  "damaging",
  "thrill",
  "productive",
  "eager",
  "coach",
  "reflect",
  "unite",
  "addicted",
  "cows",
  "dolls",
  "caring",
  "test",
  "unadvised",
  "strip",
  "passenger",
  "embarrass",
  "shivering",
  "sturdy",
  "imagine",
  "new",
  "aquatic",
  "outrageous",
  "gratis",
  "limit",
  "bent",
  "surprise",
  "sisters",
  "ghost",
  "playground",
  "unsuitable",
  "small",
  "dock",
  "gun",
  "zealous",
  "rain",
  "water",
  "pop",
  "curvy",
  "bitter",
  "opposite",
  "summer",
  "intend",
  "cause",
  "sort",
  "look",
  "chilly",
  "brawny",
  "rude",
  "sugar",
  "clean",
  "range",
  "anxious",
  "industrious",
  "unarmed",
  "trite",
  "rush",
  "balance",
  "rare",
  "kiss",
  "thinkable",
  "fowl",
  "hesitant",
  "manage",
  "yoke",
  "learn",
  "please",
  "thick",
  "dusty",
  "disgusted",
  "old",
  "mist",
  "obey",
  "workable",
  "wrestle",
  "frame",
  "daughter",
  "arrest",
  "cowardly",
  "allow",
  "car",
  "houses",
  "name",
  "earthy",
  "position",
  "rule",
  "existence",
  "offer",
  "authority",
  "baseball",
  "card",
  "value",
  "deadpan",
  "loss",
  "flower",
  "tumble",
  "thin",
  "shallow",
  "scarf",
  "immense",
  "ray",
  "null",
  "repair",
  "ignore",
  "puzzling",
  "film",
  "quarrelsome",
  "taste",
  "pail",
  "voiceless",
  "longing",
  "protest",
  "angry",
  "receipt",
  "marvelous",
  "creature",
  "whimsical",
  "sparkling",
  "drink",
  "concerned",
  "thank",
  "impartial",
  "signal",
  "sticks",
  "tax",
  "dust",
  "colossal",
  "regular",
  "inject",
  "absent",
  "righteous",
  "borrow",
  "border",
  "texture",
  "doubt",
  "annoy",
  "puffy",
  "unfasten",
  "guard",
  "jagged",
  "annoyed",
  "tough",
  "imaginary",
  "tow",
  "settle",
  "bumpy",
  "disastrous",
  "highfalutin",
  "push",
  "bawdy",
  "five",
  "wren",
  "hands",
  "white",
  "potato",
  "long",
  "hanging",
  "knee",
  "tall",
  "protect",
  "judge",
  "slimy",
  "letters",
  "mug",
  "strap",
  "cover",
  "level",
  "spotty",
  "roll",
  "naughty",
  "ugliest",
  "recondite",
  "dazzling",
  "terrific",
  "treatment",
  "uppity",
  "knowing",
  "rings",
  "uncovered",
  "remind",
  "drawer",
  "shirt",
  "versed",
  "thing",
  "bathe",
  "watch",
  "possess",
  "bucket",
  "jail",
  "number",
  "terrible",
  "juice",
  "nauseating",
  "spectacular",
  "part",
  "sour",
  "rose",
  "stone",
  "blot",
  "remember",
  "title",
  "enthusiastic",
  "wash",
  "average",
  "funny",
  "jewel",
  "faulty",
  "wealthy",
  "grain",
  "floor",
  "fill",
  "support",
  "cracker",
  "bored",
  "cast",
  "plant",
  "envious",
  "nut",
  "cautious",
  "pastoral",
  "actor",
  "join",
  "wonder",
  "decorate",
  "homeless",
  "remove",
  "secondhand",
  "acceptable",
  "clap",
  "delight",
  "curve",
  "whistle",
  "macabre",
  "sip",
  "birthday",
  "gaping",
  "changeable",
  "money",
  "married",
  "grieving",
  "advertisement",
  "reminiscent",
  "sail",
  "horn",
  "chess",
  "mouth",
  "gusty",
  "equal",
  "robin",
  "board",
  "incompetent",
  "helpful",
  "hydrant",
  "ski",
  "event",
  "eyed",
  "blue",
  "nonstop",
  "husky",
  "knot",
  "experience",
  "move",
  "stroke",
  "absurd",
  "questionable",
  "heat",
  "office",
  "command",
  "ambitious",
  "aftermath",
  "tricky",
  "combative",
  "suit",
  "detailed",
  "idiotic",
  "melt",
  "safe",
  "tree",
  "mean",
  "expensive",
  "lock",
  "zoom",
  "pollution",
  "brainy",
  "view",
  "amusement",
  "grandmother",
  "foamy",
  "carriage",
  "high",
  "story",
  "find",
  "murder",
  "blade",
  "excuse",
  "gruesome",
  "loose",
  "hapless",
  "abundant",
  "complex",
  "kittens",
  "smile",
  "ear",
  "correct",
  "bells",
  "interest",
  "trade",
  "camp",
  "grin",
  "breezy",
  "meaty",
  "partner",
  "servant",
  "even",
  "glib",
  "bait",
  "destroy",
  "fat",
  "humdrum",
  "vigorous",
  "worthless",
  "kill",
  "fast",
  "savory",
  "good",
  "scientific",
  "harmony",
  "development",
  "hunt",
  "uncle",
  "side",
  "spiky",
  "consist",
  "tire",
  "left",
  "sharp",
  "wiggly",
  "pass",
  "drop",
  "liquid",
  "encourage",
  "glow",
  "dashing",
  "wry",
  "coat",
  "insidious",
  "rich",
  "ludicrous",
  "interesting",
  "racial",
  "happen",
  "argue",
  "talented",
  "nod",
  "spiteful",
  "agonizing",
  "damp",
  "help",
  "smoke",
  "volatile",
  "month",
  "three",
  "groomed",
  "unit",
  "private",
  "enormous",
  "energetic",
  "pancake",
  "admire",
  "owe",
  "shop",
  "advise",
  "horrible",
  "harmonious",
  "mess",
  "up",
  "peaceful",
  "trucks",
  "awful",
  "cruel",
  "bang",
  "suggestion",
  "soak",
  "increase",
  "saw",
  "plough",
  "laughable",
  "face",
  "unhealthy",
  "chickens",
  "reward",
  "amount",
  "glistening",
  "serve",
  "whirl",
  "driving",
  "mountain",
  "quiet",
  "own",
  "flashy",
  "scorch",
  "acrid",
  "big",
  "exercise",
  "meeting",
  "itch",
  "decay",
  "tomatoes",
  "silly",
  "wine",
  "aberrant",
  "kind",
  "earth",
  "noise",
  "actually",
  "screw",
  "splendid",
  "giraffe",
  "run",
  "mindless",
  "rightful",
  "jeans",
  "mine",
  "selective",
  "used",
  "hook",
  "undress",
  "flood",
  "legal",
  "attraction",
  "vague",
  "shake",
  "park",
  "whispering",
  "useless",
  "excite",
  "buzz",
  "scarce",
  "bridge",
  "spiders",
  "superb",
  "adventurous",
  "assorted",
  "devilish",
  "hurt",
  "chance",
  "cheese",
  "rigid",
  "realise",
  "stare",
  "wax",
  "tiresome",
  "breathe",
  "abusive",
  "fantastic",
  "melted",
  "growth",
  "neat",
  "cut",
  "melodic",
  "lame",
  "door",
  "quince",
  "land",
  "stain",
  "frighten",
  "robust",
  "shoes",
  "sea",
  "informed",
  "instrument",
  "bad",
  "young",
  "exotic",
  "harsh",
  "hysterical",
  "divide",
  "sponge",
  "invention",
  "curly",
  "needless",
  "miscreant",
  "tank",
  "writer",
  "tug",
  "crack",
  "numerous",
  "credit",
  "share",
  "yard",
  "jam",
  "panicky",
  "nimble",
  "lie",
  "efficient",
  "upset",
  "mysterious",
  "belong",
  "swim",
  "ocean",
  "breakable",
  "mint",
  "jobless",
  "wink",
  "girls",
  "sky",
  "pump",
  "weather",
  "produce",
  "representative",
  "listen",
  "metal",
  "lovely",
  "accessible",
  "disagree",
  "rhyme",
  "fang",
  "feeble",
  "minor",
  "report",
  "amuse",
  "mitten",
  "tired",
  "perform",
  "spark",
  "guide",
  "bomb",
  "sweltering",
  "dare",
  "psychedelic",
  "furtive",
  "farm",
  "horse",
  "squirrel",
  "brown",
  "six",
  "panoramic",
  "loving",
  "ink",
  "optimal",
  "queen",
  "fearless",
  "godly",
  "desire",
  "grandiose",
  "tremendous",
  "erect",
  "cloudy",
  "pickle",
  "rejoice",
  "porter",
  "men",
  "supreme",
  "sofa",
  "redundant",
  "yam",
  "launch",
  "parched",
  "fair",
  "broken",
  "untidy",
  "leather",
  "thirsty",
  "curious",
  "scary",
  "boiling",
  "stay",
  "physical",
  "polite",
  "ablaze",
  "behave",
  "wreck",
  "victorious",
  "hat",
  "quixotic",
  "tap",
  "government",
  "point",
  "war",
  "wrap",
  "wicked",
  "talk",
  "air",
  "internal",
  "want",
  "alert",
  "mass",
  "measure",
  "stop",
  "call",
  "next",
  "cheer",
  "juicy",
  "swift",
  "mixed",
  "waiting",
  "massive",
  "moan",
  "spot",
  "defiant",
  "many",
  "sign",
  "moon",
  "whine",
  "north",
  "capricious",
  "rainy",
  "comb",
  "spell",
  "wobble",
  "discovery",
  "pray",
  "cycle",
  "abhorrent",
  "far",
  "flung",
  "place",
  "accurate",
  "wakeful",
  "carry",
  "familiar",
  "tacit",
  "abiding",
  "stamp",
  "sack",
  "spiffy",
  "weigh",
  "parsimonious",
  "brick",
  "certain",
  "offend",
  "heavenly",
  "pot",
  "warm",
  "precede",
  "low",
  "nasty",
  "roof",
  "shave",
  "insurance",
  "tawdry",
  "need",
  "fact",
  "hurry",
  "juvenile",
  "tail",
  "bizarre",
  "wide",
  "overrated",
  "same",
  "expansion",
  "horses",
  "fasten",
  "arrogant",
  "receptive",
  "turn",
  "guiltless",
  "furniture",
  "recognise",
  "refuse",
  "inform",
  "purring",
  "ban",
  "crow",
  "minute",
  "jelly",
  "pretty",
  "kick",
  "jumpy",
  "noiseless",
  "grade",
  "type",
  "house",
  "sidewalk",
  "mundane",
  "materialistic",
  "plug",
  "aware",
  "insect",
  "fork",
  "walk",
  "trick",
  "plane",
  "stretch",
  "beneficial",
  "pigs",
  "pumped",
  "upbeat",
  "quiver",
  "visit",
  "destruction",
  "alike",
  "cabbage",
  "week",
  "nebulous",
  "tendency",
  "book",
  "lettuce",
  "synonymous",
  "dead",
  "kitty",
  "gifted",
  "glossy",
  "helpless",
  "delay",
  "condemned",
  "soup",
  "shock",
  "knock",
  "womanly",
  "mellow",
  "calm",
  "nine",
  "tested",
  "brush",
  "approval",
  "twist",
  "confess",
  "turkey",
  "permit",
  "chubby",
  "motionless",
  "fire",
  "tie",
  "hair",
  "elderly",
  "colorful",
  "reproduce",
  "excellent",
  "boil",
  "brake",
  "use",
  "fresh",
  "nerve",
  "person",
  "record",
  "short",
  "belligerent",
  "super",
  "nosy",
  "zippy",
  "wrench",
  "window",
  "claim",
  "obtain",
  "clumsy",
  "flippant",
  "pull",
  "brass",
  "imminent",
  "important",
  "mighty",
  "miss",
  "cherries",
  "exciting",
  "town",
  "gleaming",
  "hug",
  "soft",
  "current",
  "grey",
  "throne",
  "oafish",
  "wing",
  "volcano",
  "pen",
  "venomous",
  "tongue",
  "dam",
  "sun",
  "steadfast",
  "pin",
  "rabid",
  "boy",
  "grateful",
  "harm",
  "quack",
  "prefer",
  "meddle",
  "man",
  "cumbersome",
  "anger",
  "harbor",
  "throat",
  "ubiquitous",
  "relieved",
  "regret",
  "erratic",
  "excited",
  "oatmeal",
  "somber",
  "healthy",
  "beam",
  "afternoon",
  "question",
  "dynamic",
  "cool",
  "stupid",
  "warlike",
  "fated",
  "file",
  "earthquake",
  "clip",
  "develop",
  "annoying",
  "relax",
  "utter",
  "count",
  "digestion",
  "squeamish",
  "damage",
  "slave",
  "object",
  "acoustics",
  "garrulous",
  "store",
  "arrive",
  "poised",
  "sneaky",
  "bird",
  "design",
  "frogs",
  "magic",
  "medical",
  "unused",
  "abstracted",
  "bed",
  "lighten",
  "penitent",
  "calendar",
  "staking",
  "duck",
  "keen",
  "fence",
  "wood",
  "provide",
  "condition",
  "hurried",
  "vacuous",
  "powerful",
  "subtract",
  "faded",
  "equable",
  "front",
  "neighborly",
  "tray",
  "depressed",
  "toe",
  "crate",
  "drown",
  "sigh",
  "oval",
  "fold",
  "form",
  "pipe",
  "death",
  "zephyr",
  "peep",
  "quartz",
  "songs",
  "planes",
  "cup",
  "team",
  "middle",
  "birds",
  "yak",
  "burly",
  "note",
  "bear",
  "behavior",
  "early",
  "accept",
  "standing",
  "smoggy",
  "enchanted",
  "smelly",
  "rainstorm",
  "thread",
  "society",
  "sound",
  "malicious",
  "like",
  "sudden",
  "salt",
  "rhythm",
  "star",
  "lace",
  "fixed",
  "general",
  "pizzas",
  "request",
  "plants",
  "wrist",
  "vulgar",
  "FALSE",
  "sassy",
  "dime",
  "unequaled",
  "fancy",
  "polish",
  "faithful",
  "secretive",
  "violent",
  "weight",
  "motion",
  "phone",
  "reaction",
  "grouchy",
  "island",
  "analyse",
  "fish",
  "wheel",
  "spotless",
  "stormy",
  "kindhearted",
  "numberless",
  "agreeable",
  "second",
  "cross",
  "wrathful",
  "freezing",
  "quarter",
  "deserve",
  "return",
  "trot",
  "ratty",
  "scatter",
  "time",
  "line",
  "stuff",
  "abounding",
  "rate",
  "wish",
  "stimulating",
  "fuzzy",
  "dapper",
  "free",
  "limping",
  "calculate",
  "cooing",
  "van",
  "hum",
  "empty",
  "whip",
  "verse",
  "lumber",
  "drum",
  "fix",
  "blushing",
  "cat",
  "print",
  "ceaseless",
  "modern",
  "telephone",
  "flawless",
  "monkey",
  "box",
  "laborer",
  "punch",
  "property",
  "terrify",
  "lively",
  "defeated",
  "start",
  "order",
  "rock",
  "rest",
  "steer",
  "concern",
  "hand",
  "earn",
  "cute",
  "animal",
  "tasteful",
  "roomy",
  "grip",
  "waggish",
  "wholesale",
  "shocking",
  "alleged",
  "dogs",
  "stitch",
  "moldy",
  "adaptable",
  "guttural",
  "narrow",
  "raise",
  "charming",
  "pushy",
  "foolish",
  "yarn",
  "step",
  "eyed",
  "crook",
  "past",
  "action",
  "aloof",
  "pretend",
  "risk",
  "foot",
  "milky",
  "back",
  "scrawny",
  "bump",
  "trouble",
  "hate",
  "dog",
  "geese",
  "moor",
  "puzzled",
  "belief",
  "slap",
  "sink",
  "scandalous",
  "flash",
  "tart",
  "food",
  "troubled",
  "distance",
  "thaw",
  "eatable",
  "term",
  "enjoy",
  "learned",
  "placid",
  "knit",
  "filthy",
  "berserk",
  "love",
  "chunky",
  "sneeze",
  "half",
  "deserted",
  "illustrious",
  "cloistered",
  "adjustment",
  "oranges",
  "aboriginal",
  "seat",
  "cynical",
  "foregoing",
  "adhesive",
  "nonchalant",
  "release",
  "squeeze",
  "writing",
  "crib",
  "nappy",
  "hallowed",
  "welcome",
  "quizzical",
  "amused",
  "voracious",
  "zonked",
  "bite",
  "axiomatic",
  "continue",
  "fog",
  "acidic",
  "wind",
  "care",
  "drip",
  "adjoining",
  "amazing",
  "leg",
  "lush",
  "enchanting",
  "stove",
  "twig",
  "heavy",
  "daffy",
  "bushes",
  "direction",
  "suspect",
  "morning",
  "typical",
  "animated",
  "ignorant",
  "inconclusive",
  "sordid",
  "shrug",
  "station",
  "dad",
  "holiday",
  "sprout",
  "shiver",
  "zany",
  "calculating",
  "trip",
  "mature",
  "zesty",
  "attract",
  "royal",
  "ship",
  "late",
  "hateful",
  "spurious",
  "tidy",
  "smell",
  "improve",
  "tearful",
  "smooth",
  "profit",
  "overconfident",
  "bike",
  "picture",
  "marry",
  "juggle",
  "list",
  "blind",
  "afterthought",
  "crime",
  "evanescent",
  "ill",
  "yielding",
  "unable",
  "vanish",
  "mushy",
  "frightened",
  "self",
  "fretful",
  "boring",
  "nutritious",
  "canvas",
  "lethal",
  "meat",
  "barbarous",
  "hushed",
  "disgusting",
  "basketball",
  "flag",
  "unequal",
  "kettle",
  "seashore",
  "hellish",
  "territory",
  "substantial",
  "worm",
  "drab",
  "stocking",
  "didactic",
  "drunk",
  "onerous",
  "crowded",
  "majestic",
  "friendly",
  "abnormal",
  "desk",
  "frightening",
  "unbecoming",
  "dysfunctional",
  "spade",
  "size",
  "unlock",
  "tick",
  "muddled",
  "lyrical",
  "boundless",
  "nondescript",
  "fashioned",
  "stingy",
  "superficial",
  "giants",
  "ethereal",
  "room",
  "acoustic",
  "repulsive",
  "spare",
  "weary",
  "humorous",
  "verdant",
  "snakes",
  "furry",
  "square",
  "impossible",
  "boorish",
  "curtain",
  "quickest",
  "street",
  "friend",
  "friends",
  "party",
  "lewd",
  "boot",
  "error",
  "lowly",
  "feigned",
  "machine",
  "minister",
  "agreement",
  "chew",
  "fine",
  "sin",
  "expect",
  "separate",
  "lackadaisical",
  "bashful",
  "stranger",
  "successful",
  "loutish",
  "ritzy",
  "cooperative",
  "muscle",
  "overflow",
  "fortunate",
  "linen",
  "luxuriant",
  "apologise",
  "mailbox",
  "company",
  "guarded",
  "nail",
  "maid",
  "admit",
  "honorable",
  "addition",
  "mice",
  "friction",
  "wealth",
  "messy",
  "stereotyped",
  "ticket",
  "able",
  "save",
  "one",
  "bell",
  "jog",
  "knowledge",
  "ball",
  "comfortable",
  "sock",
  "literate",
  "hilarious",
  "railway",
  "salty",
  "magical",
  "necessary",
  "lean",
  "rotten",
  "moaning",
  "busy",
  "hang",
  "coordinated",
  "worried",
  "meal",
  "sheep",
  "coherent",
  "cure",
  "shelter",
  "lunchroom",
  "proud",
  "tan",
  "understood",
  "jumbled",
  "work",
  "present",
  "rabbit",
  "obsequious",
  "zebra",
  "rhetorical",
  "zip",
  "teeny",
  "tiny",
  "mind",
  "male",
  "tasteless",
  "skip",
  "pies",
  "snow",
  "jealous",
  "bless",
  "creepy",
  "snake",
  "trust",
  "burst",
  "pink",
  "goofy",
  "grandfather",
  "lick",
  "kneel",
  "market",
  "pig",
  "spoil",
  "obese",
  "hollow",
  "quilt",
  "rice",
  "contain",
  "craven",
  "top",
  "play",
  "language",
  "heal",
  "string",
  "son",
  "wonderful",
  "mute",
  "sense",
  "nation",
  "crooked",
  "circle",
  "slip",
  "humor",
  "beds",
  "communicate",
  "perfect",
  "lazy",
  "noxious",
  "extra",
  "large",
  "decisive",
  "woebegone",
  "pat",
  "material",
  "crash",
  "price",
  "quicksand",
  "deep",
  "expert",
  "reduce",
  "group",
  "punishment",
  "threatening",
  "appreciate",
  "flame",
  "soap",
  "rub",
  "red",
  "stick",
  "brash",
  "include",
  "bolt",
  "incandescent",
  "thoughtful",
  "automatic",
  "cheat",
  "classy",
  "iron",
  "tangible",
  "boat",
  "relation",
  "license",
  "paddle",
  "snobbish",
  "spill",
  "branch",
  "befitting",
  "wool",
  "plucky",
  "word",
  "historical",
  "prose",
  "attend",
  "flowers",
  "abashed",
  "pleasure",
  "plastic",
  "warn",
  "describe",
  "milk",
  "tease",
  "bead",
  "maddening",
  "complain",
  "blow",
  "eyes",
  "berry",
  "likeable",
  "veil",
  "quaint",
  "cakes",
  "drain",
  "glue",
  "float",
  "symptomatic",
  "receive",
  "shaky",
  "clover",
  "steam",
  "expand",
  "eight",
  "connect",
  "vacation",
  "grab",
  "slow",
  "painful",
  "identify",
  "resonant",
  "educate",
  "pitched",
  "clammy",
  "graceful",
  "spoon",
  "deafening",
  "teeth",
  "deeply",
  "cry",
  "raspy",
  "force",
  "valuable",
  "sedate",
  "basin",
  "decide",
  "witty",
  "meek",
  "vest",
  "piquant",
  "breath",
  "preserve",
  "cattle",
  "adorable",
  "fierce",
  "wiry",
  "curl",
  "laugh",
  "cannon",
  "instinctive",
  "fireman",
  "act",
  "try",
  "tangy",
  "vase",
  "arm",
  "woozy",
  "tense",
  "lunch",
  "hop",
  "nostalgic",
  "ragged",
  "science",
  "birth",
  "nose",
  "toys",
  "flat",
  "hospitable",
  "jittery",
  "marble",
  "bright",
  "home",
  "grape",
  "oven",
  "egg",
  "impress",
  "brother",
  "clear",
  "tour",
  "dizzy",
  "collar",
  "greasy",
  "abandoned",
  "ambiguous",
  "awesome",
  "pinch",
  "painstaking",
  "dispensable",
  "offbeat",
  "toy",
  "unique",
  "dark",
  "lake",
  "pale",
  "arrange",
  "celery",
  "grease",
  "route",
  "girl",
  "plan",
  "aromatic",
  "functional",
  "appliance",
  "disappear",
  "dirt",
  "sophisticated",
  "cushion",
  "cactus",
  "attempt",
  "purpose",
  "scintillating",
  "shade",
  "spiritual",
  "copper",
  "practise",
  "squealing",
  "agree",
  "yell",
  "diligent",
  "trace",
  "crush",
  "elite",
  "intelligent",
  "labored",
  "rescue",
  "shy",
  "willing",
  "retire",
  "resolute",
  "finicky",
  "confuse",
  "jazzy",
  "possessive",
  "auspicious",
  "toothbrush",
  "pear",
  "achiever",
  "cub",
  "dramatic",
  "gaze",
  "overjoyed",
  "cheap",
  "eggs",
  "scare",
  "right",
  "notice",
  "ancient",
  "beg",
  "scrub",
  "books",
  "coil",
  "club",
  "permissible",
  "rob",
  "bulb",
  "alarm",
  "trap",
  "murky",
  "abrupt",
  "load",
  "rampant",
  "flesh",
  "smash",
  "babies",
  "worry",
  "butter",
  "outstanding",
  "follow",
  "statement",
  "river",
  "sulky",
  "bath",
  "head",
  "ashamed",
  "dear",
  "hope",
  "wall",
  "ten",
  "telling",
  "tight",
  "chase",
  "plate",
  "believe",
  "class",
  "astonishing",
  "lonely",
  "solid",
  "interfere",
  "employ",
  "fuel",
  "common",
  "reach",
  "squash",
  "cemetery",
  "attack",
  "demonic",
  "train",
  "rambunctious",
  "rely",
  "flaky",
  "apparel",
  "secretary",
  "smiling",
  "incredible",
  "respect",
  "scent",
  "draconian",
  "trees",
  "romantic",
  "ice",
  "unpack",
  "decision",
  "can",
  "sleep",
  "spring",
  "touch",
  "desert",
  "adamant",
  "paltry",
  "blood",
  "odd",
  "languid",
  "wanting",
  "wound",
  "protective",
  "bury",
  "blush",
  "silent",
  "silver",
  "choke",
  "miniature",
  "thankful",
  "windy",
  "explain",
  "rapid",
  "omniscient",
  "steady",
  "cake",
  "abject",
  "basket",
  "suffer",
  "enter",
  "mate",
  "adhoc",
  "change",
  "wail",
  "public",
  "ripe",
  "argument",
  "amuck",
  "squalid",
  "women",
  "habitual",
  "naive",
  "committee",
  "day",
  "responsible",
  "influence",
  "heady",
  "bikes",
  "fragile",
  "vengeful",
  "natural",
  "add",
  "zinc",
  "scarecrow",
  "lamentable",
  "scattered",
  "live",
  "faint",
  "frantic",
  "search",
  "wise",
  "sad",
  "hungry",
  "trains",
  "creator",
  "wilderness",
  "possible",
  "cream",
  "nervous",
  "plot",
  "first",
  "shrill",
  "scrape",
  "education",
  "flagrant",
  "bustling",
  "billowy",
  "knowledgeable",
  "approve",
  "festive",
  "best",
  "peace",
  "pest",
  "wooden",
  "cold",
  "waste",
  "way",
  "pie",
  "sheet",
  "icky",
  "living",
  "cars",
  "awake",
  "answer",
  "thought",
  "race",
  "matter",
  "two",
  "disagreeable",
  "stomach",
  "endurable",
  "recess",
  "orange",
  "misty",
  "snotty",
  "prepare",
  "cats",
  "measly",
  "tooth",
  "preach",
  "smart",
  "challenge",
  "hulking",
  "year",
  "shape",
  "cable",
  "ruin",
  "fear",
  "attractive",
  "mask",
  "truthful",
  "example",
  "perpetual",
  "sleet",
  "scream",
  "crazy",
  "tempt",
  "disturbed",
  "tasty",
  "skirt",
  "wait",
  "fail",
  "alive",
  "delicate",
  "green",
  "pocket",
  "fascinated",
  "icicle",
  "broad",
  "electric",
  "drag",
  "uneven",
  "transport",
  "rustic",
  "abortive",
  "obtainable",
  "little",
  "absorbed",
  "memory",
  "taboo",
  "elegant",
  "torpid",
  "last",
  "activity",
  "abrasive",
  "wretched",
  "tender",
  "cloth",
  "wander",
  "angle",
  "beef",
  "impulse",
  "snore",
  "subsequent",
  "acid",
  "found",
  "sincere",
  "reason",
  "boast",
  "chop",
  "reading",
  "woman",
  "building",
  "end",
  "violet",
  "irate",
  "succinct",
  "earsplitting",
  "known",
  "pet",
  "childlike",
  "finger",
  "sticky",
  "jolly",
  "bit",
  "hose",
  "connection",
  "scold",
  "memorise",
  "simple",
  "crabby",
  "cultured",
  "tip",
  "whisper",
  "pets",
  "utopian",
  "satisfying",
  "tranquil",
  "knife",
  "crawl",
  "forgetful",
  "gabby",
  "toes",
  "peck",
  "tiger",
  "unknown",
  "complete",
  "hypnotic",
  "delirious",
  "brief",
  "frail",
  "whole",
  "embarrassed",
  "degree",
  "capable",
  "thumb",
  "bounce",
  "carpenter",
  "comparison",
  "prickly",
  "better",
  "difficult",
  "bloody",
  "clever",
  "volleyball",
  "discreet",
  "double",
  "oceanic",
  "bee",
  "lopsided",
  "channel",
  "religion",
  "snail",
  "pan",
  "trousers",
  "harass",
  "doctor",
  "careful",
  "bake",
  "curved",
  "delightful",
  "haircut",
  "jump",
  "elastic",
  "wild",
  "ring",
  "madly",
  "huge",
  "grumpy",
  "concentrate",
  "vegetable",
  "match",
  "crayon",
  "kaput",
  "space",
  "economic",
  "bat",
  "mark",
  "zoo",
  "power",
  "lip",
  "things",
  "bruise",
  "payment",
  "watery",
  "uttermost",
  "groan",
  "tin",
  "imperfect",
  "unruly",
  "poor",
  "joyous",
  "gaudy",
  "sore",
  "consider",
  "mere",
  "squeak",
  "loaf",
  "examine",
  "nest",
  "program",
  "multiply",
  "sweet",
  "oil",
  "knotty",
  "gullible",
  "voice",
  "amusing",
  "snatch",
  "stiff",
  "illegal",
  "paper",
  "fumbling",
  "steel",
  "mother",
  "mix",
  "beautiful",
  "ultra",
  "kindly",
  "probable",
  "gainful",
  "scratch",
  "gigantic",
  "pick",
  "reign",
  "bedroom",
  "quick",
  "edge",
  "picayune",
  "rebel",
  "testy",
  "full",
  "heartbreaking",
  "fruit",
  "disarm",
  "disapprove",
  "aboard",
  "dirty",
  "rinse",
  "mend",
  "famous",
  "scribble",
  "country",
  "ahead",
  "petite",
  "obnoxious",
  "youthful",
  "wacky",
  "yellow",
  "fry",
  "fluttering",
  "history",
  "trashy",
  "punish",
  "pointless",
  "quirky",
  "dependent",
  "army",
  "notebook",
  "invite",
  "gray",
  "snails",
  "ajar",
  "industry",
  "straw",
  "delicious",
  "nifty",
  "fallacious",
  "deer",
  "queue",
  "rough",
  "switch",
  "grass",
  "unbiased",
  "carve",
  "compare",
  "closed",
  "various",
  "truculent",
  "temper",
  "base",
  "rabbits",
  "secret",
  "table",
  "dance",
  "chivalrous",
  "straight",
  "invent",
  "letter",
  "vivacious",
  "honey",
  "unusual",
  "deceive",
  "inexpensive",
  "debt",
  "bore",
  "health",
  "introduce",
  "eminent",
  "apathetic",
  "striped",
  "useful",
  "holistic",
  "stupendous",
  "damaged",
  "waves",
  "radiate",
  "dull",
  "strange",
  "umbrella",
  "gate",
  "weak",
  "airport",
  "domineering",
  "true",
  "extend",
  "mammoth",
  "poke",
  "root",
  "shame",
  "impolite",
  "donkey",
  "daily",
  "puny",
  "ruddy",
  "chicken",
  "road",
  "educated",
  "frequent",
  "shelf",
  "irritating",
  "confused",
  "prevent",
  "psychotic",
  "wave",
  "copy",
  "spooky",
  "school",
  "sniff",
  "wandering",
  "neck",
  "appear",
  "statuesque",
  "ordinary",
  "chalk",
  "cent",
  "badge",
  "charge",
  "coast",
  "color",
  "lumpy",
  "spicy",
  "feeling",
  "tent",
  "absorbing",
  "open",
  "afraid",
  "eye",
  "fax",
  "control",
  "stew",
  "lucky",
  "quill",
  "sick",
  "legs",
  "library",
  "competition",
  "guess",
  "silk",
  "skin",
  "advice",
  "third",
  "flimsy",
  "uptight",
  "injure",
  "suck",
  "label",
  "wistful",
  "suppose",
  "rake",
  "silky",
  "observe",
  "field",
  "vast",
  "obsolete",
  "organic",
  "precious",
  "pause",
  "avoid",
  "fade",
  "cheerful",
  "flock",
  "aspiring",
  "invincible",
  "children",
  "magnificent",
  "muddle",
  "wipe",
  "post",
  "bag",
  "account",
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
  27: { min: 6, max: 12 },
  28: { min: 6, max: 12 },
  29: { min: 6, max: 12 },
  30: { min: 6, max: 12 },
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
    window.removeEventListener("keyup", findMatchAndHighlight);
    setTimeout(() => {
      toggleCreateWord();
      window.addEventListener("keyup", findMatchAndHighlight);
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
  let minLength = 0;
  let maxLength = 0;
  if (level > 30) {
    minLength = 5;
    maxLength = 13;
  } else {
    minLength = minMaxLength[level].min;
    maxLength = minMaxLength[level].max;
  }
  let selectWord = commonWords.filter(
    (word) => word.length <= maxLength && word.length >= minLength
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
                transform: translateY(500px);
              }
            }
          `);
          // use class and data in css
          word.style.animation = `descend-faster-${animationId} ${
            (500 - rect.top + 0.75) / (((500 - 10) / 7) * 2.5)
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
                transform: translateY(500px);
              }
            }
          `);
        word.style.animation = `descend-faster-${animationId} ${
          (500 - rect.top - 0.75) / (((500 - 10) / 7) * 2.5)
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
