const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
     array[index] = 'Teste'; // posso alterar todo a lista de array por index no caso,APENAS no Array
     console.log(item, index, array);
});
const li = document.querySelectorAll('li');

li.forEach((i) => i.classList.add('ativa'));

//[] .map()
/*
Semelhante ao forEach, mas ao invés de retornar undefined ele retorna uma nova array com valores atualizados. 
*/

// No exemplo abaixo, ele mostra como eu alterei o item e ele sai atualizado
const tenis = ['Nike', 'Adidas', 'Puma'];
const novaArray = tenis.map((item, index, array) => {
     console.log(item.toUpperCase(), index, array);
     return item.toUpperCase();
});
console.log(novaArray);

// Nesse exemplo é mostrado o valor atualizado da array

const numeros = [2, 4, 8, 10, 23, 78];
const numerosX2 = numeros.map((n) => n * 2); // quando for apenas um argumento não precisa de chave{}

console.log(numerosX2);
const aulas = [
     {
          nome: 'HTML 1',
          min: 15,
     },
     {
          nome: 'HTML 2',
          min: 10,
     },
     {
          nome: 'CSS 1',
          min: 20,
     },
     {
          nome: 'JS 1',
          min: 25,
     },
];

// estou declarando uma variavel para conter o valor total, no qual ele faz um forEach em uma variavel e pega desse array a minutagem das aulas.
const tempoAulas = aulas.map((aula) => aula.min);

//pegando dados do nome do curso
const nomeAulas = aulas.map((aula) => aula.nome);
console.log(nomeAulas);

// reduce() trás o valor final da ultima iteração (Muito util e caso de soma)
// o acumulador pega o valor e leva para o proximo item do array
const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => {
     console.log(acumulador, atual);
     return acumulador + atual;
});
console.log(total1); // 65

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
total2; // 165

// logica com reduce
// trazendo os maiores números dos arrays
const n = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = n.reduce((acumulador, atual) => {
     if (acumulador > atual) return acumulador;
     else return atual;
     // Aqui mostra o retorno se o número do acumulador for maior que o atual retorna ele, senão retorna o suposto número maior
});
console.log(maiorNumero);

// Reduce em objetos

const listaAulas1 = aulas.reduce((acumulador, atual, index) => {
     acumulador[index] = atual.nome;
     return acumulador;
}, {});

console.log(listaAulas1);

// reduceRight() começa a iterar da direita para a esquerda.

// const frutas = ['Banana', 'Pêra', 'Uva'];

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
// const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

// frutasRight; // Uva Pêra Banana
// frutasLeft; // Banana Pêra Uva

// Some() se pelo menos um return for truthy ele retorna
const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
     return fruta === 'Uva';
}); // true

// Every() se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

const frutas2 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas.every((fruta) => {
     return fruta; // false
});
console.log(arraysCheias);

//[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy.
const numeros4 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros4.find((x) => x > 45); // 88

console.log(buscaMaior45);

// filter();retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
// Muito util para retornar mais de um valor desejado

const numeros5 = [6, 43, 22, 88, 101, 29];
const buscaMaior46 = numeros5.filter((x) => x > 46); // [88, 101]
console.log(buscaMaior46);
