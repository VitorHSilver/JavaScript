var possuiGraduacao = false;
var possuiDoutorado = false;

if (possuiGraduacao) {
          console.log('Possui graduação');
} else if (possuiDoutorado) {
          console.log('Possui doutorado');
} else {
          console.log('Não Possui ambos');
}

console.log(10 == '10');
console.log(10 === '10'); // confere diretamente se é o valor real ou string;

/**
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true
 */

var x = 'gato';

console.log(x !== 'gato'); // !== not, ou seja mostrando se é diferente de

// Operadores logicos

/** && compara-se a expressão e
true && true;              // true
true && false;            // false
false && true;           // false
'Gato' && 'Cão';        // 'Cão' // retorna o ultimo valor verdadeiro
(5 - 5) && (5 + 5);    // 0
'Gato' && false;      // false
(5 >= 5) && (3 < 6); // true
*/

if (5 - 5 && 5 + 5) {
          console.log('verdadeiro');
} else {
          console.log('false');
}

/* || or
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'  // retornao primeiro valor true
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true
*/

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 27;
var idadeMinhaMae = 49;

if (minhaIdade > idadeMinhaMae) {
          console.log('É menor');
} else if (minhaIdade === idadeMinhaMae) {
          console.log('É igual');
} else {
          console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2;

console.log(expressao); // 3 ultimo verdadeiro

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta); // verificar se é verdadeiro ou não, colocando duas !! pra fazer testes

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
          console.log('Brasil possui mais habitantes que a China');
} else {
          console.log('China possui mais habitantes que o Brasil');
}

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
          console.log('Verdadeiro');
} else {
          console.log('Falso');
}

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
          console.log('Gato' && 'Cão'); // && retorna o primeiro valor verdadeiro
} else {
          console.log('Falso');
}
