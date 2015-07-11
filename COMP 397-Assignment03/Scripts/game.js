/// <reference path="lib/easeljs.d.ts" />
/// <reference path="lib/tweenjs.d.ts" />
/// <reference path="lib/soundjs.d.ts" />
/// <reference path="lib/preloadjs.d.ts" />
/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/star.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/fish.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
//GAME FRAMEWORK VARIABLES+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var stage;
var game;
var stats = new Stats();
var ocean;
var fish;
var coin;
var stars = []; // Stars array;
var scoreboard;
var collision;
var tryAgain;
var playButton;
var currentState;
var currentStateFunction;
//GAME FUNCTIONS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}
// init called after Assets have been loaded.
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();
    currentState = constants.MENU_STATE;
    changeState(currentState);
}
//Stats function
function setupStats() {
    stats.setMode(0);
    // align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '8px';
    document.body.appendChild(stats.domElement);
}
// Game Loop
function gameLoop(event) {
    stats.begin(); //begin Measuring
    currentStateFunction();
    stage.update();
    stats.end(); // end measuring
}
function changeState(state) {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
    }
}
//# sourceMappingURL=game.js.map