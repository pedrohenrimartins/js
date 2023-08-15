import prompt from 'prompt-sync';
let ler = prompt();


console.log('Informe a quantidade de numeros:')
let qtd = Number(ler());

let x =[];

console.log('informe os numeros');

for(let i = 0; i < qtd; i++){
    x[i] = Number(ler());
}

for(let i = qtd - 1; i >= 0 ;i--){ 
 let a = x[i]; 
 console.log(a)
}