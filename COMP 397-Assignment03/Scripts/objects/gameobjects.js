var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //StarFish Class+++++++++++++++++++++++++++++++++++++++
    var GameOjects = (function (_super) {
        __extends(GameOjects, _super);
        //CONSTRUCTOR+++++++++++++++++++++++++++++++++++++++++
        function GameOjects(imageString) {
            _super.call(this, imageString);
            this.isColliding = false;
            this.sound = "";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5; //set focal point in the middle
            this.regY = this.height * 0.5;
        }
        return GameOjects;
    })(createjs.Bitmap);
    objects.GameOjects = GameOjects;
})(objects || (objects = {}));
//# sourceMappingURL=gameobjects.js.map