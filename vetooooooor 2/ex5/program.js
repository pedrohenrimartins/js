import prompt from 'prompt-sync';
let ler = prompt();

console.log('informe um numero para calcularmos a tabuada');
let n = Number(ler());

let vt = [];

for(let i = 0; i <= 10; i++){
    let tabu = n * i;
    vt[i] = tabu;
}

for(let item of vt){
    console.log(item);
}