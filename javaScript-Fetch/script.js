// Estou lendo um arquivo de texto
const doc = fetch('./doc.txt');
console.log(doc);
/**
 * dentro do doc utilizo um return para text()
 * que é um objeto para que eu possa ver o texto devo utilizar um .then
 * no then ele utiliza resolvido e falha no caso do resolvido vou ver o texto
 *
 */

/*
 * Posso mostrar textos do docs no meu html
 */
doc.then((resolucao) => {
     return resolucao.text();
}).then((body) => {
     const conteudo = document.querySelector('.conteudo');
     conteudo.innerText = body;
});

/** .json
 * puxando dados de um arquivo json para obter informações desejadas
 */

const cep = fetch('https://viacep.com.br/ws/09195090/json');

cep.then((resposta) => resposta.json()).then((body) => {
     const cidade = document.querySelector('.conteudo');
     cidade.innerText += body.localidade;
});

/**
 * Exemplo com css
 * vou injetar a cor desse arquivo e alterar a cor de fundo
 */

const css = fetch('./style.css');

css.then((r) => r.text()).then((body) => {
     const conteudo = document.querySelector('.conteudo');
     const style = document.createElement('style'); // criei um elemento style
     style.innerHTML = body;
     conteudo.appendChild(style);
});

/**
 * Puxando html pelo fetch
 */
const sobre = fetch('./sobre.html');
const div = document.createElement('div');

sobre.then((r) => r.text()).then((body) => {
     div.innerHTML = body;
     // posso falar com os elementos desse novo html
     const titulo = div.querySelector('h1');
     document.querySelector('h1').innerText = titulo.innerText;
});
/**
 * Obtendo informaçoes por imagens
 */
const imgInfo = fetch('./111.png');

imgInfo
     .then((r) => r.blob())
     .then((body) => {
          const blobUrl = URL.createObjectURL(body); // me da um url unico
          const imagemDom = document.querySelector('img');
          imagemDom.src = blobUrl; // aqui estou pegando esse elemento e colocando url
          console.log(imagemDom);
     });

// Mostrando o status da conexão

imgInfo.then((r) => {
     console.log(r.status);
});

/**
 * Clone
 * para duplicar uma informação do fetch, o fetch não permite usar text e json em seguida com clone é possivel
 */
fetch('https://viacep.com.br/ws/01001000/json/').then((response) => {
     const cloneResponse = response.clone();
     response.json().then((json) => {
          console.log(json);
     });
     cloneResponse.text().then((text) => {
          console.log(text);
     });
});
