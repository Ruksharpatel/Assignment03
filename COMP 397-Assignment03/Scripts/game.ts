/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="objects/water.ts" />
/// <reference path="objects/ship.ts" />
/// <reference path="objects/fire.ts" />
/// <reference path="objects/island.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    { id: "ship", src: "assets/images/fish.fw.png" },
    { id: "water", src: "assets/images/water1.fw.png" },
    { id: "island", src: "assets/images/goldcoins.fw.png" },
    { id: "fire", src: "assets/images/starfish.png" }

  
];


// Game Variables

var water: objects.Water;
var ship: objects.Ship;
var island: objects.Island;
var fire:objects.Fire[] = [];

// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    water.update();
    ship.update();
    island.update();
   for (var fires = 0; fires < 3; fires++) {
        fire[fires].update();
    }
    stage.update();

    stats.end(); // end measuring
}
function main() {
    //add water to the stage
    water = new objects.Water(assets.getResult("water"));
    stage.addChild(water);
    //add island object to stage
    island = new objects.Island(assets.getResult("island"));
    stage.addChild(island);

    //add ship object to stage
    ship = new objects.Ship(assets.getResult("ship"));
    stage.addChild(ship);

    //add fire object to stage
    for (var fires = 0; fires < 3; fires++) {
        fire[fires] = new objects.Fire(assets.getResult("fire"));
        stage.addChild(fire[fires]);
    }   
}


