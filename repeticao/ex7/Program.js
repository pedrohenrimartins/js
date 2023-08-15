import prompt from 'prompt-sync'
import { calculo, media } from './nota.js';


let ler = prompt();

console.log('Informe a primeira nota:')
let n1 = Number(ler());

console.log('Informe a primeira nota:')
let n2 = Number(ler());

console.log('Informe a primeira nota:')
let n3 = Number(ler());

let x1 = media(n1,n2,n3)


let x2 = calculo(n1, n2, n3)

console.log('a media das notas é ' + x2)