// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;

console.log(total);

// Crie duas expressões que retornem NaN
var nan = 10 / '150quinhentos'; //NaN not a number mostrando que por mais que no valor tenha um numero ele não consegue extrair o numero para a divisão
console.log(nan);

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50; // OPERADORE UNÁRIOS quando acrecento o + em uma variavel
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var numero = 5;
console.log(++numero); // ++ e o numero ele já volta incrementado, caso fosse numero+6, teria o resultado na proxima log

// Como dividir o peso por 2?
var numero = +'80' / 2; // foi acrescentado direto no valor, ele ja converte de string para number e faz a operação
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log(peso); 
