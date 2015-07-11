var objects;
(function (objects) {
    // SCOREBOARD CLASS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Scoreboard = (function () {
        //CONSTRUCTOR+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Scoreboard(stage, game) {
            this.livesText = "";
            this.scoreText = "";
            this.stage = stage;
            this.game = game;
            this.lives = constants.FISH_LIVES;
            this.score = 0;
            this.livesLabel = new createjs.Text(this.livesText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.scoreLabel = new createjs.Text(this.scoreText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.livesLabel.getBounds().width;
            this.height = this.livesLabel.getBounds().height;
            this.width = this.scoreLabel.getBounds().width;
            this.height = this.scoreLabel.getBounds().height;
            this.scoreLabel.x = 450;
            this.livesLabel.x = 25;
            game.addChild(this.livesLabel);
            game.addChild(this.scoreLabel);
        }
        Scoreboard.prototype.update = function () {
            this.livesText = "Lives: " + this.lives.toString();
            this.scoreText = "Score: " + this.score.toString();
            this.livesLabel.text = this.livesText;
            this.scoreLabel.text = this.scoreText;
        };
        Scoreboard.prototype.destroy = function () {
            game.removeChild(this.livesLabel);
            game.removeChild(this.scoreLabel);
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map