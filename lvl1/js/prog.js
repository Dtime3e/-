let monsteras = 0;
let suspect1 = 0;
/* Стены */
obj['id'+count] = new c_draw(-wB*0.5, -wB*0.5, 0, 0, count++, ['collision', 'fence'], 0, 0, window.innerWidth+330, wB);
obj['id'+count] = new c_draw(-wB*0.5, window.innerHeight-wB*0.5, 0, 0, count++, ['collision', 'fence'], 0, 0, window.innerWidth+30, wB);
obj['id'+count] = new c_draw(-wB*0.5, wB*0.5, 0, 0, count++, ['collision', 'fence'], 0, 0, wB, window.innerHeight-90);
obj['id'+count] = new c_draw(window.innerWidth-wB*0.5, wB*0.5, 0, 0, count++, ['collision', 'fence'], 0, 0, wB, window.innerHeight-90);
obj['id'+count] = zetables['id'+count] = new c_draw(wB*1, wB*3, 0, 0, count++, ['collision', 'opponent','styl'], 0, -wB*1.3, wB*2, wB*0.7);
obj['id'+count] = zetables['id'+count] = new c_draw(wB*7, wB*2, 0, 0, count++, ['collision', 'opponent','stol'], 0, -wB*1.3, wB*2, wB*0.7);
obj['id'+count] = zetables['id'+count] = new c_draw(wB*4, wB*4, 0, 0, count++, ['collision', 'opponent','skaf'], 0, -wB*1.3, wB*2, wB*0.7);

hero = obj['id'+count] = zetables['id'+count] = new c_go(3*wB,maxH-2*wB,0,0,count++,['collision','hero'], 0, -wB*0.7, wB, wB*0.3);
drow();
console.log(zetables);

const urlParams = new URLSearchParams(window.location.search);
suspect1 = urlParams.get('suspect');
console.log(suspect1);