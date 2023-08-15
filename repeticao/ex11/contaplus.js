import prompt from 'prompt-sync'
let ler = prompt();

export function conta(n, i, s, c, se){
    while(n.length < 3){
        console.log('Seu nome precisa ter mais de 3 caracteres');
        n = ler();
    }

    while(i <= 0 && i >= 150){
        console.log('Idade inválida, idade tem que ser de 0 a 150 anos');
        i = Number(ler());
    }

    while(s <= 0){
        console.log('Salário inválido');
        s = Number(ler());
    }

    while(c != 'solteiro' && c!= 'casado' && c != 'viuvo' && c != 'divorciado'){
        console.log('Estado civil invalido');
        c = ler();
    }

    while(se != 'masculino' && se != 'feminino'){
        console.log('Sexo invalido');
        se = ler();
    }


}