import prompt from 'prompt-sync'
let ler = prompt();

for(let i = 1; i <=20; i++){
    console.log(i)
}

for(let i = 1; i <=20; i++){
    process.stdout.write(i + ' - ');
}



