// Load NPC images
const npcProfessorImage = new Image();
npcProfessorImage.src = "/images/NPCs/MM-Professor-Front.png";

const npcLeaderImage = new Image();
npcLeaderImage.src = "/images/NPCs/MM-leader.png";


// Load Player Image
const playerImage = new Image();
playerImage.src = "../images/MM-Protagonist.png";

//player sprite
const player = new Player({
  position: {
    x: canvas.width / 2 - 24,
    y: canvas.height / 2 - 60,
  },
  image: playerImage,
  srcX: (playerImage.width / 56) * 3,
  srcY: playerImage.height / 120,
  srcWidth: playerImage.width / 56,
  srcHeight: playerImage.height / 20,
  width: playerImage.width / 56,
  height: playerImage.height / 20,
});

//Professor sprite
const professor = new NPC({
  position: {
    x: canvas.width / 2 + 200,
    y: canvas.height / 2 - 200,
  },
  image: npcProfessorImage,
  srcX: 0,
  srcY: 0,
  srcWidth: npcProfessorImage.width,
  srcHeight: npcProfessorImage.height,
  width: npcProfessorImage.width,
  height: npcProfessorImage.height,
});

//Leader sprite
const leader = new NPC({
  position: {
    x: canvas.width / 2 + 60,
    y: canvas.height / 2 - 50,
  },
  image: npcLeaderImage,
  srcX: 0,
  srcY: 0,
  srcWidth: npcProfessorImage.width,
  srcHeight: npcProfessorImage.height,
  width: npcProfessorImage.width,
  height: npcProfessorImage.height,
});

const npcs = [professor, leader];

// Define a variable to track NPC interaction
let interactingWithNPC = false;
let interactingNPC = null;

// Function to hide NPC dialogue
function hideNPCDialogue() {
    const dialogueElement = document.querySelector("#npcDialogue");
    dialogueElement.style.display = "none";
    interactingNPC = null; // Reset the interacting NPC
  }

  const npcDialogueTexts = {
    professor: [
        {
            line: "Why hello there, young'un! How are you doing today?",
        },
        {
            line: "...I see you grow weary of island life. Is coding all day on a tropical island truly not enough for you?",
        },
        {
            line: "If that's the case, then why not because a Mythical Monster tamer? I, myself, am a Monster Researcher, and could use an assistant!",
        },
        {
            line: "However, you will need to prove yourself first. The world of Mythical Monsters is deep, and there is much to explore.",
        },
        {
            line: "I have tamed some beginner monsters that should be alright for you to handle. You may pick only one, that will already quite a difficult task to raise these fascinating creatures!",
        },
        {
            line: "I have the Grass-type Pompet, the Water-type Asterish, or the Fire-type Bonfur.",
        },
        {
            line: "If you feel unsure, I also have the Light-type Lumini - it's very strong against most types, and weak to very few!",
        },
        {
            line: "However, if you are feeling confident, might I suggest the Dark-type Skelleks. It may be strong against everything, but is also very frail and slow. A double edged blade, if you will!",
        },
        {
            line: "Now then... who will you choose to be your partner? Think carefully, as it will be by your side for a long time.",
        },
        {
            options: [
                {
                    text: "Pompet",
                    nextDialogue: [
                        { line: "" },
                        { line: "So you've chosen the Grass-type Pompet!" }
                    ]
                },
                {
                    text: "Asterish",
                    nextDialogue: [
                        {line: ""},
                        {line: "So you've chosen the Water-type Asterish!"}
                    ]
                },
                {
                    text: "Bonfur",
                    nextDialogue: [
                        {line: ""},
                        {line: "So you've chosen the Fire-type Bonfur!"}
                    ]
                },
                {
                    text: "Lumini",
                    nextDialogue: [
                        {line: ""},
                        {line: "So you've chosen the Light-type Lumini!"}
                    ]
                },
                {
                    text: "Skelleks",
                    nextDialogue: [
                        {line: ""},
                        {line: "So you've chosen the Dark-type Skelleks!"}
                    ]
                }
            ]
        }
    ],
    leader: [
        {
            line: "Greetings, traveler!",
            options: [
                {
                    text: "Ask about the region",
                    nextDialogue: [
                        "This region has a rich history and many stories to tell.",
                        "What specifically would you like to know?"
                    ]
                },
                {
                    text: "Offer help",
                    nextDialogue: [
                        "We could use someone of your skills. A monster has been causing trouble.",
                        "Would you be willing to deal with it?"
                    ]
                }
            ]
        }
    ]
};

const npcDialogueMapping = {
    professor: professor,
    leader: leader,
    // Add other NPCs as needed...
};

let currentDialogue = null;
let currentLineIndex = 0;

function displayNPCDialogue(npcInstance) {
    const dialogueElement = document.querySelector("#npcDialogue");
    dialogueElement.style.display = "flex";

    const npcKey = Object.keys(npcDialogueMapping).find(
        (key) => npcDialogueMapping[key] === npcInstance
    );

    if (npcKey && npcDialogueTexts[npcKey]) {
        currentDialogue = npcDialogueTexts[npcKey];
        displayCurrentDialogue();
    }
}

// Function to display the current dialogue line and options
function displayCurrentDialogue() {
    const dialogueElement = document.querySelector("#npcDialogueLine");
    const optionsElement = document.querySelector("#npcOptions");

    if (currentDialogue && currentDialogue[currentLineIndex]) {
        const currentLine = currentDialogue[currentLineIndex];
        
        if (currentLine.options) {
            dialogueElement.innerText = ''; // Clear any existing dialogue text
            optionsElement.innerHTML = ''; // Clear any existing options

            currentLine.options.forEach((option) => {
                const optionButton = document.createElement("button");
                optionButton.innerText = option.text;
                optionButton.addEventListener("click", () => {
                    const monsterName = option.text;
                    const monsterData = monsters[monsterName]; // Retrieve the monster data by name
                    const monsterInstance = new Monster(monsterData); // Create a Monster instance
                    player.addToParty(monsterInstance); // Add the monster instance to the player's party
                    let myMonster;
                    myMonster = player.party[0];

                    currentDialogue = option.nextDialogue; // Update current dialogue
                    currentLineIndex = 0; // Reset to the first line of new dialogue
                    displayCurrentDialogue(); // Display new dialogue
                });
                optionsElement.appendChild(optionButton);
            });
        } else {
            dialogueElement.innerText = currentLine.line;
            optionsElement.innerHTML = ''; // Clear options when not present
        }
    }
}


function hideNPCDialogue() {
    const dialogueElement = document.querySelector("#npcDialogue");
    dialogueElement.style.display = "none";
    currentDialogue = null;
    currentLineIndex = 0;
}

document.querySelector("#npcDialogue").addEventListener('click', () => {
    if (currentDialogue && currentDialogue[currentLineIndex + 1]) {
        currentLineIndex++;
        displayCurrentDialogue();
    } else {
        hideNPCDialogue();
    }
});




/*
    if (npcDialogueTexts[npc] && npcDialogueTexts[npc].length > 0) {
        currentDialogue = npcDialogueTexts[npc][0];
        currentLineIndex = 0; // Reset the line index to 0
        displayCurrentDialogue();
    } else {
        console.error(`No dialogue found for ${npc}`);
    }

    dialogueElement.addEventListener('click', () => {
        if (currentDialogue.options && currentLineIndex < currentDialogue.options.length - 1) {
            currentLineIndex++;
            displayCurrentDialogue();
        }
    });*/

/*
function displayCurrentDialogue() {
    const dialogueElement = document.querySelector("#npcDialogue");
    const optionButtons = document.querySelector("#npcOptions");
  
    if (currentLineIndex < currentDialogue.line.length) {
        dialogueElement.innerText = currentDialogue.line[currentLineIndex];
    } else if (currentDialogue.options && currentLineIndex === currentDialogue.line.length) {
        dialogueElement.innerText = ""; // Clear text for options
        optionButtons.innerHTML = ""; // Clear previous options

        currentDialogue.options.forEach((option, index) => {
            const optionButton = document.createElement("button");
            optionButton.innerText = option.text;
            optionButton.addEventListener("click", () => {
                currentDialogue = option.nextDialogue;
                currentLineIndex = 0; // Reset line index for new dialogue
                displayCurrentDialogue();
            });
            optionButtons.appendChild(optionButton);
        });
    } else {
        dialogueElement.style.display = 'none'; // Hide dialogue box after options are finished
        currentLineIndex = 0; // Reset line index for next interaction
    }
}
*/