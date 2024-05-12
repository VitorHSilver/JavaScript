const listaDeAnimais = document.querySelector('.animais-lista');
const height = listaDeAnimais.scrollHeight; // altura do elemento
console.log(height);
const animaisTop = listaDeAnimais.offsetTop; // distancia do elemento até o top
console.log(animaisTop);

console.log(
     window.innerWidth, // width do janela
     window.outerWidth, // soma dev tools também
     window.innerHeight, // height do janela
     window.outerHeight, // soma a barra de endereço
     window.scrollY // onde a barra de scroll se encontra
);

const small = window.matchMedia('(max-width: 600px )').matches;
if (small) {
     console.log('Usuario mobile');
} else {
     console.log('Usuario Desktop');
}
