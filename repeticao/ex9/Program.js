import prompt from 'prompt-sync'
import { nota } from './nota.js';
let ler = prompt();

console.log('Me informe uma nota de 0 a 10');
let n = Number(ler());

let x = nota(n)

console.log('Sua nota esta correta ' + x);