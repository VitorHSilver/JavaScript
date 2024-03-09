// Criação de objeto

var quadrado = {
          lados: 4,
          area: function (lado) {
                    return lado * lado;
          },
          perimetro(lado) {
                    // É de preferencia utilizar function ou não;
                    return this.lados * lado; //utilizo this para chamar o objeto
          },
};

console.log(quadrado.area(5)); // chamo o console para mostrar depois, objeto.nome e o valor.
console.log(quadrado.perimetro(3));

var menu = {
          // object tem acesso a variaveis fora do escopo
          width: 800,
          height: 50,
          backgroundColor: '#84E',
          metadeHeight() {
                    return this.height / 2;
          },
};
console.log(menu); // no CONSOLE -> menu.hasOwnProperty('width') Mostra o que eu tenho essas propriedades

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var eu = {
          nome: 'Vitor Henrique ',
          sobreNome: 'da Silva',
          idade: 27,
          cidade: 'Santo André',
          faculdade: true,
};
// Crie um método no objeto anterior, que mostre o seu nome completo

eu.nomeCompleto = function () {
          return `${this.nome + this.sobreNome}`;
};
console.log(eu.nomeCompleto());
// Modifique o valor da propriedade preco para 3000
var carro = {
          preco: 1000,
          portas: 4,
          marca: 'Audi',
};
carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
          cor: 'preto',
          idade: 10,
          raca: 'labrador',
          latir(pessoa) {
                    if (pessoa === 'homem') {
                              return 'Latir';
                    } else {
                              return 'nada!!';
                    }
          },
};
console.log(cachorro.latir());
