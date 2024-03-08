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
