// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
console.log('teste');
var ano = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < ano.length; i++) {
          console.log(`'O brasil ganhou a copa de ${ano[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var i = 0;
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
while (i < frutas.length) {
          console.log(frutas[i]);
          if (frutas[i] === 'Pera') {
                    // não esquecer de colocar no array o i para especificar em qual está
                    break;
          }
          i++; // a incrementação continua enquanto o break não for feito
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
