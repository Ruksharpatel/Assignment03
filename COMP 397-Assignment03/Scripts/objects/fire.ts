﻿module objects {
    //Fire class+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Fire extends createjs.Bitmap {

        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number;
        dy: number;


        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.reset();
        }

        //PRIVATE METHODS++++++++++++++++++++++++++++++++++

        //check if island has left screen
        private checkBounds(): void {
            if (this.x > 640 + this.width) {
                this.reset();
            }
        }

        private reset(): void {
            this.y = Math.floor(Math.random() * 480); // start island at random location
            this.x = -this.width; // starts island off the stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;

        }
        //PUBLIC METHODS+++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; //moves fire down the stage
            this.y += this.dy; //drifts fire up and down
            this.checkBounds();

        }
    }
}   