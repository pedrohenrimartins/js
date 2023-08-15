import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe a quantidade de notas');
let qtd = Number(ler());

console.log('Me informe as notas');

let x = []

for(let i = 0; i < qtd; i++){
    x[i] = Number(ler())
}

console.log('Notas informadas: ')

for(let item of x){
    process.stdout.write(item + ' ')
}

let soma = 0;

for(let i = 0; i < qtd; i++){
    soma += x[i]
}

let media = soma / x.length

console.log('A média é ' + media);