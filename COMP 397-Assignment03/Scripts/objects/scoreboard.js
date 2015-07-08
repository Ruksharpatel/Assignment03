var objects;
(function (objects) {
    var ScoreBoard = (function () {
        //CONSTRUCTOR++++++++++++++++++++++++++++++
        function ScoreBoard() {
            //PUBLIC PROPERTIES+++++++++++++++++++++++++++++++
            this.score = 0;
            this.lives = 5;
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "black");
            this.socreLabel = new createjs.Text("Score:", "40px Consolas", "black");
            this.socreLabel.x = 390;
            stage.addChild(this.livesLabel);
            stage.addChild(this.socreLabel);
        }
        //PUBLIC METHODS++++++++++++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this.livesLabel.text = "Lives: " + this.lives;
            this.socreLabel.text = "Score: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map