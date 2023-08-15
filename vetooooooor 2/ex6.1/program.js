import prompt from 'prompt-sync';
let ler = prompt();


console.log('Informe a quantidade de numeros:')
let qtd = Number(ler());

let x =[];

for(let i = 0; i < qtd; i++){
    x[i] = Number(ler());
}

console.log('Os numeros que você informou foi:');

for(let item of x){
    console.log(item)
};

console.log('O dobro deles é');

let z = [];

for(let a = 0; a < qtd; a++){
    z[a] = x[a] * 2;
}

for(let item of z){
    console.log(item)
};