

const npcs = [professor, leader, bridgeman, trainer1, trainer2, trainer3];

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
            line: "If that's the case, then why not become a Mythical Monster tamer? I, myself, am a Monster Researcher, and could use an assistant!",
        },
        {
            line: "However, you will need to prove yourself first. The world of Mythical Monsters is deep, and dangerous, but there is much to explore.",
        },
        {
            line: "I have tamed some beginner monsters that should be alright for you to handle. You may pick only one, that will already quite a difficult task to raise these fascinating creatures!",
        },
        {
            line: "I have the Grass-type Pompet, the Water-type Dampurr, or the Fire-type Bonfur.",
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
                        { line: "So you've chosen the Grass-type Pompet!" },
                        {
                            line: "If you travel back to your town, there is a bridge to the East that you may cross over. You'll find yourself in an area teeming with wild Mythical Monsters where you can train with your partner!",
                        },
                        {
                            line: "However, be warned - if your Monster loses all it's HitPoints, there will be nothing to protect you from the wild monsters in the area. You can heal your partner once per battle as an emergency, so be wise about your battles.",
                        },
                        {
                            line: "On the other side of that area, the island leader will be waiting. Your first mission will be to seek him out and complete his tasks, he will train you and your partner to become stronger.",
                        },
                        {
                            line: "After you beat him, come back to me, and then we can talk about what your next task will be.",
                        },
                    ]
                },
                {
                    text: "Dampurr",
                    nextDialogue: [
                        {line: ""},
                        {line: "So you've chosen the Water-type Dampurr!"},
                        {
                            line: "If you travel back to your town, there is a bridge to the East that you may cross over. You'll find yourself in an area teeming with wild Mythical Monsters where you can train with your partner!",
                        },
                        {
                            line: "However, be warned - if your Monster loses all it's HitPoints, there will be nothing to protect you from the wild monsters in the area. You can heal your partner once per battle as an emergency, so be wise about your battles.",
                        },
                        {
                            line: "On the other side of that area, our island leader will be waiting. Your first mission will be to seek him out and complete his tasks, he will train you and your partner to become stronger.",
                        },
                        {
                            line: "After you beat him, come back to me, and then we can talk about what your next task will be.",
                        },
                    ]
                },
                {
                    text: "Bonfur",
                    nextDialogue: [
                        {line: ""},
                        {line: "So you've chosen the Fire-type Bonfur!"},
                        {
                            line: "If you travel back to your town, there is a bridge to the East that you may cross over. You'll find yourself in an area teeming with wild Mythical Monsters where you can train with your partner!",
                        },
                        {
                            line: "However, be warned - if your Monster loses all it's HitPoints, there will be nothing to protect you from the wild monsters in the area. You can heal your partner once per battle as an emergency, so be wise about your battles.",
                        },
                        {
                            line: "On the other side of that area, our island leader will be waiting. Your first mission will be to seek him out and complete his tasks, he will train you and your partner to become stronger.",
                        },
                        {
                            line: "After you beat him, come back to me, and then we can talk about what your next task will be.",
                        },
                    ]
                },
                {
                    text: "Lumini",
                    nextDialogue: [
                        {line: ""},
                        {line: "So you've chosen the Light-type Lumini!"},
                        {
                            line: "If you travel back to your town, there is a bridge to the East that you may cross over. You'll find yourself in an area teeming with wild Mythical Monsters where you can train with your partner!",
                        },
                        {
                            line: "However, be warned - if your Monster loses all it's HitPoints, there will be nothing to protect you from the wild monsters in the area. You can heal your partner once per battle as an emergency, so be wise about your battles.",
                        },
                        {
                            line: "On the other side of that area, our island leader will be waiting. Your first mission will be to seek him out and complete his tasks, he will train you and your partner to become stronger.",
                        },
                        {
                            line: "After you beat him, come back to me, and then we can talk about what your next task will be.",
                        },
                    ]
                },
                {
                    text: "Skelleks",
                    nextDialogue: [
                        {line: ""},
                        {line: "So you've chosen the Dark-type Skelleks!"},
                        {
                            line: "If you travel back to your town, there is a bridge to the East that you may cross over. You'll find yourself in an area teeming with wild Mythical Monsters where you can train with your partner!",
                        },
                        {
                            line: "However, be warned - if your Monster loses all it's HitPoints, there will be nothing to protect you from the wild monsters in the area. You can heal your partner once per battle as an emergency, so be wise about your battles.",
                        },
                        {
                            line: "On the other side of that area, our island leader will be waiting. Your first mission will be to seek him out and complete his tasks, he will train you and your partner to become stronger.",
                        },
                        {
                            line: "After you beat him, come back to me, and then we can talk about what your next task will be.",
                        },
                    ]
                }
            ]
        },
    ],
    leader: [
        {
            line: "Greetings, challenger! So, the professor has sent you here to undergo training, eh? Well it won't be easy!",
        },
        {
            line: "In fact, before I take you under my wing, you will need to prove that you are worthy of my training. I will send three of my disciples across the island - find them and defeat them.",
        },
        {
            line: "Will you undergo my challenge?",
        },
        {
            options: [
                {
                    text: "Yes",
                    nextDialogue: [
                        { line: "" },
                        {
                            line: "Fantastic! Now, before you leave, allow me to impart some battle knowledge: ",
                        },
                        {
                            line: "Each monster has a certain type, and there are move types that can be very effective or not effective at all against it.",
                        },
                        {
                            line: "Each monster also has a Hitpoint, Attack, Defense, and Speed stat. Understanding how these relate to each other and to your opponent would be wise.",
                        },
                        {
                            line: "Finally, your monster will grow stronger every time it defeats another, so train it well! However, it only takes a single loss for all of this to end, so be careful.",
                        },
                        {
                            line: "Best of luck, young one! I will be here waiting!",
                        },
                    ]
                },
                {
                    text: "No",
                    nextDialogue: [
                        {line: ""},
                        {line: "That is alright. I will be here whenever you feel ready to attempt my challenge!"},
                    ]
                },
            ]
        },
    ],
    bridgeman: [
        {
            line: "There's dangerous monsters beyond this bridge! I can't in good faith allow you to pass if you don't have any way of defending yourself!",
        },
    ],
    trainer1: [
        {
            line: "My Pompet is so cute! Get ready to be overwhelmed with cuteness! Ready to get smothered?",
        },
        {
            options: [
                {
                    text: "Yes",
                },
                {
                    text: "No",
                    nextDialogue: [
                        {line: ""},
                        {line: "Aww, don't be shy!"},
                    ]
                },
            ]
        }
    ],
    trainer2: [
        {
            line: "Dampurr and I are in sync. Get ready to battle!",
        },
    ],
    trainer3: [
        {
            line: "I've been training with Bonfur for over a year now! Here we go!",
        },
    ]
};

const npcDialogueMapping = {
    professor: professor,
    leader: leader,
    bridgeman: bridgeman,
    trainer1: trainer1,
    trainer2: trainer2,
    trainer3: trainer3,
    // Add other NPCs as needed...
};

function updateProfessorDialogue() {
    if (game.obtainedMonster) {
        npcDialogueTexts.professor = [
            { 
                line: "Back so soon? You'll need to beat the island leader before I can entrust you with some assistant duties." 
            },
            {
                line: "The leader is across the area past the bridge east of your home town. Come find me after you've gained his approval.",
            },
        ];
    }
}

function updateBridgemanSprite() {
    if (game.obtainedMonster) {
        bridgeman.srcX = (npcBridgemanImage.width / 4); // Setting the sprite to the last one
        bridgeman.position.y += 48;
        npcDialogueTexts.bridgeman = [
            { 
                line: "Looks like you've got a good partner with you. Be careful, the wild Mythical Monsters beyond here are ruthless!" 
            },
        ];
    }
}

function updateTrainer1Dialogue() {
        npcDialogueTexts.trainer1 = [
            { 
                line: "...Pompet... you're not so cute anymore..." 
            },
        ];
}


function updateLeaderDialogue() {
    if (game.acceptedChallenge) {
        npcDialogueTexts.leader = [
            { 
                line: "You will need to defeat 3 of my disciples across the island before I permit you to challenge me." 
            },                        {
                line: "Remember, each monster has a certain type, and there are move types that can be very effective or not effective at all against it.",
            },
            {
                line: "Each monster also has a Hitpoint, Attack, Defense, and Speed stat. Understanding how these relate to each other and to your opponent would be wise.",
            },
            {
                line: "Finally, your monster will grow stronger every time it defeats another, so train it well! However, it only takes a single loss for all of this to end, so be careful.",
            },
            {
                line: "Best of luck, young one! I will be here waiting!",
            },
        ];
    }
}

let currentDialogue = null;
let currentLineIndex = 0;
let currentNPCKey = null;


// Function to display the NPC's dialogue
function displayNPCDialogue(npcInstance) {
    const dialogueElement = document.querySelector("#npcDialogue");
    dialogueElement.style.display = "flex";

    currentNPCKey = Object.keys(npcDialogueMapping).find(
        (key) => npcDialogueMapping[key] === npcInstance
    );

    if (currentNPCKey && npcDialogueTexts[currentNPCKey]) {
        currentDialogue = npcDialogueTexts[currentNPCKey];
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
                    
                    if (currentNPCKey === 'professor') {
                        const monsterName = option.text;
                        const monsterData = monsters[monsterName]; // Retrieve the monster data by name
                        const monsterInstance = new Monster({ ...monsterData, isEnemy: false });
                        player.addToParty(monsterInstance); // Add the monster instance to the player's party
                        
                        // Update the game state to indicate that the player has obtained a monster
                        game.setMonsterObtained(true);

                        // Update the professor's dialogue based on the game state
                        updateProfessorDialogue();
                        updateBridgemanSprite();
                    } else if (currentNPCKey === 'leader' && option.text === 'Yes') {
                        game.setAcceptedChallenge(true);
                        updateLeaderDialogue();
                    } else if (currentNPCKey === 'trainer1' && option.text === 'Yes') {
                        window.cancelAnimationFrame(animationId);
                        battle.initiated = true;
                        trainer1.removeFromNpcParty("Pompet")
                        trainer1.addToNpcParty(trainer1Monster);
                        gsap.to("#battleTransition", {
                          opacity: 1,
                          repeat: 3,
                          yoyo: true,
                          duration: 0.4,
                          onComplete() {
                            gsap.to("#battleTransition", {
                              opacity: 1,
                              duration: 0.4,
                              onComplete() {
                                //activate new animation loop
                                initBattle(trainer1.party[0], player.party[0]);
                                animateBattle();
                                gsap.to("#battleTransition", {
                                  opacity: 0,
                                  duration: 0.4,
                                });
                              },
                            });
                          },
                        });
                    }          
          
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