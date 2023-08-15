import prompt from 'prompt-sync'
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

let soma = 0;

for(let i = 0; i < qtd; i++){
    soma = soma + x[i];
}

let media = soma / qtd;

console.log(`
A média é ${media}`);