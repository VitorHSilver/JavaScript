const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

// primeiros Li
const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

//const linkInternos = document.querySelector('[href^="#"]');

//console.log(linkInternos);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemCom = document.querySelector('img[scr^="img/imagem"]');
console.log(imagemCom);

// Selecione todos os links internos (onde o href começa com #)
const linkInternos2 = document.querySelectorAll('[href^="#"]');
console.log(linkInternos2);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeirosH2 = document.querySelector('.animais-descricao h2');
console.log(primeirosH2);
// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[--paragrafos.length]);
