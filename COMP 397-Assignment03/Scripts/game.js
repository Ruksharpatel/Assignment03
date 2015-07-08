/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="objects/gameobjects.ts" />
/// <reference path="objects/water.ts" />
/// <reference path="objects/fish.ts" />
/// <reference path="objects/coins.ts" />
/// <reference path="objects/starfish.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets;
var manifest = [
    { id: "water", src: "assets/images/scroll.fw.png" },
    { id: "fish", src: "assets/images/fish.fw.png" },
    { id: "coin", src: "assets/images/goldcoins.fw.png" },
    { id: "star", src: "assets/images/starfish.png" },
    { id: "yes", src: "assets/sounds/coin.wav" },
    { id: "no", src: "assets/sounds/hit.wav" },
    { id: "river", src: "assets/sounds/river.ogg" }
];
// Game Variables
var water;
var fish;
var coin;
var stars = [];
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
    coin.update();
    for (var star = 0; star < 3; star++) {
        stars[star].update();
        checkcollision(stars[star]);
    }
    checkcollision(coin);
    stage.update();
    stats.end(); // end measuring
}
//Check Collision Method+++++++++++++++++++++++++++++++++++++++++++++++
function checkcollision(gameObject) {
    var p1 = new createjs.Point();
    var p2 = new createjs.Point();
    p1.x = fish.x;
    p1.y = fish.y;
    p2.x = gameObject.x;
    p2.y = gameObject.y;
    if (utility.distance(p1, p2) < (fish.height * 0.5) + (gameObject.height * 0.5)) {
        if (gameObject.isColliding == false) {
            createjs.Sound.play(gameObject.sound);
        }
        gameObject.isColliding = true;
    }
    else {
        gameObject.isColliding = false;
    }
}
// Our Main Game Function
function main() {
    // add water object to the stage
    water = new objects.Water(assets.getResult("water"));
    stage.addChild(water);
    // add coin object to the stage
    coin = new objects.Coins(assets.getResult("coin"));
    stage.addChild(coin);
    // add fish object to the stage
    fish = new objects.Fish(assets.getResult("fish"));
    stage.addChild(fish);
    // add fish object to the stage
    for (var star = 0; star < 3; star++) {
        stars[star] = new objects.StarFish(assets.getResult("star"));
        stage.addChild(stars[star]);
    }
}
//# sourceMappingURL=game.js.map