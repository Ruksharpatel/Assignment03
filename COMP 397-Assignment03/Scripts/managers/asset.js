var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "ocean", src: "assets/images/scroll.fw.png" },
        { id: "engine", src: "assets/sounds/underwater.mp3" },
        { id: "thunder", src: "assets/sounds/hit.wav" },
        { id: "yay", src: "assets/sounds/coin.wav" }
    ];
    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": [
            "assets/images/SpriteSheet.png"
        ],
        "frames": [
            [2, 2, 94, 95, 0, 0, -2],
            [98, 2, 241, 91, 0, 0, 0],
            [341, 2, 91, 86, 0, 0, 0],
            [434, 2, 65, 65, 0, 0, 0],
            [434, 69, 50, 50, 0, 0, 0]
        ],
        "animations": {
            "starfish": [0],
            "btnReset": [1],
            "btnPlay.fw": [2],
            "fish.fw": [3],
            "goldcoins.fw": [4]
        },
    };
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map