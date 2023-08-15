import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe 5 Numeros');

let x = [];

for(let i = 0; i < 5; i++){
    x[i] = Number(ler());
}

let y = 0;

for(let item of x){
    if(item > y)
    y = item;
}

console.log('O maior numero é ' + y)