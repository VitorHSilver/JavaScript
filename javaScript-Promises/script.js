const promessa = new Promise((resolvido, rejeitado) => {
     let condicao = true;
     // além de uma string 'qualquer String' posso voltar até mesmo um objeto
     if (condicao)
          setTimeout(() => {
               resolvido({ nome: 'Vitor', idade: 28 }); // deixo aqui um texto ou ação
          }, 1000);
     else {
          rejeitado(Error('Um erro aconteceu na Promise')); // criando uma mensagem de erro no JS
     }
});

console.log(promessa);

// metodo direto da promessa

const retorno = promessa
     .then((resolucao) => {
          resolucao.profissao = 'Desenvolvedor';
          return resolucao;
     })
     .then((resolucao) => {
          console.log(resolucao);

          // Catch é a ação quando a premise é rejeitada, ou seja é um jeito de trabalhar com informações do erro
     })
     .catch((rejeitada) => {
          console.log('CATCH');
          console.log(rejeitada);
     })
     .finally(() => {
          console.log('acabou');
     });

console.log(retorno);

// Premise.all() quando preciso que todas as promessas sejam feitas ou uma rejeitada
// ideal para quando precisa que o usuário preencha os dados para depois serem mostrado.

const login = new Promise((resolve) => {
     setTimeout(() => {
          resolve('Usuário logado');
     }, 1000);
});

const dados = new Promise((resolve) => {
     setTimeout(() => {
          resolve('Dados carregados');
     }, 1000);
});
/**  Promise.all não é construtor e recebe array
 
 const carregouTudo = Promise.all([login, dados]);
 carregouTudo.then((resolucao) => {
      resolucao.forEach((e) => {
           console.log(e); // Assim podendo manipular e  mostrar todos os valores por linha
          });
     });
*/
// Em resumo é o primeiro que carregar já mostra informações para o usuário
const carregouTudo = Promise.race([login, dados]);
carregouTudo.then((resolucao) => {
     console.log(resolucao);
});
