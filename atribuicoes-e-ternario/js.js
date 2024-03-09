//Operadores de atribuição
var x = 5;
var y = 10;
x += y; // x = x + y (15) SOMA
x -= y; // x = x - y (-5) SUBTRAÇÃO
x *= y; // x = x * y (50) MULTIPLICAÇÃO
x /= y; // x = x / y (0.5) DIVISÃO
x %= y; // x = x % y (0) RESTO
x **= y; // x = x ** y (9765625)

// Operador ternário

var idade = 16;
//              condição ?          true     :      false
var podeBeber = idade >= 18 ? 'pode beber' : 'Não pode beber';
console.log(podeBeber);

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.

var possuiCarro = true;
var possuiCasa = true;
var darCredito = possuiCarro && possuiCasa ? 'dar crédito ao cliente' : 'não possui direito';
console.log(darCredito);
