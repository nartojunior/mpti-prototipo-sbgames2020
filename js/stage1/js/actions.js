// ------ Actions Functions ------

function move(settings) {

    id = "td" + settings.runnerPosition[0] + '_' + settings.runnerPosition[1];
    document.getElementById(id).style.backgroundImage = "none";

    getDirection(settings);

    id = "td" + settings.runnerPosition[0] + '_' + settings.runnerPosition[1];
    document.getElementById(id).style.backgroundImage = settings.runnerImageUrl;

    //document.getElementById(settings.scenarioId + settings.runnerPosition[0] + '_' + settings.runnerPosition[1]).style.background = "white";
    colisions(settings);
    if (win(settings)) {
        lost(settings, false);
    };

}

function rotateClock(settings) {

    settings.runerDirection++;
    //settings.runerDirection = Math.abs(settings.runerDirection % 4);
    getRotation(settings);
    document.getElementById("td" + settings.runnerPosition[0] + '_' + settings.runnerPosition[1]).style.backgroundImage = settings.runnerImageUrl;

}

function rotateCounterClock(settings) {

    settings.runerDirection--;

    getRotation(settings);
    document.getElementById("td" + settings.runnerPosition[0] + '_' + settings.runnerPosition[1]).style.backgroundImage = settings.runnerImageUrl;

}

function addCollor(color) {

    
    document.getElementById(lvls[level].coderPosition).style.backgroundColor = color;

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
    console.log("está vivo?", settings.isLive)
    if (settings.isLive) {

        const rPColor = document.getElementById("td" + settings.runnerPosition[0] + '_' + settings.runnerPosition[1]).style.backgroundColor

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

            //setTimeout(function () { if (settings.starCount != 0) lost(settings, true); enableBtn(".btn"); return alert("acabou o tempo") }, (100 + (scrCount * 300)));
        }

    }

}

function delCode() {

    document.getElementById(lvls[level].coderPosition).style.backgroundColor = "silver";
    document.getElementById(lvls[level].coderPosition).style.backgroundImage = "none";
    document.getElementById(lvls[level].coderPosition).innerHTML = "";

}

function lost(settings, perdeu) {

    id = "td" + settings.runnerPosition[0] + '_' + settings.runnerPosition[1];

    if (document.getElementById(id).style.visibility == 'hidden' || perdeu) {
        //settings.starCount = 0; se der errado foi aqui
        //settings.runnerPosition = [5, 6];
        settings.runerDirection = settings.runerDirection0;
        settings.runnerImageUrl = settings.runnerImageUrl0;
        settings.starCount = settings.starCount0;
        settings.runnerPosition = settings.runnerPosition0;
        console.log("dentro do lost", settings.runnerPosition, settings.runnerPosition0);
        settings.isLive = false;
        //

        window.alert("Perdeu Playboy!")
        location.reload(true);
        setTimeout(function () { startLevel(lvls[level]); }, (100 + (scrCount * 300)));
        scrCount = 0;

    }

}

function win(settings) {
    if (settings.starCount == 0) {
        //manaUpdate(settings);
        stop();
        alert('venceu')
        console.log(settings.manaCount)

        lvls[level].manaCount = manaUpdate(settings);
        console.log(lvls[level].manaCount)
        startLevel(lvls[level])
        level++;
        if (level == 6) {
            window.alert("Para passar para o próximo estágio envie o print com as suas soluções");
            level = 1;
            window.location.assign('./lvl' + level + '.html');
            return false;
        } else {
            window.location.assign('./lvl' + level + '.html')
            return false;
        }
    } else {
        return true;
    }

}

function colisions(settings) {

    x = settings.runnerPosition[0]
    y = settings.runnerPosition[1]

    if (settings.stars[x][y] == "*") {
        settings.starCount = settings.starCount - 1
    }

}
