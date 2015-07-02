module objects {
    //Ship class+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Ship extends createjs.Bitmap {

        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = 500; ////MODIFIED
        }

        //PUBLIC METHODS+++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            //position plane under mouse
            this.y= stage.mouseY; //modifeid
        }
    }
} 