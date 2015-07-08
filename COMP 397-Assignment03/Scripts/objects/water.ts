module objects {
    //Water Class+++++++++++++++++++++++++++++++++++++++
    export class Water extends createjs.Bitmap {
        //PUBLIC PROPERTIES+++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5; //moves 5 px per frame

        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        //PRIVATE METHODS+++++++++++++++++++++++++++++++++
        private checkBounds(): void {
            //check if water has left the screen
            if (this.x == 0) {
                this.reset();
            }
        }

        private reset(): void {
            this.y = 0;
            this.x = -375; //reset water off screen
        }
        //PUBLIC METHODS++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx;
            this.checkBounds();
        }
    }
} 