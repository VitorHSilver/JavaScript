// Adicione a classe ativo a todos os itens do menu
const todosElementos = document.querySelectorAll('.menu a'); // seleciono queryselectAll (da classe menu , e exclusivamente os links)
todosElementos.forEach((e) => e.classList.add('ativo'));
console.log(todosElementos);
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
todosElementos.forEach((e) => e.classList.remove('ativo'));
todosElementos[0].classList.add('ativo'); // para manter apenas no primeiro
console.log(todosElementos);
// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img'); //seleciono elemento

img.forEach((atr) => {
     // faço um loop, por todas as imagens e faço uma conferencia se possui `alt`
     const possuiAtr = atr.hasAttribute('alt');
     console.log(possuiAtr);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com.br');
console.log(link);
