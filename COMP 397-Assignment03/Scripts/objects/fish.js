var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Fish Class+++++++++++++++++++++++++++++++++++++++
    var Fish = (function (_super) {
        __extends(Fish, _super);
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        function Fish(imageString) {
            _super.call(this, imageString);
            this.sound = "river";
            this.x = 550;
            createjs.Sound.play(this.sound, { "loop": -1 }); //-1 means forever
        }
        //PUBLIC METHODS++++++++++++++++++++++++++++++++++
        Fish.prototype.update = function () {
            this.y = stage.mouseY; //position fish under mouse
        };
        return Fish;
    })(objects.GameOjects);
    objects.Fish = Fish;
})(objects || (objects = {}));
//# sourceMappingURL=fish.js.map