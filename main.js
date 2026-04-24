let count = 0;
let max_template = 3;
let monsteras = [
    [0,0,0,0],
    [0,0,0,1],
    [0,0,1,0],
    [0,0,1,1],
    [0,1,0,0],
    [0,1,0,1]
    [0,1,1,0],
    [0,1,1,1],
    [1,0,0,0],
    [1,0,0,1],
    [1,0,1,0],
    [1,0,1,1],
    [1,1,0,0],
    [1,1,0,1],
    [1,1,1,0],
    [1,1,1,1]
]
let suspect = 0;

function f_proceed(){
    suspect = Math.trunc(Math.random()*16);
    window.location.href = "lvl1/index.html?suspect = "+suspect;
}

function template(temp){
    document.getElementById('preloader').remove();
    var template = document.getElementById("template_"+temp);
    var list_item = template.content.cloneNode(true);
    document.getElementById('scene1').append(list_item);
}

function f_preloader(){
    if(count <= max_template){
        template(count);
        count++;
    }else{
        f_proceed();
    }
}