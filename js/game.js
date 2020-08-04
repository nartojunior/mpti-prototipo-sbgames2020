
//Settings

//Game setup JSON

//Game Init

// startGame(setup);


// Functions

// ------ Map Functions ------



function startLevel(settings) {
    console.log(level, settings.manaCount);
    settings.isLive = true;
    enableBtn(".btn");
    
    createLevel(settings.level);
    
    createCharacter(settings.runnerPosition0, settings);
    
    addStars(settings.stars);
    

}




