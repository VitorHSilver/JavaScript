// Crie uma função para verificar se um valor é Truthy

function checkTruthy(valor) {
          return !!valor;
}

console.log(checkTruthy(1));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function somaQuadrado(lado) {
          return lado * 4;
}
console.log(somaQuadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobreNome) {
          return nome + ' ' + sobreNome;
}

console.log(nomeCompleto('Vitor Henrique', 'da Silva'));

// Crie uma função que verifica se um número é par

function checkPar(x) {
          if (x % 2) return 'impar';
          else {
                    return 'par';
          }
}
console.log(checkPar());

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipyofDate(dado) {
          return typeof dado;
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
          console.log('Vitor Henrique');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
          return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
          return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
