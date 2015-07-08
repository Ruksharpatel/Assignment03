module objects {
    //StarFish Class+++++++++++++++++++++++++++++++++++++++
    export class GameOjects extends createjs.Bitmap {
        //PUBLIC PROPERTIES+++++++++++++++++++++++++++++++++
        public width: number;
        public height: number;
        public isColliding: boolean = false;
        public sound: string = "";
        public name: string = "";

        //PROTECTED PROPERTIES++++++++++++++++++++++++++++++++
        protected dx: number;
        protected dy: number;
       
        //CONSTRUCTOR+++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5; //set focal point in the middle
            this.regY = this.height * 0.5;

        }

    }
}   