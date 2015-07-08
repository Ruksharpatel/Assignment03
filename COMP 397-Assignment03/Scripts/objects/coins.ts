module objects {
    //Coins Class+++++++++++++++++++++++++++++++++++++++
    export class Coins extends objects.GameOjects {


        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.sound = "yes";
            this.name = "coin";
            this.dx = 5;
            this.reset();
        }
        //PRIVATE METHODS+++++++++++++++++++++++++++++++++
        private checkBounds(): void {
            //check if coin has left the screen
            if (this.x > 640 + this.width) {
                this.reset();
            }
        }

        private reset(): void {
            this.y = Math.floor(Math.random() * 480); //start coins at random location
            this.x = -this.width; //starts coin off the stage
        }
        //PUBLIC METHODS++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; //moves coin left side the stage
            this.checkBounds();
        }
    }
} 