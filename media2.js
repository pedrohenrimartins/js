    import prompt from 'prompt-sync';
    let ler = prompt();

    console.log('Olá seja bem vindo ao programa da média, digite a primeira nota para começarmos:')
    let n1 = Number(ler())

    console.log('Digite a segunda nota:')
    let n2 = Number(ler())

    console.log('Digite a terceira nota:')
    let n3 = Number(ler())

    let media = (n1 + n2 + n3) /3

    console.log(`A média de ${n1} com ${n2} e ${n3} é ${media}`);
