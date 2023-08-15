import prompt from 'prompt-sync';
let ler = prompt();


console.log('Informe a quantidade de numeros:')
let qtd = Number(ler());

let x =[];

for(let i = 0; i < qtd; i++){
    x[i] = Number(ler());
}


for(let item of x){
    console.log(item)
}