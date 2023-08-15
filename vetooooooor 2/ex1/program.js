import prompt from 'prompt-sync'
let ler = prompt();

console.log('informe 5 numeros');

let x = []
for(let i = 0; i < 5; i++){
    x[i]= Number(ler());
}
console.log('Você digitou os numeros:')

for(let item of x){
    console.log(item)
}