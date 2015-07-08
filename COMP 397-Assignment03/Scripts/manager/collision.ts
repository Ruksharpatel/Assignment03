module managers {
    export class Collision {
        //CONSTRUCTOR+++++++++++++++++++++++++++++++++++++
        constructor() {
        }

        //PUBLIC METHODS++++++++++++++++++++++++++++++++++++
        //check collison method for gameobjects
        public check(gameObject: objects.GameOjects) {
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();

        p1.x = fish.x;
        p1.y = fish.y;

        p2.x = gameObject.x;
        p2.y = gameObject.y;

        if (utility.distance(p1, p2) < (fish.height * 0.5) + (gameObject.height * 0.5)) {

            if (gameObject.isColliding == false) {
                createjs.Sound.play(gameObject.sound);
                if (gameObject.name == "star") {
                    scoreboard.lives--;
                }
                if (gameObject.name == "coin") {
                    scoreboard.score += 10;
                }
            }
            gameObject.isColliding = true;
        }

        else {
            gameObject.isColliding = false;
        }
    }
    }
}