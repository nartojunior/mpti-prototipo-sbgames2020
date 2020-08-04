// ------ Map Functions ------

function createScenario(linhas=12, colunas=12, largura=26, altura=28, scenarioId="td") {
    //cria o cenário

    scenario = "<table align=center border=0 >";
    for (x = 0; x < linhas; x++) {
        scenario += "<tr>";
        for (y = 0; y < colunas; y++)
            scenario += "<td id=" + scenarioId + x + "_" + y + " style='width:" + largura + "px; height:" + altura + "px; background-color: silver '> </td>";

        scenario += "</tr>";
    }
    console.log(document.getElementById('scenario'))
    document.getElementById('scenario').innerHTML = scenario + "</table>";
    


}

function createCoderSpace(coderSpaceId="coderSpaceTable", numOfFunctions=5, functionsLength=8, largura=40, altura=40) {
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

function createCharacter(runner, settings) {
    id = "td" + runner[0] + '_' + runner[1];
    document.getElementById(id).style.backgroundImage = settings.runnerImageUrl0;
    console.log(runner, id, settings);
    console.log("char criado");
}

function chooseSpeed(speedSet) {
    speed = speedSet;
}

function startScript(settings) {

    disableBtn(".btn");

    var script = getScript("coderSpaceTable", 0);
    execFunction(settings, script);

}

function createLevel(level, linhas=12, colunas=12, scenarioId="td") {

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
    console.log("level criado")
}

function addStars(stars, scenarioId="td", starImageUrl="url('./assets/star.png')") {

    for (x = 0; x < 12; x++) {
        for (y = 0; y < 12; y++) {

            if (stars[x][y] == "*") {
                id = scenarioId + x + "_" + y
                document.getElementById(id).style.backgroundImage = starImageUrl;
            }
        }
    }
    console.log("stars criadas")
}
