// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]'); // primeiro seleciono todos os links que possuem #

function clickado(event) {
     event.preventDefault(); // aqui crio a function e para não ir para o link seja interno ou externo eu coloco event.preventDefault();
     linksInternos.forEach((link) => {
          // rodo um loop para remover todas as classes
          link.classList.remove('ativo');
     });
     this.classList.add('ativo'); // aqui a classes é adicionado apos o click do evento abaixo
}
linksInternos.forEach((link) => {
     // como são varios, tenho que criar um array, no array faço em evento sobre o click e ai crio uma function
     link.addEventListener('click', clickado);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const todosElementos = document.querySelectorAll('body *');           // 1-  primeiro passo é selecionar todos os elementos
function dadosClick(event) {
                                                                      // 4- aqui está minha funcao de click
     const clog = event.currentTarget;                                //  5- mostra os dados do elemento clicado | para remoçao do evento clicado     event.currentTarget.remove();
     console.log(clog);
}
todosElementos.forEach((elem) => {                                    // 2- depois faço um loop por todos esses elementos
  elem.addEventListener('click', dadosClick);                         // 3- e coloco um evento de click em cada um deles
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKeyboard(event) {                                       // 2- Crio um evento de click para receber apenas as teclas com um console.log(event.key) 
                                                                       // depois crio o if da tecla desejada, chamo o document.documentElement.classList.toggle('aumentar');
     console.log(event.key);
     if (event.key === 't') {
          document.documentElement.classList.toggle('aumentar');
     }
}
window.addEventListener('keydown', handleKeyboard); // 1- estou falando com window(todo os elementos)
