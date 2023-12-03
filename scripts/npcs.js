

const npcs = [professor, leader, bridgeman, trainer1, trainer2, trainer3, boatCaptain];

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
            line: "If you feel unsure, I also have the Light-type Lumini - it's very strong against most types, and weak to very few. It's also very fast!",
        },
        {
            line: "However, if you are feeling confident, might I suggest the Dark-type Skelleks. It's learns attacks strong against anything and has amazing defense, but is also weak to all types and slow. A double edged blade, if you will!",
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
            line: "Dampurr and I are in sync. Are you ready to battle?",
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
                        {line: "Then don't disturb us! We'll be out of sync!"},
                    ]
                },
            ]
        }
    ],
    trainer3: [
        {
            line: "I've been training with Bonfur for over a year now! Here we go!",
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
                        {line: "Haha, looks like we have more training than you!"},
                    ]
                },
            ]
        }
    ],
    boatCaptain: [
        {
            line: "Hello young one! The professor told me about your next task. Ready to start your adventure?",
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
                        {line: "That's alright, I'll be around for awhile so just come back when you're ready."},
                    ]
                },
            ]
        }
    ],
};

const npcDialogueMapping = {
    professor: professor,
    leader: leader,
    bridgeman: bridgeman,
    trainer1: trainer1,
    trainer2: trainer2,
    trainer3: trainer3,
    boatCaptain: boatCaptain
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
    else if (game.beatenLeader) {
        npcDialogueTexts.professor = [
            { 
                line: "Congratulations! I heard from the leader that you defeated him with ease. I can see that your bond with your partner has grown leaps and bounds." 
            },
            {
                line: "To be honest, I have already have enough hands helping me with research on this island, so I will be having you go to the next island over!",
            },
            {
                line: "I know that's a big deal, but the leader vouched for your strength, so I believe in you. What do you say?",
            },
            {
                options: [
                    {
                        text: "Yes",
                        nextDialogue: [
                            { line: "" },
                            {
                                line: "Great! You'll do fantastic. When you're ready, go down to the dock by your hometown, and talk to the sailor - she's an old friend of mine, and will take you to your next adventure.",
                            },
                            {
                                line: "Best of luck out there!",
                            },
                        ]
                    },
                    {
                        text: "No",
                        nextDialogue: [
                            {line: ""},
                            {line: "That is alright. My offer still stands, just come talk to me if you change your mind."},
                        ]
                    },
                ]
            },
        ];
    }
}

function updateBridgemanSprite() {
    if (game.obtainedMonster) {
        bridgeman.srcX = (npcBridgemanImage.width / 4); // Setting the sprite to the last one
        bridgeman.position.x -= 70
        bridgeman.position.y += 68;
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

function updateTrainer2Dialogue() {
    npcDialogueTexts.trainer2 = [
        { 
            line: "Dampurr and I will need to resync." 
        },
    ];
}

function updateTrainer3Dialogue() {
    npcDialogueTexts.trainer3 = [
        { 
            line: "Looks like Bonfur and I will need to train for another year!" 
        },
    ];
}


function updateLeaderDialogue() {
    if (game.acceptedChallenge) {
        npcDialogueTexts.leader = [
            { 
                line: "You will need to defeat 3 of my disciples across the island before I permit you to challenge me." 
            },                        
            {
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
    if (trainer1.isDefeated && trainer2.isDefeated && trainer3.isDefeated){
        npcDialogueTexts.leader = [
            { 
                line: "Ho ho ho! So you've beaten my 3 disciples, and very handily apparently. It looks like it's finally time for us to face off." 
            },                        
            {
                line: "I must warn you, I'm a cut above my students - I am the leader after all, and the monster you'll be facing is the very one that ran amok on this island before I tamed it and we settled here.",
            },
            {
                line: "Are you ready for your final challenge, young one?",
            },
            {
                options: [
                    {
                        text: "I am ready",
                    },
                    {
                        text: "Not yet",
                        nextDialogue: [
                            {line: ""},
                            {line: "There is no shame in acknowledging your weakness. I will be here whenever you feel ready!"},
                        ]
                    },
                ]
            }
        ];
    }
    if (game.beatenLeader){
        npcDialogueTexts.leader = [
            { 
                line: "Wa ha ha! That was a fantastic battle. I'm so proud of you and your partner!" 
            },                        
            {
                line: "With that, you should go see the professor. I'm sure you're ready for whatever challenge he throws at you next.",
            },
            {
                line: "Remember to take care and trust in yourself and your partner, young one!",
            }
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
                        if (option.text === 'Yes') {
                            game.endGame = true;
                        } else if (option.text === 'No'){
                            console.log("no");
                        } else {
                            const monsterName = option.text;
                            const monsterData = monsters[monsterName]; // Retrieve the monster data by name
                            const monsterInstance = new Monster({ ...monsterData, isEnemy: false, level: 5 });
                            player.addToParty(monsterInstance); // Add the monster instance to the player's party
                            
                            // Update the game state to indicate that the player has obtained a monster
                            game.setMonsterObtained(true);
    
                            // Update the professor's dialogue based on the game state
                            updateProfessorDialogue();
                            updateBridgemanSprite();
                        }
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
                    } else if (currentNPCKey === 'trainer2' && option.text === 'Yes') {
                        window.cancelAnimationFrame(animationId);
                        battle.initiated = true;
                        trainer2.removeFromNpcParty("Dampurr")
                        trainer2.addToNpcParty(trainer2Monster);
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
                                initBattle(trainer2.party[0], player.party[0]);
                                animateBattle();
                                gsap.to("#battleTransition", {
                                  opacity: 0,
                                  duration: 0.4,
                                });
                              },
                            });
                          },
                        });
                    } else if (currentNPCKey === 'trainer3' && option.text === 'Yes') {
                        window.cancelAnimationFrame(animationId);
                        battle.initiated = true;
                        trainer3.removeFromNpcParty("Bonfur")
                        trainer3.addToNpcParty(trainer3Monster);
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
                                initBattle(trainer3.party[0], player.party[0]);
                                animateBattle();
                                gsap.to("#battleTransition", {
                                  opacity: 0,
                                  duration: 0.4,
                                });
                              },
                            });
                          },
                        });
                    }  else if (currentNPCKey === 'leader' && option.text === 'I am ready') {
                        window.cancelAnimationFrame(animationId);
                        battle.initiated = true;
                        leader.removeFromNpcParty("Fangtomask")
                        leader.addToNpcParty(leaderMonster);
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
                                initBattle(leader.party[0], player.party[0]);
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

function resetNPCDialogues() {
    npcDialogueTexts.professor = [
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
            line: "If you feel unsure, I also have the Light-type Lumini - it's very strong against most types, and weak to very few. It's also very fast!",
        },
        {
            line: "However, if you are feeling confident, might I suggest the Dark-type Skelleks. It's learns attacks strong against anything and has amazing defense, but is also weak to all types and slow. A double edged blade, if you will!",
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
    npcDialogueTexts.leader = [
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
    npcDialogueTexts.bridgeman = [
        {
            line: "There's dangerous monsters beyond this bridge! I can't in good faith allow you to pass if you don't have any way of defending yourself!",
        },
    ],
    npcDialogueTexts.trainer1 = [
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
    npcDialogueTexts.trainer2 = [
        {
            line: "Dampurr and I are in sync. Are you ready to battle?",
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
                        {line: "Then don't disturb us! We'll be out of sync!"},
                    ]
                },
            ]
        }
    ],
    npcDialogueTexts.trainer3 = [
        {
            line: "I've been training with Bonfur for over a year now! Here we go!",
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
                        {line: "Haha, looks like we have more training than you!"},
                    ]
                },
            ]
        }
    ],
    npcDialogueTexts.boatCaptain = [
        {
            line: "Hello young one! The professor told me about your next task. Ready to start your adventure?",
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
                        {line: "That's alright, I'll be around for awhile so just come back when you're ready."},
                    ]
                },
            ]
        }
    ]
}


function resetMMGame() {
    playerDirection = "down";
    background.position.x = offset.x;
    background.position.y = offset.y;
    foreground.position.x = offset.x;
    foreground.position.y = offset.y;
    resetBattleZones();
    resetBoundaries();
    resetNPCPositions();
    resetNPCDialogues();
    game.obtainedMonster = false;
    game.acceptedChallenge = false;
    game.beatenLeader = false;
    game.endGame = false;
    player.party = [];
}