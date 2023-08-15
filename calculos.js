    import prompt from 'prompt-sync';
    let ler  = prompt();

    console.log('Gerador um numero aleatório')

    let aleatorio = parseInt( Math.random() * 15);

    console.log(aleatorio)

    let num = Number(ler())

    let r = num %2

