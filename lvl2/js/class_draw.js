class c_draw{
    x=0;
    y=0;
    stepX=0;
    stepY=0;
    offsetX = 0;
    offsetY = 0;
    width = 0;
    height = 0;
    collisionHoriz = false;
    constructor(x,y,stepX,stepY,count,classes,offsetX,offsetY,w,h){
        let d0 = document.createElement('div');
        d0.className = 'personaj';
        d0.setAttribute('id','id'+count);
        d0.style.width = w;
        d0.style.height = h;
        for(let value of classes) d0.classList.add(value);
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        scene1.appendChild(d0);
        this.picture = d0;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.stepX = stepX;
        this.stepY = stepY;
    }
    f_move(){
        this.picture.style.left = (this.x + this.offsetX) + 'px';
        this.picture.style.top = (this.y + this.offsetY) + 'px';
        this.picture.style.width = (this.width - this.offsetX) + "px";
        this.picture.style.height = (this.height - this.offsetY) + "px";
        if(this.stepX>0) this.picture.style.transform = 'scaleX(1)';
        if(this.stepX<0) this.picture.style.transform = 'scaleX(-1)';
    }
    удалить(){
        this.picture.remove();
        delete obj[this.picture.getAttribute('id')];
    }

    f_collide(other){
        //если столкнулись с other
        if(this.f_collide_status(this.x, this.y, this.width, this.height, other.x, other.y, other.width, other.height)){
            let collVert = this.f_collide_status(this.x-this.stepX, this.y, this.width, this.height, other.x, other.y, other.width, other.height);
            let collHoriz = this.f_collide_status(this.x, this.y, this.width, this.height, other.x, other.y, other.width, other.height);
            //если столкновение только по вертикали или упираемся точно в верхний угол препятствия)
            if(collVert){ 
                this.y -= this.stepY;                  
            }else if(collHoriz){
                //если стокновение только по горизонтали
                this.x -= this.stepX;
                this.collisionHoriz=true;
            }
            return true;
        }else{
            return false;
        }
    }
    f_collide_status(x1, y1, w1, h1, x2, y2, w2, h2){
        return (x1 <= x2 + w2) && (x2 <= x1 + w1) && (y1 <= y2 + h2) && (y2 <= y1 + h1);
    }
    f_collide_status_circul(x1,y1,x2,y2){
        let dx = x1 - x2;
        let dy = y1 - y2;
        let r = 100;
        let c = (dx**2 + dy**2)**0.5;
        if(c < r){
            return true;
        }else{
            return false;
        }
    }
}