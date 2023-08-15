import prompt from 'prompt-sync'
let ler = prompt();

export function nota(n){


while(n < 0 || n > 10){
    console.log('Nota inválida digite novamente');
    n = Number(ler());
}

return n;



}