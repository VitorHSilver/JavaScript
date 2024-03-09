// const imgs = document.querySelectorAll('img');

// imgs.forEach(function (item) {
//      console.log(item);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
     //convertendo o titulos para poder utilizar foreach
     console.log(item);
});
// arrow function

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
     console.log(item);
});

// Mostre no console cada parágrado do site

// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
const imgsdoDocumento = document.querySelectorAll('img');

imgsdoDocumento.forEach((item, index )=> {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);