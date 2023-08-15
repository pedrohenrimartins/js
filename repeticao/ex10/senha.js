import prompt from 'prompt-sync'
let ler = prompt();

export function conta(u, s){
    while(u == s){
        console.log('Senha e usuario não podem ter o mesmo nome, digite novamente')
        s = ler();
    }

    return s;
}