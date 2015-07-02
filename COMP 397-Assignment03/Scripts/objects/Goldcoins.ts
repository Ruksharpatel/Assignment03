module objects {
    //Goldcoins class+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class GoldCoins extends objects.GameObjects {

          //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.sound = "coin";
            this.dx = 5;
            this.reset();
        }

        //PRIVATE METHODS++++++++++++++++++++++++++++++++++

        //check if GoldCoins has left screen
        private checkBounds(): void {
            if (this.x > 640 + this.width) {
                this.reset();
            }
        }

       private reset(): void {
            this.y = Math.floor(Math.random() * 480); // start Goldcoins at random location
            this.x = -this.width; // starts GoldCoins off the stage
           
        }
        //PUBLIC METHODS+++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; //moves Goldcoins down the stage
            this.checkBounds();
           
        }
    }
}  