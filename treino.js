   import prompt from 'prompt-sync';
   let ler = prompt();

   console.log('digite um numero para eu calcular o dobro')
  
 let numero = Number(ler());

 let dobro = numero + numero

 console.log('O Dobro de ' + numero ,'é '  + dobro);

 console.log('Agora que ja sabemos o dobro de ' + numero , ', qual seu numero favorito?')
 let favorito = Number(ler())

 console.log('Hmm ' + favorito, 'é um numero bem legal')

 console.log()

 console.log('Qual é sua profisão ou qual você quer ser no futuro?')
 let profisao = ler()

 console.log('Uau a profisão de ' + profisao , 'é bem legal e importante')

 console.log()

 console.log('agora mudando de assunto, qual é sua matéra favorita?')
 let materia = ler()

 console.log('a materia de ' + materia, 'não era minha favorita na escola porém que bom que gosta')



