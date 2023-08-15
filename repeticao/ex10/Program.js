import prompt from 'prompt-sync';
import { conta } from './senha.js';
let ler = prompt();

console.log('Me informe o nome de usuario');
let user = ler();

console.log('Me informe a senha do usuario');
let senha = ler();


let x = conta(user, senha);

console.log('Senha: ' + x + ' aprovada com sucesso');