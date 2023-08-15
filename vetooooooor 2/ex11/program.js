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

console.log('A soma de todos os numeros é ' + soma)