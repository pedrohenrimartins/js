import prompt from 'prompt-sync';
let ler = prompt();


console.log('Informe a quantidade de numeros:')
let qtd = Number(ler());

let x =[];

for(let i = 0; i < qtd; i++){
    x[i] = Number(ler());
}

console.log('O dobro deles é');

let z = [];

for(let a = 0; a < qtd; a++){
    z[a] = x[a] * 2;
}



for(let b = 0; b < qtd; b++){
    let n = x[b];
    let m = z[b];

    console.log('O dobro de ' + n + ' é ' + m)
};