/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="objects/gameobjects.ts" />
/// <reference path="objects/water.ts" />
/// <reference path="objects/Fish.ts" />
/// <reference path="objects/Starfish.ts" />
/// <reference path="objects/Goldcoins.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    { id: "fish", src: "assets/images/fish.fw.png" },
   // { id: "water", src: "assets/images/water1.fw.png" },
    { id: "water", src: "assets/images/blue.fw.png" },
    { id: "goldCoins", src: "assets/images/goldcoins.fw.png" },
    { id: "starFish", src: "assets/images/starfish.png" },
    { id: "yuppie", src: "assets/sounds/yuppie.wav" },
    { id: "ouch", src: "assets/sounds/ouch.mp3" },
    { id: "river", src: "assets/sounds/river.ogg" },
    { id: "coin", src: "assets/sounds/coin.wav" },

];


// Game Variables

var water: objects.Water;
var fish: objects.Fish;
var goldCoins: objects.GoldCoins;
var starFish:objects.Starfish[] = [];

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
    fish.update();
    goldCoins.update();
   for (var fires = 0; fires < 3; fires++) {
       starFish[fires].update();
       checkCollision(starFish[fires]);
      
    }
  
   checkCollision(goldCoins);
    stage.update();

    stats.end(); // end measuring
}

//Distance utility Method
function distance(p1: createjs.Point, p2: createjs.Point): number {
   return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
}
//CHECK THE DISTANCE BETWEEN GAME OBJECTS +++++++++++++++++++++++++++++++++++++++
function checkCollision(gameObject: objects.GameObjects) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();
    p1.x = fish.x;
    p1.y = fish.y;

    p2.x = gameObject.x;
    p2.y = gameObject.y;


    if (distance(p1, p2) < ((fish.width * 0.5) + (gameObject.width * 0.5))) {

        if (gameObject.isColliding == false) {
            createjs.Sound.play(gameObject.sound);
        }
        gameObject.isColliding = true;

    }
    else {
        gameObject.isColliding = false;
    }
}
//Our main game function
function main() {
    //add water object to the stage
    water = new objects.Water(assets.getResult("water"));
    stage.addChild(water);
    //add island object to stage
    goldCoins = new objects.GoldCoins(assets.getResult("goldCoins"));
    stage.addChild(goldCoins);

    //add ship object to stage
    fish = new objects.Fish(assets.getResult("fish"));
    stage.addChild(fish);

    //add fire object to stage
    for (var fires = 0; fires < 3; fires++) {
        starFish[fires] = new objects.Starfish(assets.getResult("starFish"));
        stage.addChild(starFish[fires]);
    }   
}


