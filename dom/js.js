//window.alert('Alerta certo!');
// função de direcionar para outro site
function irAte() {
          return window.location.assign('https://www.google.com');
}

// titulo.innerText; // retorna o texto;
// titulo.classList; // retorna as classes;
// titulo.id; // retorna o id;
// titulo.offsetHeight; // retorna a altura do elemento;

const h1selecionado = document.querySelector('h1');
//metodo 1
function callBackh1() {
          // separando funcao do chamado
          console.log('Clicou em ', h1selecionado.innerText); // aqui estou mostrando que como posso fazer um evento de click sobre um elemento do querySelector como está acima
}
h1selecionado.addEventListener('click', callBackh1);

const pSelecionado = document.querySelector('p');
//metodo 2
pSelecionado.addEventListener('click', function () {
          // chamando e criando funcao dentro do evento
          console.log('Clicou em ', pSelecionado.innerText); // aqui estou mostrando que como posso fazer um evento de click sobre um elemento do querySelector como está acima
});

// Retorne o url da página atual utilizando o objeto window
const paginaAtual = window.document.URL; // modo que eu fiz, que tambem está correto.
const hrefPagina = window.location.href; // MODO CORRETO

console.log(hrefPagina);
console.log(paginaAtual);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeroElemento = document.getElementsByClassName('ativo'); // Como eu fiz
const elementoAtivo = document.querySelector('.ativo'); // MODO CORRETO
console.log('esse ? ', primeroElemento);
console.log(elementoAtivo);
// Retorne a linguagem do navegador
mostrarLinguagem = window.navigator.language;

console.log(mostrarLinguagem);

// Retorne a largura da janela
larguraWidth = document.documentElement.clientWidth;
console.log(larguraWidth);
