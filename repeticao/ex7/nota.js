import prompt from 'prompt-sync'
let ler = prompt();

export function media(n1,n2,n3){
    
    for(let a = n1; a < 0 || a > 10; a = Number(ler())){
        console.log('nota do primeiro numero invalida. A nota tem que ser entre 0 e 10, digite novamente')

    }

    for(let b = n2; b < 0 || b > 10; b = Number(ler())){
        console.log('nota do segundo numero invalida. A nota tem que ser entre 0 e 10, digite novamente')

    }

    for(let c = n3; c < 0 || c > 10; c = Number(ler())){
        console.log('nota do terceiro invalida. A nota tem que ser entre 0 e 10, digite novamente');

    }
    
    

}


export function calculo(n1, n2 ,n3){
    let x = (n1 + n2 + n3) / 3;
    return x;
}



