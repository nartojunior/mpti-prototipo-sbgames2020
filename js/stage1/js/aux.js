// ------ Aux Functions ------
function getDirection(settings) {

    if (Math.abs(settings.runerDirection % 4) == 0) settings.runnerPosition[1]--;
    if (Math.abs(settings.runerDirection % 4) == 1) settings.runnerPosition[0]--;
    if (Math.abs(settings.runerDirection % 4) == 2) settings.runnerPosition[1]++;
    if (Math.abs(settings.runerDirection % 4) == 3) settings.runnerPosition[0]++;

}

function selectCell(cel) {
    
    document.getElementById(lvls[level].coderPosition).style.borderColor = "black";
    lvls[level].coderPosition = cel.id;
    document.getElementById(lvls[level].coderPosition).style.borderColor = "red";
    

}

function getRotation(settings) {

    if (Math.abs(settings.runerDirection % 4) == 0) settings.runnerImageUrl = "url('./assets/pac-manaB.png')";
    if (Math.abs(settings.runerDirection % 4) == 1) settings.runnerImageUrl = "url('./assets/pac-manaU.png')";;
    if (Math.abs(settings.runerDirection % 4) == 2) settings.runnerImageUrl = "url('./assets/pac-manaF.png')";
    if (Math.abs(settings.runerDirection % 4) == 3) settings.runnerImageUrl = "url('./assets/pac-manaD.png')";

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

function stopScript(settings) {
    lost(settings, true)
}







// ------ Standby Functions ------

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


/*Preenche a célula da tabela HTML escolhida pelo usuário ao clicar*/
setOnCeil = function (cel, pos) {


    cel.innerHTML = actions[1];
    codePaper[pos] = actions[1];

}
