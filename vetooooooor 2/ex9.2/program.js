import prompt from 'prompt-sync';
let ler = prompt();

let x = [];

console.log('Me informe a quantidade notas')
let qtd = Number(ler());

console.log('Me inforem as notas')

for(let i = 0; i < qtd; i++){
    x[i] = Number(ler());
}

console.log('Notas digitadas:')

for(let item of x){
process.stdout.write(item.toFixed(1) + ' - ' );
}

let y = 0;

for(let item of x){
    if(item > y)
    y = item;
}

console.log('\nA maior nota é ' + y.toFixed(1));