var level1 = {

    "runnerPosition": [5, 6],
    "coderPosition": "coderSpaceTableCell0_1",
    "runerDirection": 20002, //gambi das brabas
    "runnerImageUrl": "url('./assets/pac-manaF.png')",
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
    "starCount": 2,
    "starCount0": 2,
    "manaCount": 100
}

function selectCell(cel) {

    // mudar de cor para img
    document.getElementById(level1.coderPosition).style.borderColor = "black";
    level1.coderPosition = cel.id;
    document.getElementById(level1.coderPosition).style.borderColor = "red";


}

function addFunction(id) {

    if (id == "move") {

        document.getElementById(level1.coderPosition).innerHTML = 1;
        document.getElementById(level1.coderPosition).style.backgroundImage = "url('./assets/forward.png')";
        document.getElementById(level1.coderPosition).style.backgroundSize = "cover";

    } else if (id == "rotateClock") {

        document.getElementById(level1.coderPosition).innerHTML = 2;
        document.getElementById(level1.coderPosition).style.backgroundImage = "url('./assets/right.png')";
        document.getElementById(level1.coderPosition).style.backgroundSize = "cover";

    } else if (id == "rotateCounterClock") {

        document.getElementById(level1.coderPosition).innerHTML = 3;
        document.getElementById(level1.coderPosition).style.backgroundImage = "url('./assets/left.png')";
        document.getElementById(level1.coderPosition).style.backgroundSize = "cover";

    } else if (id == "f1") {

        document.getElementById(level1.coderPosition).innerHTML = 4;
        document.getElementById(level1.coderPosition).style.backgroundImage = "url('./assets/f1.png')";
        document.getElementById(level1.coderPosition).style.backgroundSize = "cover";

    } else if (id == "f2") {

        document.getElementById(level1.coderPosition).innerHTML = 5;
        document.getElementById(level1.coderPosition).style.backgroundImage = "url('./assets/f2.png')";
        document.getElementById(level1.coderPosition).style.backgroundSize = "cover";

    } else if (id == "f3") {

        document.getElementById(level1.coderPosition).innerHTML = 6;
        document.getElementById(level1.coderPosition).style.backgroundImage = "url('./assets/f3.png')";
        document.getElementById(level1.coderPosition).style.backgroundSize = "cover";

    } else if (id == "f4") {

        document.getElementById(level1.coderPosition).innerHTML = 7;
        document.getElementById(level1.coderPosition).style.backgroundImage = "url('./assets/f4.png')";
        document.getElementById(level1.coderPosition).style.backgroundSize = "cover";

    } else if (id == "f5") {

        document.getElementById(level1.coderPosition).innerHTML = 8;
        document.getElementById(level1.coderPosition).style.backgroundImage = "url('./assets/f5.png')";
        document.getElementById(level1.coderPosition).style.backgroundSize = "cover";

    }


}


//startGame(level1);