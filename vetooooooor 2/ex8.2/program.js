import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe quantidade de nomes');
let qtd = Number(ler());

let x = [];

console.log('Digite os nomes:')

for(let i = 0; i < qtd; i++){
    x[i] = ler();
}

console.log('Os nomes que iniciam com L e H são:');

for(let item of x){
    if(item.charAt(0) == "L" || item.charAt(0) == "H"){
        console.log(item)
    }
}