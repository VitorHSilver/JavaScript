// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
console.log(cursos);

// Agora vou transformar o Nodelist em array
const arrayCursos = Array.from(cursos);
console.log(arrayCursos);

//Vou extrair o titulo,descrição, aulas e horas
const objetosCurso = arrayCursos.map((curso) => {
     const titulo = curso.querySelector('h1').innerText;
     const descricao = curso.querySelector('p').innerText;
     const aulas = curso.querySelector('.aulas').innerText;
     const horas = curso.querySelector('.horas').innerText;

     return {
          titulo, // não necessario a repetição de chave: variavel
          descricao,
          aulas,
          horas,
     };
});
console.log(objetosCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numeroMaior100 = numeros.filter((atual) => atual > 100); // já é feito a condição dentro do proprio filtro
console.log(numeroMaior100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const baixo = instrumentos.some((i) => {
     return i === 'Baixo' ? true : false; // operador ternario pega o valor do array, e comparo com o valor 'Baixo'
});
console.log(baixo);

// Retorne o valor total das compras
const compras = [
     {
          item: 'Banana',
          preco: 'R$ 4,99',
     },
     {
          item: 'Ovo',
          preco: 'R$ 2,99',
     },
     {
          item: 'Carne',
          preco: 'R$ 25,49',
     },
     {
          item: 'Refrigerante',
          preco: 'R$ 5,35',
     },
     {
          item: 'Quejo',
          preco: 'R$ 10,60',
     },
];

const valorTotal = compras.reduce((acc, i) => {
     const precoLimpo = +i.preco.replace('R$', '').replace(',', '.');
     return acc + precoLimpo;
}, 0);
console.log(valorTotal);
