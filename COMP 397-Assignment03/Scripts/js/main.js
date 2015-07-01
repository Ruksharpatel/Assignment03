var Button = (function () {
    function Button(path, x, y) {
        this._x = x;
        this._y = y;
        this._image = new createjs.Bitmap(path);
        this._image.x = this._x;
        this._image.y = this._y;

        this._image.addEventListener("mouseover", this._buttonOver);
        this._image.addEventListener("mouseout", this._buttonOut);
    }
    // PUBLIC PROPERTIES
    Button.prototype.setX = function (x) {
        this._x = x;
    };

    Button.prototype.getX = function () {
        return this._x;
    };

    Button.prototype.setY = function (y) {
        this._y = y;
    };

    Button.prototype.getY = function () {
        return this._y;
    };

    Button.prototype.getImage = function () {
        return this._image;
    };

    // PRIVATE EVENT HANDLERS
    Button.prototype._buttonOut = function (event) {
        event.currentTarget.alpha = 1; // 100% Alpha
    };

    Button.prototype._buttonOver = function (event) {
        event.currentTarget.alpha = 0.7;
    };
    return Button;
})();

//VARIABLE SCTION STARTS FROM HERE//
var canvas;
var stage;
var tiles = [];
var reelContainers = [];

/*CONSTANT variable*/
var NUM_REELS = 3;

/*Game variables*/
var playerMoney = 1000;
var winnings = 0;
var jackpot = 5000;
var turn = 0;
var playerBet = 100;
var winNumber = 0;
var lossNumber = 0;
var spinResult;
var fruits = "";
var winRatio = 0;

/* Game Symbols */
var bells = 0;
var coins = 0;
var cherries = 0;
var diamonds = 0;
var brinjals = 0;
var lemons = 0;
var grapes = 0;
var blanks = 0;

/*OBJECTS VARIABLE*/
var game;
var background;
var spinButton;
var betMaxButton;
var betOneButton;
var resetButton;
var powerButton;
var increaseButton;
var decreaseButton;

// Game Functions Starts from here//
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas); // Parent Object
    stage.enableMouseOver(20); // Turn on Mouse Over events
    createjs.Ticker.setFPS(60); // Set the frame rate to 60 fps
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

/* Utility function to display all the values/labels */
function labels() {
    var canvas = document.getElementById("canvas");
   
    var text1 = canvas.getContext("2d");
    text1.fillStyle = "#ADD8E6";
    text1.font = "17px Times New Roman";
    text1.fillText("Player's Money: " + playerMoney, 35, 430);
    text1.fillText("Player's Bet: " + playerBet, 193, 430);

    var text2 = canvas.getContext("2d");
    text2.fillStyle = "#ADD8E6";
    text2.font = "20px Times New Roman";
    text2.fillText("Jackpot \t" + jackpot, 100, 380);

    var text3 = canvas.getContext("2d");
    text3.fillStyle = "#ADD8E6";
    text3.font = "20px Times New Roman";
    text3.fillText("Change Bet", 60, 520)
    
}

/*GAMELOOP*/
function gameLoop() {
    stage.update();
    labels();
}

/* Utility function to reset all fruit tallies */
function resetFruitTally() {
    bells = 0;
    coins = 0;
    cherries = 0;
    brinjals = 0;
    lemons = 0;
    grapes = 0;
    diamonds = 0;
    blanks = 0;
}

/* Utility function to reset the player stats */
function resetAll() {
    playerMoney = 1000;
    winnings = 0;
    jackpot = 5000;
    turn = 0;
    playerBet = 10;
    winNumber = 0;
    lossNumber = 0;
    winRatio = 0;
}

/* Utility function to check if a value falls within a range of bounds */
function checkRange(value, lowerBounds, upperBounds) {
    if (value >= lowerBounds && value <= upperBounds) {
        return value;
    } else {
        return !value;
    }
}

/* When this function is called it determines the betLine results.
e.g. Bar - Orange - Banana */
function Reels() {
    var betLine = [" ", " ", " "];
    var outCome = [0, 0, 0];
    
    for (var spin = 0; spin < 3; spin++) {
        outCome[spin] = Math.floor((Math.random() * 65) + 1);
        switch (outCome[spin]) {
            case checkRange(outCome[spin], 1, 27):
                betLine[spin] = "blank";
                blanks++;
                break;
            case checkRange(outCome[spin], 28, 37):
                betLine[spin] = "bells";
                bells++;
                break;
            case checkRange(outCome[spin], 38, 46):
                betLine[spin] = "coins";
                coins++;
                break;
            case checkRange(outCome[spin], 47, 54):
                betLine[spin] = "cherries";
                cherries++;
                break;
            case checkRange(outCome[spin], 55, 59):
                betLine[spin] = "diamonds";
                diamonds++;
                break;
            case checkRange(outCome[spin], 60, 62):
                betLine[spin] = "brinjals";
                brinjals++;
                break;
            case checkRange(outCome[spin], 63, 64):
                betLine[spin] = "grapes";
                grapes++;
                break;
            case checkRange(outCome[spin], 65, 65):
                betLine[spin] = "lemons";
                lemons++;
                break;
        }
    }
    return betLine;
}

/* This function calculates the player's winnings, if any */
function determineWinnings() {
    if (blanks == 0) {
        if (bells == 3) {
            winnings = playerBet * 10;
        } else if (coins == 3) {
            winnings = playerBet * 20;
        } else if (cherries == 3) {
            winnings = playerBet * 30;
        } else if (diamonds == 3) {
            winnings = playerBet * 40;
        } else if (brinjals == 3) {
            winnings = playerBet * 50;
        } else if (lemons == 3) {
            winnings = playerBet * 75;
        } else if (grapes == 3) {
            winnings = playerBet * 100;
        } else if (bells == 2) {
            winnings = playerBet * 2;
        } else if (coins == 2) {
            winnings = playerBet * 2;
        } else if (cherries == 2) {
            winnings = playerBet * 3;
        } else if (diamonds == 2) {
            winnings = playerBet * 4;
        } else if (brinjals == 2) {
            winnings = playerBet * 5;
        } else if (lemons == 2) {
            winnings = playerBet * 10;
        } else if (grapes == 2) {
            winnings = playerBet * 20;
        } else {
            winnings = playerBet * 1;
        }

        if (grapes == 1) {
            winnings = playerBet * 5;
        }
        winNumber++;
        showWinMessage();
    } else {
        lossNumber++;
        showLossMessage();
    }
}

/* Utility function to show a win message and increase player money */
function showWinMessage() {
    playerMoney += winnings;
    resetFruitTally();
    checkJackPot();
}

/* Utility function to show a loss message and reduce player money */
function showLossMessage() {
    playerMoney -= playerBet;
    resetFruitTally();
}

/* Check to see if the player won the jackpot */
function checkJackPot() {
    /* compare two random values */
    var jackPotTry = Math.floor(Math.random() * 51 + 1);
    var jackPotWin = Math.floor(Math.random() * 51 + 1);
    if (jackPotTry == jackPotWin) {
        alert("You Won the $" + jackpot + " Jackpot!!");
        playerMoney += jackpot;
        jackpot = 1000;
    }
}

/*Spin button clicked and the values for the reels are fetched*/
function spinButtonClicked(event) {
    if (playerMoney == 0) {
        if (confirm("You ran out of Money! \nDo you want to play again?")) {
            resetAll();
            labels();
        }
    } else if (playerBet > playerMoney) {
        alert("You don't have enough Money to place that bet.");
    } else if (playerBet < 0) {
        alert("All bets must be a positive $ amount.");
    } else if (playerBet <= playerMoney) {
        spinResult = Reels();
        fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];

        determineWinnings();
        turn++;

        for (var index = 0; index < NUM_REELS; index++) {
            reelContainers[index].removeAllChildren();
            tiles[index] = new createjs.Bitmap("img/symbols/" + spinResult[index] + ".png");
            reelContainers[index].addChild(tiles[index]);
        }
    } else {
        alert("Please enter a valid bet amount");
    }
}

/*When the user wants to restart the Game*/
function resetButtonClicked(event) {
    resetFruitTally();
    resetAll();
    main();
}

/*when the user wants to exit the game*/
function powerButtonClicked(event) {
    window.open('', '_self', '');
    window.close();
}

//enables user to increase th bet money
function betIncButtonClicked(event) {
    if (playerBet >= playerMoney)
        alert("You are not allowed to bet more than this.");
    else {
        playerBet = playerBet + 10;
        gameLoop();
    }
}

//enables user to decrease th bet money
function betDecButtonClicked(event) {
    if (playerBet <= 10)
        alert("You are not allowed to bet bellow this.");
    else {
        playerBet = playerBet - 10;
        gameLoop();
    }
}

/*this will enable user to bet the minimum amount at one spin*/
function betOneButtonClicked(event) {
    playerBet = 10;
    spinResult = Reels();
    fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];

    determineWinnings();
    turn++;

    for (var index = 0; index < NUM_REELS; index++) {
        reelContainers[index].removeAllChildren();
        tiles[index] = new createjs.Bitmap("img/symbols/" + spinResult[index] + ".png");
        reelContainers[index].addChild(tiles[index]);
    }
}

/*this will enable user to bet the highest amount*/
function betMaxButtonClicked(event) {
    playerBet = playerMoney;
    spinResult = Reels();
    fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
    
    determineWinnings();
    turn++;

    for (var index = 0; index < NUM_REELS; index++) {
        reelContainers[index].removeAllChildren();
        tiles[index] = new createjs.Bitmap("img/symbols/" + spinResult[index] + ".png");
        reelContainers[index].addChild(tiles[index]);
    }
}

//To generate the user interface of the game
function createUI() {
    background = new createjs.Bitmap("img/mainImage.fw.png");
    game.addChild(background); // Add the background to the game container

    var can_pos = document.getElementById('canvas');

    for (var index = 0; index < NUM_REELS; index++) {
        reelContainers[index] = new createjs.Container();
        game.addChild(reelContainers[index]);
    }
    reelContainers[0].x = 75;
    reelContainers[0].y = 247;
    reelContainers[1].x = 155;
    reelContainers[1].y = 247;
    reelContainers[2].x = 235;
    reelContainers[2].y = 247;

    // Spin Button
    spinButton = new Button("img/spinButton.fw.png", 270, 445);
    game.addChild(spinButton.getImage());

    // Spin Button Event Listeners
    spinButton.getImage().addEventListener("click", spinButtonClicked);

    // Bet Max Button
    betMaxButton = new Button("img/betTenButton.fw.png", 210, 445);
    game.addChild(betMaxButton.getImage());
    betMaxButton.getImage().addEventListener("click", betMaxButtonClicked);

    // Bet One Button
    betOneButton = new Button("img/betOneButton.fw.png", 150, 445);
    game.addChild(betOneButton.getImage());
    betOneButton.getImage().addEventListener("click", betOneButtonClicked);

    // Reset Button
    resetButton = new Button("img/resetButton.fw.png", 90, 445);
    game.addChild(resetButton.getImage());
    resetButton.getImage().addEventListener("click", resetButtonClicked);

    // Power Button
    powerButton = new Button("img/powerButton.fw.png", 30, 445);
    game.addChild(powerButton.getImage());
    powerButton.getImage().addEventListener("click", powerButtonClicked);

    //Up button to increase Bet
    increaseButton = new Button("img/uparrow.png", 170, 500);
    game.addChild(increaseButton.getImage());
    increaseButton.getImage().addEventListener("click", betIncButtonClicked);

    //Down button to decrease Bet
    decreaseButton = new Button("img/downArrow.png", 220, 500);
    game.addChild(decreaseButton.getImage());
    decreaseButton.getImage().addEventListener("click", betDecButtonClicked);
}

function main() {
    game = new createjs.Container(); // Instantiates the Game Container

    createUI();

    stage.addChild(game); // Adds the Game Container to the Stage
}
//# sourceMappingURL=game.js.map
