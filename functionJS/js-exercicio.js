// vou documentar todas essa funcionalidades para que eu possa entender melhor

// aqui eu estou pegando todos os elementos com a tag p e estou transformando em um array
const arrayP = document.querySelectorAll('p');

/* aqui eu estou pegando a quantidade de caracteres de todos os elementos p
// somando com reduce que é ideal para calcular a soma de todos os elementos de um array
// estou chamando o Array.prototype.reduce.call para poder usar o reduce em um Nodelist que não é um array
e o call serve para que eu pegue o reduce e aplique no arrayP acima.
*/

const qtdP = Array.prototype.reduce.call(
     arrayP,
     (acc, item) => {
          return acc + item.innerText.length;
     },
     0
);
console.log(qtdP);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

/*
 * criei uma função que recebe 3 parametros tag, classe e cont
 * criei uma constante element que recebe um document.createElement(tag)
 * criei uma condição ternaria que verifica se a classe é verdadeira, se for ele adiciona a classe no elemento
 * criei uma condição ternaria que verifica se o cont é verdadeiro, se for ele adiciona o cont no elemento
 * e por fim retorna o elemento
 */
function Add(tag, classe, cont) {
     const element = document.createElement(tag);
     classe ? element.classList.add(classe) : null;
     cont ? (element.innerHTML = cont) : null;
     return element;
}
/*
sempre que eu criar um elemento devo chamar document.body.appendChild(elemento) para que ele seja adicionado ao body
*/
const newElement = Add('section', 'container', qtdP + ' total de caracteres');
document.body.appendChild(newElement);

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

/**
 * bind é um método que retorna uma nova função, onde o primeiro parametro é o this e os outros são os parametros da função
 * no caso abaixo estou passando null como this e 'h1' e 'titulo' como parametros
 * assim sempre que eu chamar h1 eu estarei chamando a função Add com os parametros 'h1' e 'titulo'
 * e passando o conteudo que eu quiser
 */
const h1 = Add.bind(null, 'h1', 'titulo');
console.log(h1('Titulo testando novo h1'));
