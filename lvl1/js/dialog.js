let dialog = false;
let answers = 0;
let health = 5;

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
        f_proceed();
    }
}
function incorrect(){
    health--;
    if(health<=0){
        print('Решить все вопросы не получилось! Попробуй ещё раз')
    }
}
function f_proceed(){
    window.location.href = "../lvl2/index.html?suspect = "+suspect1;
}