module objects {
    //Water Class+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Water extends createjs.Bitmap {

        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;


        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
           
            this.reset();
        }

        //PRIVATE METHODS++++++++++++++++++++++++++++++++++

        //check if water has left screen
        private checkBounds(): void {
            if (this.x == 0) {
                this.reset();
            }
        }

        private reset(): void {
            this.y = 0;
            this.x = -790; // reset water to off screen

        }
        //PUBLIC METHODS+++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; //moves water down the stage
            this.checkBounds();

        }
    }
}   