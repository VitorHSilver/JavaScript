// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const btnCep = document.getElementById('btnCEP');
const res = document.querySelector('.res');

function handleClick(e) {
     e.preventDefault();
     const cep = document.getElementById('cep').value;
     buscaCep(cep);
}
btnCep.addEventListener('click', handleClick); // posso usar o keyup para que toda alteração aconteça uma mudança, mudar pelo input ao inves do btn

function buscaCep(cep) {
     fetch(`https://viacep.com.br/ws/${cep}/json/`).then((r) =>
          r.text().then((body) => {
               res.innerText = body;
          })
     );
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const res2 = document.querySelector('.res2');

function atualizandoMoeda() {
     fetch('https://blockchain.info/ticker').then((r) =>
          r.json().then((btnJson) => {
               res2.innerText += `R$ ${btnJson.BRL.buy}`.replace('.', ',');
          })
     );
}
atualizandoMoeda();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector('#joke');
const paragrafoPiada = document.querySelector('.piadaSite');

function puxarPiada() {
     fetch('https://api.chucknorris.io/jokes/random').then((r) =>
          r.json().then((piada) => {
               paragrafoPiada.innerText = piada.value;
          })
     );
}
btnProxima.addEventListener('click', puxarPiada);
