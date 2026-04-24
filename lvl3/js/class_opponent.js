class c_opponent extends c_go{
    move = false;
    counter = 0;
    alarm = 300;
    dx = 0;
    dy = 0;
    constructor(x,y,stepX,stepY,count,classes,w,h){
        super(x,y,stepX,stepY,count,classes,w,h);
        this.interval1 = setInterval(()=>{
            /* grr.play(); */
            this.stepX = Math.random()*3;
            this.stepY = Math.random()*3;
            if(Math.random()*1 > 0.5){
                this.stepX = -this.stepX;
            }
            if(Math.random()*1 > 0.5){
                this.stepY = -this.stepY;
            }
            this.move = true;
        },Math.floor(Math.random()*4000));
    }
    удалить(){
        super.удалить();
        clearInterval(this.interval1);
    }
    f_move(){
        super.f_move();
        /* if(((this.x - this.alarm) <= hero.x + hero.width) && (hero.x <= (this.x - this.alarm) + (this.width + this.alarm*2)) && ((this.y - this.alarm) <= hero.y + hero.height) && (hero.y <= (this.y - this.alarm) + (this.height + this.alarm*2))){
            this.dx = this.x - hero.x;
            this.dy = this.y - hero.y;
            this.stepX == this.dx/100;
            this.stepY == this.dy/100;
        }else{ */
        if(this.move){
           this.counter++; 
        }
        if(this.counter >= 25){
                this.move = false;
                this.counter = 0;
                this.stepX = 0;
                this.stepY = 0;
        }
    }
}