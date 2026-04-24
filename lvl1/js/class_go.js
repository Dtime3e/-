class c_go extends c_draw{
    f_move(){
        super.f_move(); 
        this.x+=this.stepX;
        this.y+=this.stepY;
        if(this.x > window.innerWidth) this.x = 0;
        if(this.x < 0) this.x = window.innerWidth;
        if(this.y > window.innerHeight) this.y = 0;
        if(this.y < 0) this.y = window.innerHeight;
    }
}