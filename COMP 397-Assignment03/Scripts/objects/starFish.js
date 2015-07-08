var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //StarFish Class+++++++++++++++++++++++++++++++++++++++
    var StarFish = (function (_super) {
        __extends(StarFish, _super);
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        function StarFish(imageString) {
            _super.call(this, imageString);
            this.sound = "no";
            this.name = "star";
            this.reset();
        }
        //PRIVATE METHODS+++++++++++++++++++++++++++++++++
        StarFish.prototype.checkBounds = function () {
            //check if coin has left the screen
            if (this.x > 640 + this.width) {
                this.reset();
            }
        };
        StarFish.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480); //start starfish at random location
            this.x = -this.width; //starts coin off the stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        };
        //PUBLIC METHODS++++++++++++++++++++++++++++++++++
        StarFish.prototype.update = function () {
            this.x += this.dx; //moves starfish left side the stage
            this.y += this.dy; //drifts starfish left and right
            this.checkBounds();
        };
        return StarFish;
    })(objects.GameOjects);
    objects.StarFish = StarFish;
})(objects || (objects = {}));
//# sourceMappingURL=starfish.js.map