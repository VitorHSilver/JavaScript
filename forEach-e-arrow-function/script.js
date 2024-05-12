// const imgs = document.querySelectorAll('img');

// imgs.forEach(function (item) {
//      console.log(item);
// });

<<<<<<< HEAD
=======
//convertendo o titulos para poder utilizar foreach
>>>>>>> casa
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
<<<<<<< HEAD
     //convertendo o titulos para poder utilizar foreach
=======

     console.log(item);
});
// arrow function

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
     console.log(item);
});
<<<<<<< HEAD
=======

// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll('p');
console.log(paragrafo);
// Mostre o texto dos parágrafos no console
paragrafo.forEach((dados) => console.log(dados.innerText));
// Como corrigir os erros abaixo:
const imgsdoDocumento = document.querySelectorAll('img');

imgsdoDocumento.forEach((item, index) => {
     console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
     console.log(i++);
});

imgs.forEach(() => i++);

