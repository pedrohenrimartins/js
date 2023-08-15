import prompt from 'prompt-sync';
let ler = prompt();

console.log('Me informe a quantidade de numeros');
let qtd = Number(ler());
let x =[]

console.log('Me informe os numeros')
for(let i = 0; i < qtd; i++){
    x[i] = Number(ler())
}
console.log('Os numeros ao contrário:')
for(let i = qtd - 1; i >= 0; i--){
    console.log(x[i]);
}

