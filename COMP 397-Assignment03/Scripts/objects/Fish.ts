module objects {
    //Fish class+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Fish extends objects.GameObjects {

        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.sound = "river";
            this.x = 500; ////MODIFIED
        }

        //PUBLIC METHODS+++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            //position Fish under mouse
            this.y= stage.mouseY; //modifeid
        }
    }
} 