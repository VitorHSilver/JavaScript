var times = ['Palmeiras', 'Santos', 'São Paulo', 'Corinthians', 'Portuguesa'];
console.log(times);

times.pop(); // remove o ultimo item e retorna ele
times.push('Portuguesa'); // Adiciona ao final da array

// for
for (var i = 1; i <= 10; i++) {
          console.log(i);
}

//while

var i = 0;
while (i < 10) {
          console.log(i + ' numeros');
          i++;
}

for (let dados = 0; dados < times.length; dados++) {
          console.log(times[dados]);
          if (times[dados] === 'São Paulo') {
                    break; // condição para parar meu loop
          }
}

// forEach
var frutas = ['Morango', 'Abacaxi', 'Caqui', 'Melão', 'Abacate'];

frutas.forEach(function (frutas, index, array) {
          //chama o array, depois chamo o forEach, depois chamo a function(i ou dados ou nome do array no singular) e por fim realizo a função que irá fazer
          console.log(frutas, index, array);
});


