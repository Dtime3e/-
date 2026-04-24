let dialog = false;
let answers = 0;
let health = 5;
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
function template(temp){
    document.getElementById('table').remove();
    var template = document.getElementById("template_"+temp);
    var list_item = template.content.cloneNode(true);
    document.getElementById('scene1').append(list_item);
}

function f_dialog(obj){
    dialog = true;
    let classlist = obj.picture.classList;
    console.log(classlist);
    if(classlist.contains('stol')){
        console.log('dialog1');
        template(1);
    }
    if(classlist.contains('styl')){
        console.log('dialog2');
        template(4)
    }
    if(classlist.contains('skaf')){
        console.log('dialog2');
        template(6)
    }
}
function f_dialog_off(){
    template(0);
    dialog = false;
    incorrect()
}
function f_dialog_off_true(){
    template(0);
    dialog = false;
    correct()
}
function correct(){
    answers++;
    if(answers>=3){
        if(monsters[suspect][0] == 0){
            ylika.textContent = "Улика: У виновного один глаз";
        }else if(monsters[suspect][0] == 1){
            ylika.textContent = "Улика: У виновного два глаза";
        }
       template(9);
    }
}

function incorrect(){
    health--;
    if(health<=0){
        print('Решить все вопросы не получилось! Попробуй ещё раз')
    }
}
function f_proceed(){
    window.location.href = "../lvl4/index.html?suspect = "+suspect1;
}
