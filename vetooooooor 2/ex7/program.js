import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe quantidade de numeros');
let qtd = Number(ler());

let x = [];

console.log('Digite os numeros')

for(let i = 0; i < qtd; i++){
    x[i] = Number(ler());
}


console.log('Você digitou os números')
for(let item of x){
    console.log(item)
}

console.log('Os numeros pares são');
for(let item of x){
    if(item % 2 == 0){
        console.log(item)
    }
}



    