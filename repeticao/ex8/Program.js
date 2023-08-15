import prompt from 'prompt-sync'
import { aleatorio, premio } from './aleatorio.js';
let ler = prompt()

console.log('informe um numero de 0 a 1000 para tentar acertar o numero sorteado, você tera 10 chances');
let num = Number(ler());

let x = aleatorio();

let y = premio(num, x);

console.log(y)