var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Water Class+++++++++++++++++++++++++++++++++++++++
    var Water = (function (_super) {
        __extends(Water, _super);
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        function Water(imageString) {
            _super.call(this, imageString);
            this.dx = 5; //moves 5 px per frame
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        //PRIVATE METHODS+++++++++++++++++++++++++++++++++
        Water.prototype.checkBounds = function () {
            //check if water has left the screen
            if (this.x == 0) {
                this.reset();
            }
        };
        Water.prototype.reset = function () {
            this.y = 0;
            this.x = -375; //reset water off screen
        };
        //PUBLIC METHODS++++++++++++++++++++++++++++++++++
        Water.prototype.update = function () {
            this.x += this.dx;
            this.checkBounds();
        };
        return Water;
    })(createjs.Bitmap);
    objects.Water = Water;
})(objects || (objects = {}));
//# sourceMappingURL=water.js.map