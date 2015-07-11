﻿/// <reference path="../managers/asset.ts" />
module objects {
    // Fish Class
    export class fish {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        riverSound: createjs.SoundInstance;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
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


        update() {
            this.image.y = this.stage.mouseY;
        }
        destroy() {
            this.riverSound.stop();
            game.removeChild(this.image);
        }
    }
} 