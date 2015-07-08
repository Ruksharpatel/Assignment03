module objects {
    //Fish Class+++++++++++++++++++++++++++++++++++++++
    export class Fish extends objects.GameOjects {

    //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.sound = "river";
            this.x = 550;
         
        }
        //PUBLIC METHODS++++++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; //position fish under mouse
        }
    }
} 