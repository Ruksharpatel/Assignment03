/// <reference path="../objects/star.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private fish: objects.fish;
        private coin: objects.coin;
        private stars = [];
        private scoreboard: objects.Scoreboard;

        constructor(fish: objects.fish, coin: objects.coin, stars, scoreboard: objects.Scoreboard) {
            this.fish = fish;
            this.coin = coin;
            this.stars = stars;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between plane and any cloud object
        private fishAnsStar(cloud: objects.star) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.fish.image.x;
            p1.y = this.fish.image.y;
            p2.x = cloud.image.x;
            p2.y = cloud.image.y;
            if (this.distance(p1, p2) < ((this.fish.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 1;
                cloud.reset();
            }
        }

        // check collision between plane and island
        private fishAndCoin() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.fish.image.x;
            p1.y = this.fish.image.y;
            p2.x = this.coin.image.x;
            p2.y = this.coin.image.y;
            if (this.distance(p1, p2) < ((this.fish.height / 2) + (this.coin.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score += 100;
                this.coin.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.STAR_NUM; count++) {
                this.fishAnsStar(this.stars[count]);
            }
            this.fishAndCoin();
        }
    }
} 