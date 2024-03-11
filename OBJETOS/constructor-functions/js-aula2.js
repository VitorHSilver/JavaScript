// Transforme o objeto abaixo em uma Constructor Function
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
// const pessoa = {
//      nome: 'Nome pessoa',
//      idade: 0,
//      andar() {
//           console.log(this.nome + ' andou');
//      },
// };

function Pessoa(nome, idade) {
     this.nome = nome;
     this.idade = idade;
     this.acao = function (movimento) {
          console.log(this.nome + ' ' + this.idade + ' ' + movimento);
     };
}
const pessoa1 = new Pessoa('João', 20);
const pessoa2 = new Pessoa('Maria', 25);
const pessoa3 = new Pessoa('Bruno', 15);
console.log(pessoa2.acao('dançou'));
console.log(pessoa1.acao('brincou'));
console.log(pessoa3.acao('caminhou'));

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
     const elementList = document.querySelectorAll(seletor); // aqui seleciono todos os elementos pedidos no parametro abaixo
     this.element = elementList; // coloco todos as lista de node em elementlist em element
     this.addClasse = function (classe) { // crio um array sobre as lista e acrescento o nome da classe desejada 
          elementList.forEach((elem) => {
               elem.classList.add(classe);
          });
     };
     console.log(elementList);
}

const listaItens = new Dom('li');
