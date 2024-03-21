// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
     this.nome = nome;
     this.sobrenome = sobrenome;
     this.idade = idade;
}
const pessoa = new Pessoa('Vitor ', 'henrique ', 28);

Pessoa.prototype.nomeCompleto = function () {
     return this.nome + this.sobrenome;
};
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
console.log(HTMLCollection.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String "boolean"
