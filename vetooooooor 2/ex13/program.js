import prompt from 'prompt-sync';
let ler = prompt();

console.log('Me informe 5 numeros');

let x = [];

for(let i = 0; i < 5; i++){
    x[i] = Number(ler());
}

let sum = 0;
for (let i = 0; i < x.length; i++) {
    sum += x[i];
}
let avg = sum / x.length;
let closest = x[0];
for (let i = 1; i < x.length; i++) {
    if ((x[i] - avg) * (x[i] - avg) < (closest - avg) * (closest - avg)) {
        closest = x[i];
    }
}
console.log('O numero mais proximo da media é ' + closest);






