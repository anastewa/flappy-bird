export class Pipe {
    static width = 100;
    width = Pipe.width;
//это нужно чтоб внутри класса использовать зис виф а снаружи пфпе виф
    spacing = 220;
    //растояние между трубами вертикально
    constructor(canvas){
        this.canvas = canvas ;
        this.ctx = canvas.getContext('2d');
        this.canvasHeight = canvas.height;
        this.top =  this.canvasHeight / 10 + Math.round(Math.random() *  this.canvasHeight / 3 );
        this.bottom = this.top + this.spacing;
        this.x = canvas.width;

    }
    draw(){
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect( this.x, 0, this.width, this.top);
        this.ctx.fillRect( this.x, this.bottom, this.width, this.canvasHeight - this.bottom); 
    }

    update(speed = 3){
        this.x -= speed;
        this.draw();
    }

    isOffScreen(){
        return this.x < -this.width;
    }
}
