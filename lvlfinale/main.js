let count = 0;
let max_template = 1;
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
let suspect1 = 0;

const urlParams = new URLSearchParams(window.location.search);
suspect1 = urlParams.get('suspect');
console.log(suspect1);

function f_proceed(){
    for(let i = 0; i<16; i++){
        console.log('hello');
        let div0 = document.createElement('div');
        div0.className = 'monst';
        div0.classList.add('button');
        div0.setAttribute('id','id'+i);
        if(i == suspect1){
            div0.classList.add('suspect');
            div0.onclick = ''+win()+'';
        }else{
            div0.onclick = ''+lose()+'';
        }
        table.appendChild(div0);
        document.getElementById('id'+i).style.background = 'url(images/'+i+'.png) no-repeat center/cover'
    }
}

function template(temp){
    document.getElementById('preloader').remove();
    var template = document.getElementById("template_"+temp);
    var list_item = template.content.cloneNode(true);
    document.getElementById('scene1').append(list_item);
}

function f_preloader(){
    if(count < max_template){
        template(count);
        count++;
    }else{
        preloader.style.display = 'none';
        preloader.style.opacity = 0;
        f_proceed();
    }
}

function win(){
    print('Поздравляем! Ты нашёл монстрика, съевшего пирог!')
}
function lose(){
    print('Ты обвинил невинного монстра и проиграл!')
}
