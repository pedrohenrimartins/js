import prompt from 'prompt-sync'
import { conta } from './contaplus.js';
let ler = prompt();

console.log('Me informe o seu nome');
let nome = ler();

console.log('Me informe sua idade');
let idade = Number(ler());

console.log('Me informe seu salário');
let salario = Number(ler());

console.log('Me informe seu estado civil');
let civil = ler();

console.log('Me informe o seu sexo');
let sexo = ler();


conta(nome, idade, salario, civil, sexo);

console.log('Conta criada com sucesso');
