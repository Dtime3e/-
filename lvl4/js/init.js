let key = {};
let time = 0;
let count = 0;
let obj = [];
let hero = {};
let zetables = [];
let max_step = 5;
let hp = 3;//жизни
let collide_npc = {};

let cB = 10;//всего блоков в ширину
let wB = window.innerWidth/cB;
let maxH = Math.trunc(window.innerHeight/wB)*wB;
let hit = new Audio('sounds/hit.mp3');
hit.volume = 0.5;
let coin = new Audio('sounds/coin.mp3');
hit.volume = 0.5;
let oof = new Audio('sounds/oof.mp3');
oof.volume = 1;
let grr = new Audio('sounds/grr.mp3');
grr.volume = 0.5;

let offset = wB*0.5;

let count_bonus = 0;
let pause = false;
let id = 0;

function drow(){
    for(let key in obj){
        obj[key].f_move();
    } 
    for(let key in obj){
        obj[key].collisionHoriz = false;//пееред коллизией информаию о предыдущих контактах стираем
        for(let key1 in obj) if(key1 != key && key1 in obj && key in obj) f_collision(obj[key],obj[key1]);
    }
    for(let key in zetables){
        zetables[key].picture.style.zIndex = Math.trunc((zetables[key].y+zetables[key].height)/(window.innerHeight/1000))+100;
    }

    let n = false;
    for(let key in collide_npc){
        if(collide_npc[key]){
            //key = id0, id1 ... obj[key]
            document.getElementById('actions').innerHTML = 'E - взаимодействовать';
            id = key;
            n=true;
            break;
        }
    }
    if(!n){
        document.getElementById('actions').innerHTML = '';
        id=0;
    }    
        
    f_hero_();

    time++;
    if(!pause)requestAnimationFrame(drow);
}

addEventListener('keydown',function(event){
    //console.log(event.code);
    key[event.code] = true;
});
addEventListener('keyup',function(event){
    key[event.code] = false;
});

function f_hero_(){
    if(!dialog){
        if(key['ArrowUp'] && hero.stepY > -max_step) hero.stepY -= wB/500;
        if(key['ArrowLeft'] && hero.stepX > -max_step) hero.stepX -= wB/500;
        if(key['ArrowRight'] && hero.stepX < max_step) hero.stepX += wB/500;
        if(key['ArrowDown'] && hero.stepY < max_step) hero.stepY += wB/500;
        if(key['KeyE'] && id!=0) f_dialog(obj[id]);
        if(!key['ArrowLeft'] && !key['ArrowRight'] && Math.abs(hero.stepX)>0) hero.stepX /= 1.1;
        if(!key['ArrowUp'] && !key['ArrowDown'] && Math.abs(hero.stepY)>0) hero.stepY /= 1.1;
        if(Math.abs(hero.stepX)<wB/600){
            hero.stepX = 0;
            hero.picture.classList.remove('walk');
            hero.picture.classList.add('hero');
        }
        if(Math.abs(hero.stepY)<wB/600){
            hero.step = 0;
            hero.picture.classList.remove('walk');
            hero.picture.classList.add('hero');
        }
        if(Math.abs(hero.stepX)!=0 && Math.abs(hero.stepY)!=0){
            hero.picture.classList.remove('hero');
            hero.picture.classList.add('walk');
        }
    }
}

function f_collision(obj1,obj2){
    let col1 = obj1.picture.classList.contains('collision');
    let col2 = obj2.picture.classList.contains('collision');
    let col3 = obj1.picture.classList.contains('opponent');
    let col4 = obj2.picture.classList.contains('opponent');
    let col5 = obj1.picture.classList.contains('hero') || obj1.picture.classList.contains('walk');
    let col6 = obj2.picture.classList.contains('hero') || obj2.picture.classList.contains('walk');
    if(col1 && col2){
        if(obj1.f_collide(obj2)){
            if(col5 && col4){
                
            } 
            if(col6 && col3){
                
            } 
        }else{
            if(col5 && col4){
                if((obj1.x <= (obj2.x - offset) + (obj2.width + offset*2)) && ((obj2.x - offset) <= obj1.x + obj1.width) && (obj1.y <= (obj2.y - offset) + (obj2.height + offset*2)) && ((obj2.y - offset) <= obj1.y + obj1.height)){
                    collide_npc[obj2.picture.getAttribute('id')] = true;
                    obj2.picture.classList.add('bright');
                }else{
                    obj2.picture.classList.remove('bright');
                    collide_npc[obj2.picture.getAttribute('id')] = false;
                }
            } 
            if(col6 && col3){
                if((obj2.x <= (obj1.x - offset) + (obj1.width + offset*2)) && ((obj1.x - offset) <= obj2.x + obj2.width) && (obj2.y <= (obj1.y - offset) + (obj1.height + offset*2)) && ((obj1.y - offset) <= obj2.y + obj2.height)){
                    collide_npc[obj1.picture.getAttribute('id')] = true;
                    obj1.picture.classList.add('bright');
                }else{
                    obj1.picture.classList.remove('bright');
                    collide_npc[obj1.picture.getAttribute('id')] = false;
                }
            }
        }
    }
}