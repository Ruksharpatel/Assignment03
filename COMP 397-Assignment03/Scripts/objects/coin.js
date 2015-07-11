/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Coin Class
    var coin = (function () {
        function coin(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "goldcoins.fw");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.dx = 5;
            game.addChild(this.image);
        }
        coin.prototype.update = function () {
            this.image.x += this.dx;
            if (this.image.x > this.stage.canvas.width + this.width) {
                this.reset();
            }
        };
        coin.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = -this.width;
        };
        coin.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return coin;
    })();
    objects.coin = coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map