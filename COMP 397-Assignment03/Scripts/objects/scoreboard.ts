module objects {
    // Scoreboard Class
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        lives: number;
        score: number;
        livesLabel: createjs.Text;
        scoreLabel: createjs.Text;
        livesText: string = "";
        scoreText: string = "";
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {

            this.stage = stage;
            this.game = game;
            this.lives = constants.PLANE_LIVES;
            this.score = 0;
            this.livesLabel= new createjs.Text(this.livesText, constants.LABEL_FONT, constants.LABEL_COLOUR);
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

        update() {
            this.livesText = "Lives: " + this.lives.toString();
            this.scoreText =  "Score: " + this.score.toString();
            this.livesLabel.text = this.livesText;
            this.scoreLabel.text = this.scoreText;
        }

        destroy() {
            game.removeChild(this.livesLabel);
            game.removeChild(this.scoreLabel);
            
        }
    }
} 