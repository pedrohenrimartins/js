import prompt from 'prompt-sync';
let ler = prompt();

console.log('Me informe a quantidade de numeros');
let qtd = Number(ler());

console.log('Me informe os numeros');

let x = [];

for(let i = 0; i < qtd; i++){
    x[i] = Number(ler())
}

let y = [];

for(let i = 0; i < qtd; i++){
    y[i] = x[i] * 2;
}

for(let i = 0; i < qtd; i++){
    let n = x[i]
    let d = y[i]
    console.log('O dobro de ' + n + ' é ' + d)
}