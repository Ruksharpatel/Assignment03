module objects {
    //StarFish Class+++++++++++++++++++++++++++++++++++++++
    export class StarFish extends objects.GameOjects {
        

        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
           
            super(imageString);
            this.sound = "no";
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
            this.y = Math.floor(Math.random() * 480); //start starfish at random location
            this.x = -this.width; //starts coin off the stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        }
        //PUBLIC METHODS++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; //moves starfish left side the stage
            this.y += this.dy; //drifts starfish left and right
            this.checkBounds();
        }
    }
}  