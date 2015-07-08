module objects {
    export class ScoreBoard {
        //PUBLIC PROPERTIES+++++++++++++++++++++++++++++++
       public  score: number = 0;
       public lives: number = 5;

       private socreLabel: createjs.Text;
       private livesLabel: createjs.Text;

        //CONSTRUCTOR++++++++++++++++++++++++++++++
       constructor() {
           this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "black");
     
           this.socreLabel = new createjs.Text("Score:", "40px Consolas", "black");
           this.socreLabel.x = 390;
           stage.addChild(this.livesLabel);
           stage.addChild(this.socreLabel);
    }
        //PUBLIC METHODS++++++++++++++++++++++++++
       public update() {
           this.livesLabel.text = "Lives: " + this.lives;
           this.socreLabel.text = "Score: " + this.score;
        }
    }
} 