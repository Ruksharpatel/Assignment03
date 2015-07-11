/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // FISH CLASS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var fish = (function () {
        //CONSTRUCTOR+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function fish(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "fish.fw");
            this.image.x = 550;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.riverSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        fish.prototype.update = function () {
            // this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY; //drifts the fish up and down towards the stage
        };
        fish.prototype.destroy = function () {
            this.riverSound.stop();
            game.removeChild(this.image);
        };
        return fish;
    })();
    objects.fish = fish;
})(objects || (objects = {}));
//# sourceMappingURL=fish.js.map