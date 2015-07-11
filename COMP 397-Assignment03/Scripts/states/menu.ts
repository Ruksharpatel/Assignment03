/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        fish.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function menuState() {
        ocean.update();
        fish.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label;
        var gameNameLabel1: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        fish = new objects.fish(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "WATER COINS");
        game.addChild(gameNameLabel);

        //Display Instruction Label

        gameNameLabel1 = new objects.Label( 285, 150,"Try Collecting Coins as you go,but save\n yourself from the stars coming\n through your Way!! ");
        game.addChild(gameNameLabel1);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "btnPlay.fw");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
} 