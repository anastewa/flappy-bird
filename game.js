import { Pipe } from "./pipe.js";
export class Game {
    SPEED = 3; //элементы будут двигаться три пикселя в один кадр
    DISTANCE_BETWEEN_PIPES = 450 //через каждые 450 пикселей трубы будет создаваться новая
    frameCount = 0;
    constructor(canvas){
     this.canvas = canvas;
     this.ctx = this.canvas.getContext("2d")
     const height = window.visualViewport ?
         window.visualViewport.height : window.innerHeight;
     const width = window.visualViewport 
         ? Math.min(window.visualViewport.width, height * 0.6)
         : Math.min(window.innerWidth, height *0.6);
        this.canvas.height = 900;
        this.canvas.width =  900 *width/height;

        this.pipes = [ new Pipe(this.canvas)];
    }
    start(){
        this.intervalId = setInterval(() => this.draw(), 10);
       
  } 
   draw(){
    this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height);
    if(this.frameCount * this.SPEED > this.DISTANCE_BETWEEN_PIPES) {this.pipes.push( new Pipe(this.canvas))
        this.frameCount=0
    }
    this.updatePipes(); //который рисует трубы
    this.frameCount++; //увелечение труб до бесконечности   
}

   updatePipes(){
    for(let  i = 0; i < this.pipes.length; i++ ){
        this.pipes[i].update(this.SPEED) //чтоб смешать на несколько пикселей
    }
    this.pipes = this.pipes.filter(pipe => pipe.x + pipe.width > 0); //удаляем те трубы которые за экраном
}
}
