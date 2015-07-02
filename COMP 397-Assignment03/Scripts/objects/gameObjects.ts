module objects {
    //Starfish class+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class GameObjects extends createjs.Bitmap {

        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++++++++++++++++++
        public  width: number;
        public height: number;
        public isColliding: boolean = false;
        public sound: string = "";


        //PROTECTED PROPERTIES++++++++++++++++++++++++++++++++++++++++++++++
        protected dx: number;
        protected  dy: number;
       
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
      }
    }
}    