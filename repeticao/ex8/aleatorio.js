import prompt from 'prompt-sync'
let ler = prompt()


export function aleatorio(){
    let x = parseInt(Math.random() * 1000);
    
    return x;
}

export function premio(num, aleatorio){
    let y = '';
    let cont = 1;

    if(num == aleatorio){
        y = 'Sua escolha ' + num + ' Acertou';

        return y;
    }

  while(cont < 10 && num < aleatorio || num > aleatorio){
    if(num < aleatorio){
        console.log('Sua escolha ' + num + ' É menor que o numero sorteado \n');

        num = Number(ler());
    }

    else if(num > aleatorio){
        console.log('Sua escolha ' + num + ' É maior que o numero sorteado \n');

        num = Number(ler());
    }
    cont++
  }  

  
  if(num == aleatorio){
    y = 'Sua escolha ' + num + ' Acertou';

    return y;
}

else{
    y = 'Você perdeu a resposta é ' + aleatorio

    return y
 }

}