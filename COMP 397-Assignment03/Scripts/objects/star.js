/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var star = (function () {
        function star(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "starfish");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            game.addChild(this.image);
        }
        star.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x += this.dx;
            if (this.image.x > this.stage.canvas.width + this.width) {
                this.reset();
            }
        };
        star.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.width);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = -this.width;
        };
        star.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return star;
    })();
    objects.star = star;
})(objects || (objects = {}));
//# sourceMappingURL=star.js.map