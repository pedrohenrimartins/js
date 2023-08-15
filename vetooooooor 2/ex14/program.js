import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe a quantidade de notas');
let qtd = Number(ler());

let x = [];

console.log('Me informe as notas')

for(let i = 0; i < qtd; i++){
    x[i] = Number(ler())
}

console.log('A menor nota é');
let y = x[0];

for(let item of x){
    if(item < y){
        y = item
    }
}

console.log(y)