import prompt from 'prompt-sync';
let ler = prompt();

console.log('Me informe 5 numeros');

let x = [];

for(let i = 0; i < 5; i++){
    x[i] = Number(ler());
}

let soma = 0;

for(let item of x){
    soma = soma + item
}

let media = soma / 5;

console.log('A média é ' + media)