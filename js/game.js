
//Settings

//Game setup JSON

var level = 0;


var level1 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [5, 6],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "b", "b", "b", "b", "h", "h", "h", "h"],
    ["h", "h", "h", "b", "b", "b", "b", "b", "b", "h", "h", "h"],
    ["h", "h", "b", "b", "b", "b", "b", "b", "b", "b", "h", "h"],
    ["h", "h", "h", "b", "b", "b", "b", "b", "b", "h", "h", "h"],
    ["h", "h", "h", "h", "b", "b", "b", "b", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "*", "_", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 2,
    "starCount0": 2,
    "manaCount": 100
}

var level2 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [5, 1],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "h"],
    ["h", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "h"],
    ["h", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "*", "*", "*", "*", "*", "*", "*", "*", "*", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 9,
    "starCount0": 9,
    "manaCount": 100
}

var level3 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [5, 4],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "b", "b", "b", "b", "h", "h", "h", "h"],
    ["h", "h", "h", "b", "b", "b", "b", "b", "b", "h", "h", "h"],
    ["h", "h", "b", "b", "b", "b", "b", "b", "b", "b", "h", "h"],
    ["h", "h", "h", "b", "b", "b", "b", "b", "b", "h", "h", "h"],
    ["h", "h", "h", "h", "b", "b", "b", "b", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "*", "_", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 2,
    "starCount0": 2,
    "manaCount": 100
}


var level4 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [2, 2],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "r", "r", "r", "r", "r", "r", "r", "b", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "r", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "r", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "r", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "r", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "r", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "r", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "r", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "*", "*", "*", "*", "*", "*", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 14,
    "starCount0": 14,
    "manaCount": 100
}

var level5 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [4, 7],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "b", "b", "b", "b", "b", "b", "b", "b", "b", "r", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "*", "*", "*", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 3,
    "starCount0": 3,
    "manaCount": 100
}

var level6 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [1, 4],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "r", "b", "b", "b", "b", "g", "h", "h", "h"],
    ["h", "h", "h", "r", "b", "b", "b", "b", "g", "h", "h", "h"],
    ["h", "h", "h", "r", "b", "b", "b", "b", "g", "h", "h", "h"],
    ["h", "h", "h", "r", "b", "b", "b", "b", "g", "h", "h", "h"],
    ["h", "h", "h", "r", "b", "b", "b", "b", "g", "h", "h", "h"],
    ["h", "h", "h", "r", "b", "b", "b", "b", "g", "h", "h", "h"],
    ["h", "h", "h", "r", "b", "b", "b", "b", "g", "h", "h", "h"],
    ["h", "h", "h", "r", "b", "b", "b", "b", "g", "h", "h"],
    ["h", "h", "h", "r", "b", "b", "b", "b", "g", "h", "h", "h"],
    ["h", "h", "h", "r", "b", "b", "b", "b", "g", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "*", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "*", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "*", "_", "*", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "*", "_", "*", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "*", "_", "*", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "*", "_", "*", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "*", "_", "*", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "*", "_", "*", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "*", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "*", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 1,
    "manaCount": 100
}

var level7 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [6, 6],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "b", "b", "g", "b", "g", "b", "b", "h", "h", "h"],
    ["h", "h", "b", "h", "h", "h", "h", "h", "b", "h", "h", "h"],
    ["h", "h", "b", "b", "b", "h", "b", "b", "b", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "*", "_", "_", "*", "_", "_", "*", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "*", "_", "*", "_", "_", "_", "*", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 1,
    "manaCount": 100
}

var level8 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [7, 6],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "h"],
    ["h", "r", "b", "b", "b", "b", "b", "r", "r", "b", "r", "h"],
    ["h", "r", "b", "b", "b", "b", "r", "r", "b", "b", "r", "h"],
    ["h", "r", "b", "b", "b", "r", "g", "b", "b", "b", "r", "h"],
    ["h", "r", "b", "b", "r", "r", "b", "b", "b", "b", "r", "h"],
    ["h", "r", "b", "r", "r", "b", "b", "b", "b", "b", "r", "h"],
    ["h", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "_"],
    ["_", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "_"],
    ["_", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "_"],
    ["_", "*", "*", "*", "*", "*", "_", "*", "*", "*", "*", "_"],
    ["_", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "_"],
    ["_", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "_"],
    ["_", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 1,
    "manaCount": 100
}

var level9 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [5, 5],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "b", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "g", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "b", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "b", "h", "h", "h", "h", "h", "h"],
    ["h", "b", "g", "b", "b", "r", "b", "b", "g", "b", "h", "h"],
    ["h", "h", "h", "h", "h", "b", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "b", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "g", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "b", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "*", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "*", "_", "_", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "*", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 1,
    "manaCount": 100
}

var level10 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [5, 6],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "r", "r", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "g", "b", "b", "r", "b", "r", "b", "g", "b", "h"],
    ["h", "h", "b", "g", "h", "b", "b", "b", "g", "b", "b", "h"],
    ["h", "h", "r", "b", "h", "g", "b", "g", "b", "r", "r", "h"],
    ["h", "h", "b", "r", "h", "b", "h", "h", "g", "b", "b", "h"],
    ["h", "h", "r", "b", "h", "b", "g", "b", "b", "b", "r", "h"],
    ["h", "h", "b", "r", "h", "h", "h", "h", "h", "g", "b", "h"],
    ["h", "h", "r", "b", "g", "b", "r", "b", "r", "b", "g", "h"],
    ["h", "h", "b", "g", "b", "r", "b", "r", "b", "r", "b", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "*", "*", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "*", "_", "_", "*", "_", "*", "_", "*", "_", "_"],
    ["_", "_", "_", "*", "_", "_", "_", "_", "*", "_", "_", "_"],
    ["_", "_", "*", "_", "_", "*", "_", "*", "_", "*", "*", "_"],
    ["_", "_", "_", "*", "_", "_", "_", "_", "*", "_", "_", "_"],
    ["_", "_", "*", "_", "_", "_", "*", "_", "_", "_", "*", "_"],
    ["_", "_", "_", "*", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "*", "_", "*", "_", "*", "_", "*", "_", "*", "_"],
    ["_", "_", "_", "*", "_", "*", "_", "*", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 1,
    "manaCount": 100
}

var level11 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [6, 5],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "b", "b", "b", "b", "b", "b", "b", "b", "b", "h", "h"],
    ["h", "b", "h", "b", "h", "b", "h", "b", "h", "b", "h", "h"],
    ["h", "b", "b", "r", "b", "b", "b", "r", "b", "b", "h", "h"],
    ["h", "b", "h", "b", "h", "b", "h", "b", "h", "b", "h", "h"],
    ["h", "b", "b", "b", "b", "g", "b", "b", "b", "b", "h", "h"],
    ["h", "b", "h", "b", "h", "b", "h", "b", "h", "b", "h", "h"],
    ["h", "b", "b", "r", "b", "b", "b", "r", "b", "b", "h", "h"],
    ["h", "b", "h", "b", "h", "b", "h", "b", "h", "b", "h", "h"],
    ["h", "b", "b", "b", "b", "b", "b", "b", "b", "b", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "*", "*", "*", "*", "*", "*", "*", "*", "*", "_", "_"],
    ["_", "*", "_", "*", "_", "*", "_", "*", "_", "*", "_", "_"],
    ["_", "*", "*", "*", "*", "*", "*", "*", "*", "*", "_", "_"],
    ["_", "*", "_", "*", "_", "*", "_", "*", "_", "*", "_", "_"],
    ["_", "*", "*", "*", "*", "_", "*", "*", "*", "*", "_", "_"],
    ["_", "*", "_", "*", "_", "*", "_", "*", "_", "*", "_", "_"],
    ["_", "*", "*", "*", "*", "*", "*", "*", "*", "*", "_", "_"],
    ["_", "*", "_", "*", "_", "*", "_", "*", "_", "*", "_", "_"],
    ["_", "*", "*", "*", "*", "*", "*", "*", "*", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 1,
    "manaCount": 100
}

var level12 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [6, 5],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "b", "b", "b", "b", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "b", "h", "h", "b", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "b", "h", "g", "b", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "b", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "b", "b", "b", "b", "b", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "*", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 1,
    "manaCount": 100
}

var level13 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [4, 1],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "b", "b", "b", "b", "b", "b", "b", "r", "b", "b", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "b", "h", "b", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "b", "b", "b", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "*", "*", "*", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "*", "_", "*", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "*", "*", "*", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 1,
    "manaCount": 100
}

var level14 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [10, 1],
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "r", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "b", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "b", "h", "r", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "b", "h", "b", "h", "h", "h", "h", "h", "h", "r", "h"],
    ["h", "b", "r", "b", "h", "r", "h", "h", "h", "h", "b", "h"],
    ["h", "b", "b", "b", "h", "b", "r", "h", "h", "h", "b", "h"],
    ["h", "b", "b", "b", "h", "b", "b", "h", "h", "r", "b", "h"],
    ["h", "b", "b", "b", "h", "b", "b", "h", "h", "b", "b", "h"],
    ["h", "b", "b", "b", "r", "b", "b", "r", "r", "b", "b", "h"],
    ["h", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "*", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "*", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "-", "*", "_"],
    ["_", "_", "*", "_", "_", "*", "_", "_", "-", "_", "-", "_"],
    ["_", "_", "_", "_", "_", "_", "*", "_", "-", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "*", "_", "_", "*", "*", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 1,
    "manaCount": 100
}

var level15 = {

    "scenarioLines": 12,
    "scenarioCollums": 12,
    "scenarioBlockWidth": 26,
    "scenarioBlockHeight": 28,
    "scenarioId": "td",
    "coderSpaceId": "coderSpaceTable",
    "coderPosition": "coderSpaceTable" + "Cell0_1",
    "numOfFunctions": 5,
    "functionLength": 8,
    "functionsWidth": 40,
    "functionsHeigth": 40,
    "speed": 1500,
    "runnerPosition": [1, 2],
    "runnerPosition0": [1, 2],
    "runerDirection": 20003, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaD.png')",
    "moveCode": 1,
    "rotateClockCode": 2,
    "rotateCounterClockCode": 3,
    "f1Code": 4,
    "f2Code": 5,
    "f3Code": 6,
    "f4Code": 7,
    "f5Code": 8,
    "level": [["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "r", "g", "b", "h", "h", "b", "b", "b", "b", "b", "h"],
    ["h", "r", "g", "b", "h", "h", "b", "r", "r", "r", "b", "h"],
    ["h", "r", "g", "b", "b", "b", "b", "r", "g", "r", "b", "h"],
    ["h", "r", "g", "g", "g", "b", "h", "h", "h", "r", "b", "h"],
    ["h", "r", "r", "r", "g", "b", "h", "h", "h", "r", "b", "h"],
    ["h", "h", "h", "r", "g", "b", "h", "h", "r", "r", "b", "h"],
    ["h", "h", "h", "r", "g", "b", "h", "r", "r", "b", "b", "h"],
    ["h", "h", "h", "r", "g", "b", "b", "r", "b", "r", "r", "h"],
    ["h", "h", "h", "r", "r", "g", "g", "b", "b", "b", "b", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"]
    ],
    "stars": [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "*", "_", "_", "_", "_", "*", "*", "*", "_", "_"],
    ["_", "_", "*", "_", "_", "_", "_", "*", "_", "*", "_", "_"],
    ["_", "_", "*", "*", "*", "_", "_", "_", "_", "*", "_", "_"],
    ["_", "_", "_", "_", "*", "_", "_", "_", "-", "*", "-", "_"],
    ["_", "_", "_", "_", "*", "_", "_", "_", "*", "*", "_", "_"],
    ["_", "_", "_", "_", "*", "_", "_", "*", "*", "_", "_", "_"],
    ["_", "_", "_", "_", "*", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    ],
    "starImageUrl": "url('./assets/star.png')",
    "starCount": 100,
    "manaCount": 100
}

var setup = level1;

var lvls = [
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    level9,
    level10,
    level11,
    level12,
    level13,
    level14,
    level15
];
//Game Init

// startGame(setup);


// Functions

// ------ Map Functions ------

function startGame(settings) {
    console.log(level, settings.manaCount)

    createScenario(settings.scenarioLines, settings.scenarioCollums, settings.scenarioBlockWidth, settings.scenarioBlockHeight, settings.scenarioId);
    createCoderSpace(settings.coderSpaceId, settings.numOfFunctions, settings.functionLength, settings.functionsWidth, settings.functionsHeigth);
    createLevel(settings.level, settings.scenarioLines, settings.scenarioCollums, settings.scenarioId)

    createCharacter(settings.scenarioId, settings.runnerPosition, settings);
    addStars(settings.stars, settings.scenarioId, settings.starImageUrl);

}

// ------ Map Functions ------

function createScenario(linhas, colunas, largura, altura, scenarioId) {
    //cria o cenário

    scenario = "<table align=center border=0 >";
    for (x = 0; x < linhas; x++) {
        scenario += "<tr>";
        for (y = 0; y < colunas; y++)
            scenario += "<td id=" + scenarioId + x + "_" + y + " style='width:" + largura + "px; height:" + altura + "px; background-color: silver '> </td>";

        scenario += "</tr>";
    }
    document.getElementById('scenario').innerHTML = scenario + "</table>";
    //console.log(document.getElementById('scenario'))


}

function createCoderSpace(coderSpaceId, numOfFunctions, functionsLength, largura, altura) {
    //cria o espaço para inserir código
    coderSpace = "<table id=" + coderSpaceId + " align=center border=1>";
    //coderSpace = "<table id=coderSpaceTable align=center border=1>";

    coderSpace += "<tr>";

    for (x = 0; x < numOfFunctions; x++) {
        for (y = 0; y < functionsLength; y++) {

            cellId = coderSpaceId + "Cell" + x + "_" + y;

            coderSpace += "<td onclick=selectCell(" + cellId + ") id=" + cellId + " style='width:" + largura + "px; height:" + altura + "px; background-color: silver '> </td>";
            //coderSpace += "<td onclick=selectCell(" + cellId + "," + 2 + ") id=" + cellId + " style='width:" + largura + "px; height:" + altura + "px;'> </td>";


        }

        coderSpace += "</tr>";

        document.getElementById('coderSpace').innerHTML = coderSpace + "</table>";

    }

    for (i = 0; i < 5; i++) {
        n = i + 1
        window.document.getElementById("coderSpaceTableCell" + i + "_0").style.backgroundImage = "url('./assets/f" + n + ".png')";
        window.document.getElementById("coderSpaceTableCell" + i + "_0").style.backgroundSize = "cover";

    }
}

function createCharacter(id, runner, settings) {

    document.getElementById(id + runner[0] + '_' + runner[1]).style.backgroundImage = settings.runnerImageUrl;

}

function chooseSpeed(speedSet) {
    speed = speedSet;
}



function startScript(settings) {

    disableBtn(".btn");

    var script = getScript(settings.coderSpaceId, 0);
    execFunction(settings, script);

}

function createLevel(level, linhas, colunas, scenarioId) {

    for (x = 0; x < linhas; x++) {
        for (y = 0; y < colunas; y++) {

            if (level[x][y] == "r") {

                id = scenarioId + x + "_" + y
                document.getElementById(id).style.backgroundColor = "red";


            } else if (level[x][y] == "b") {

                id = scenarioId + x + "_" + y
                document.getElementById(id).style.backgroundColor = "blue";

            } else if (level[x][y] == "g") {

                id = scenarioId + x + "_" + y
                document.getElementById(id).style.backgroundColor = "green";

            } else if (level[x][y] == "s") {

                id = scenarioId + x + "_" + y
                document.getElementById(id).style.backgroundColor = "silver";

            } else if (level[x][y] == "h") {

                id = scenarioId + x + "_" + y
                document.getElementById(id).style.visibility = "hidden";

            }
        }
    }
}

function addStars(stars, scenarioId, starImageUrl) {

    for (x = 0; x < 12; x++) {
        for (y = 0; y < 12; y++) {

            if (stars[x][y] == "*") {
                id = scenarioId + x + "_" + y
                document.getElementById(id).style.backgroundImage = starImageUrl;
            }
        }
    }
}

// ------ Actions Functions ------

function move(settings) {

    // mudar de $ para img
    document.getElementById(settings.scenarioId + settings.runnerPosition[0] + '_' + settings.runnerPosition[1]).style.backgroundImage = "none";

    getDirection(settings);

    document.getElementById(settings.scenarioId + settings.runnerPosition[0] + '_' + settings.runnerPosition[1]).style.backgroundImage = settings.runnerImageUrl;

    //document.getElementById(settings.scenarioId + settings.runnerPosition[0] + '_' + settings.runnerPosition[1]).style.background = "white";
    colisions(settings);
    win(settings);
    lost(settings, false);
}

function rotateClock(settings) {

    settings.runerDirection++;
    //settings.runerDirection = Math.abs(settings.runerDirection % 4);
    getRotation(settings);
    document.getElementById(settings.scenarioId + settings.runnerPosition[0] + '_' + settings.runnerPosition[1]).style.backgroundImage = settings.runnerImageUrl;

}

function rotateCounterClock(settings) {

    settings.runerDirection--;

    getRotation(settings);
    document.getElementById(settings.scenarioId + settings.runnerPosition[0] + '_' + settings.runnerPosition[1]).style.backgroundImage = settings.runnerImageUrl;

}

function addCollor(settings, color) {

    document.getElementById(settings.coderPosition).style.backgroundColor = color;

}

function addFunction(id) {

    if (id == "move") {

        document.getElementById(lvls[level].coderPosition).innerHTML = 1;
        document.getElementById(lvls[level].coderPosition).style.backgroundImage = "url('./assets/forward.png')";
        document.getElementById(lvls[level].coderPosition).style.backgroundSize = "cover";

    } else if (id == "rotateClock") {

        document.getElementById(lvls[level].coderPosition).innerHTML = 2;
        document.getElementById(lvls[level].coderPosition).style.backgroundImage = "url('./assets/right.png')";
        document.getElementById(lvls[level].coderPosition).style.backgroundSize = "cover";

    } else if (id == "rotateCounterClock") {

        document.getElementById(lvls[level].coderPosition).innerHTML = 3;
        document.getElementById(lvls[level].coderPosition).style.backgroundImage = "url('./assets/left.png')";
        document.getElementById(lvls[level].coderPosition).style.backgroundSize = "cover";

    } else if (id == "f1") {

        document.getElementById(lvls[level].coderPosition).innerHTML = 4;
        document.getElementById(lvls[level].coderPosition).style.backgroundImage = "url('./assets/f1.png')";
        document.getElementById(lvls[level].coderPosition).style.backgroundSize = "cover";

    } else if (id == "f2") {

        document.getElementById(lvls[level].coderPosition).innerHTML = 5;
        document.getElementById(lvls[level].coderPosition).style.backgroundImage = "url('./assets/f2.png')";
        document.getElementById(lvls[level].coderPosition).style.backgroundSize = "cover";

    } else if (id == "f3") {

        document.getElementById(lvls[level].coderPosition).innerHTML = 6;
        document.getElementById(lvls[level].coderPosition).style.backgroundImage = "url('./assets/f3.png')";
        document.getElementById(lvls[level].coderPosition).style.backgroundSize = "cover";

    } else if (id == "f4") {

        document.getElementById(lvls[level].coderPosition).innerHTML = 7;
        document.getElementById(lvls[level].coderPosition).style.backgroundImage = "url('./assets/f4.png')";
        document.getElementById(lvls[level].coderPosition).style.backgroundSize = "cover";

    } else if (id == "f5") {

        document.getElementById(lvls[level].coderPosition).innerHTML = 8;
        document.getElementById(lvls[level].coderPosition).style.backgroundImage = "url('./assets/f5.png')";
        document.getElementById(lvls[level].coderPosition).style.backgroundSize = "cover";

    }


}


scrCount = 0;

function execFunction(settings, script) {


    const rPColor = document.getElementById(settings.scenarioId + settings.runnerPosition[0] + '_' + settings.runnerPosition[1]).style.backgroundColor

    if (script[0][0] == settings.moveCode) {

        if (rPColor == script[1][0] || script[1][0] == 'silver') {

            move(settings);

        }


    } else if (script[0][0] == settings.rotateClockCode) {

        //setTimeout(rotateClock(), speed);

        if (rPColor == script[1][0] || script[1][0] == 'silver') {

            rotateClock(settings);

        }

    } else if (script[0][0] == settings.rotateCounterClockCode) {

        //setTimeout(rotateCounterClock(), speed);

        if (rPColor == script[1][0] || script[1][0] == 'silver') {

            rotateCounterClock(settings);

        }

    } else if (script[0][0] == settings.f1Code) {

        if (rPColor == script[1][0] || script[1][0] == 'silver') {

            scrCount = scrCount + 7;
            execFunction(settings, getScript(settings.coderSpaceId, 0));
        }

    } else if (script[0][0] == settings.f2Code) {

        if (rPColor == script[1][0] || script[1][0] == 'silver') {
            scrCount = scrCount + 7;
            execFunction(settings, getScript(settings.coderSpaceId, 1));
        }

    } else if (script[0][0] == settings.f3Code) {

        if (rPColor == script[1][0] || script[1][0] == 'silver') {
            scrCount = scrCount + 7;
            execFunction(settings, getScript(settings.coderSpaceId, 2));

        }

    } else if (script[0][0] == settings.f4Code) {


        if (rPColor == script[1][0] || script[1][0] == 'silver') {
            scrCount = scrCount + 7;
            execFunction(settings, getScript(settings.coderSpaceId, 3));

        }

    } else if (script[0][0] == settings.f5Code) {


        if (rPColor == script[1][0] || script[1][0] == 'silver') {
            scrCount = scrCount + 7;
            execFunction(settings, getScript(settings.coderSpaceId, 4));

        }
 

    }

    script[0].shift();
    script[1].shift();



    if (script[0].length > 0) {


        setTimeout(function () { execFunction(settings, script); }, 300)


    } else {

        setTimeout(function () { if (settings.starCount != 0) lost(settings, true); enableBtn(".btn") }, (100 + (scrCount * 300)));
    }


}

function delCode(settings) {

    document.getElementById(settings.coderPosition).style.backgroundColor = "silver";
    document.getElementById(settings.coderPosition).style.backgroundImage = "none";
    document.getElementById(settings.coderPosition).innerHTML = "";
    //add img


}

function lost(settings, perdeu) {

    id = settings.scenarioId + settings.runnerPosition[0] + '_' + settings.runnerPosition[1];

    if (document.getElementById(id).style.visibility == 'hidden' || perdeu) {
        //settings.starCount = 0; se der errado foi aqui
        settings.runnerPosition = settings.runnerPosition0;
        settings.runerDirection = 20002;
        settings.runnerImageUrl = "url('./assets/pac-manaF.png')";
        settings.starCount = settings.starCount0;

        createScenario(settings.scenarioLines, settings.scenarioCollums, settings.scenarioBlockWidth, settings.scenarioBlockHeight, settings.scenarioId);

        createLevel(settings.level, settings.scenarioLines, settings.scenarioCollums, settings.scenarioId)

        createCharacter(settings.scenarioId, settings.runnerPosition);
        addStars(settings.stars, settings.scenarioId, settings.starImageUrl);
        window.alert("Perdeu Playboy!")
    }

}

function win(settings) {
    if (settings.starCount == 0) {
        //manaUpdate(settings);
        stop();
        alert('venceu')
        console.log(settings.manaCount)
        level++
        lvls[level].manaCount = manaUpdate(settings);
        console.log(lvls[level].manaCount)
        startGame(lvls[level])
    }
}

function colisions(settings) {

    x = settings.runnerPosition[0]
    y = settings.runnerPosition[1]

    if (settings.stars[x][y] == "*") {
        settings.starCount = settings.starCount - 1
    }

}

function stopScript(settings) {
    lost(settings, true)
}

// ------ Aux Functions ------

function getDirection(settings) {

    if (Math.abs(settings.runerDirection % 4) == 0) settings.runnerPosition[1]--;
    if (Math.abs(settings.runerDirection % 4) == 1) settings.runnerPosition[0]--;
    if (Math.abs(settings.runerDirection % 4) == 2) settings.runnerPosition[1]++;
    if (Math.abs(settings.runerDirection % 4) == 3) settings.runnerPosition[0]++;

}

function selectCell(cel) {

    // mudar de cor para img
    document.getElementById(lvls[level].coderPosition).style.borderColor = "black";
    lvls[level].coderPosition = cel.id;
    document.getElementById(lvls[level].coderPosition).style.borderColor = "red";


}

function getRotation(settings) {

    //settings.runerDirection 

    if (Math.abs(settings.runerDirection % 4) == 0) settings.runnerImageUrl = "url('./assets/pac-manaB.png')";
    if (Math.abs(settings.runerDirection % 4) == 1) settings.runnerImageUrl = "url('./assets/pac-manaU.png')";;
    if (Math.abs(settings.runerDirection % 4) == 2) settings.runnerImageUrl = "url('./assets/pac-manaF.png')";
    if (Math.abs(settings.runerDirection % 4) == 3) settings.runnerImageUrl = "url('./assets/pac-manaD.png')";

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function getScript(id, r) {

    scriptCode = []
    scriptColor = []

    script = []

    //gets table
    var oTable = document.getElementById(id);

    //gets cells of current row  
    var oCells = oTable.rows.item(r).cells;

    //gets amount of cells of current row
    var cellLength = oCells.length;

    //loops through each cell in current row
    for (var j = 1; j < cellLength; j++) {

        // get your cell info here
        var cellVal = oCells.item(j).innerHTML;
        var cellCol = oCells.item(j).style.backgroundColor;

        scriptCode.push(cellVal);
        scriptColor.push(cellCol);

    }

    script.push(scriptCode);
    script.push(scriptColor);


    return script
}


function manaUpdate(settings) {

    for (x = 0; x < 5; x++) {
        script = getScript(settings.coderSpaceId, x);
        for (y = 0; y < 7; y++) {
            //console.log("manaUpdadte")
            //console.log(x + script[0][y])
            if (script[0][y] != " ") {
                settings.manaCount--
            }
        }

    }

    return settings.manaCount
}

function disableBtn(id) {
    document.querySelector(id).disabled = true;
}

function enableBtn(id) {
    document.querySelector(id).disabled = false;
}

// ------ Standby Functions ------



/*Preenche a célula da tabela HTML escolhida pelo usuário ao clicar*/
setOnCeil = function (cel, pos) {


    cel.innerHTML = actions[1];
    codePaper[pos] = actions[1];

}

