import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe 5 nomes');

let nomes = [];

for(let i = 0; i < 5; i++){
   nomes[i] = ler();
}

console.log('Os nomes que você informou foi:');

for(let item of nomes){
    console.log(item)
};