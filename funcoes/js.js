function areaQuadrado(lado) {
          return lado * lado;
}

console.log(areaQuadrado(4));

function soma(x, y) {
          return x + y;
}
console.log(soma(99, 1)); // para mostrar preciso dar os valores no momento que chamo a function e colocar dentro de um console.log | sempre () para executar | assim fica errado console.log(soma);

function imc(peso, altura) {
          // Parâmetros são definidos na declaração da função. Argumentos são os valores reais que você passa quando chama a função.
          const imc = peso / (altura * altura);
          return imc;
}

console.log(imc(70, 1.67));

function corFavorita(cor) {
          if (cor === 'azul') {
                    return 'Eu gosto do mar';
          } else if (cor === 'verde') {
                    return 'Eu gosto de plantas';
          } else {
                    return 'não gosto de nada';
          }
}

console.log(corFavorita('verde')); // se estivesse apenas os argumentos vazios, ele entraria no else.

addEventListener('click', function () {
          console.log('oi');
});

function terceiraIdade(idade) {
          console.log(typeof idade);
          if (typeof idade !== 'number') { // estou verificando se realmente é um número que foi inserido, se ficar vazio é considerado uma string, OU seja é diferente de number
                    return 'Por favor preencha um número';
          } else if (idade >= 60) {
                    return true;
          } else {
            return false;
          }
}
console.log(terceiraIdade());


function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `faltam visitar ${totalPaises - paisesVisitados} paises`
}

