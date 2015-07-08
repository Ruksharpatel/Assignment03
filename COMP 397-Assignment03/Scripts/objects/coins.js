var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Coins Class+++++++++++++++++++++++++++++++++++++++
    var Coins = (function (_super) {
        __extends(Coins, _super);
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        function Coins(imageString) {
            _super.call(this, imageString);
            this.sound = "yes";
            this.dx = 5;
            this.reset();
        }
        //PRIVATE METHODS+++++++++++++++++++++++++++++++++
        Coins.prototype.checkBounds = function () {
            //check if coin has left the screen
            if (this.x > 640 + this.width) {
                this.reset();
            }
        };
        Coins.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480); //start coins at random location
            this.x = -this.width; //starts coin off the stage
        };
        //PUBLIC METHODS++++++++++++++++++++++++++++++++++
        Coins.prototype.update = function () {
            this.x += this.dx; //moves coin left side the stage
            this.checkBounds();
        };
        return Coins;
    })(objects.GameOjects);
    objects.Coins = Coins;
})(objects || (objects = {}));
//# sourceMappingURL=coins.js.map