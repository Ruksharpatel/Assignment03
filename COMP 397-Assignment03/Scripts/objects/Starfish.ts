module objects {
    //Starfish class+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Starfish extends objects.GameObjects {

        

        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.sound = "ouch";
             this.reset();
        }

        //PRIVATE METHODS++++++++++++++++++++++++++++++++++

        //check if starfish has left screen
        private checkBounds(): void {
            if (this.x > 640 + this.width) {
                this.reset();
            }
        }

        private reset(): void {
            this.y = Math.floor(Math.random() * 480); // start starfish random location
            this.x = -this.width; // starts starfish off the stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;

        }
        //PUBLIC METHODS+++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; //moves starfish down the stage
            this.y += this.dy; //drifts strfish up and down
            this.checkBounds();

        }
    }
}   