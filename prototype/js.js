// Prototype cria algo individual do objeto, funciona pra testar se há algo no objeto ou prototype.
function Pessoa(nome, idade) {
     this.nome = 'nome';
     this.idade = idade;
}
const vitor = new Pessoa('Vitor', 28);
console.log(Pessoa.prototype);

Pessoa.prototype.andar = function () {
     return this.nome + 'Pessoa andou';
};
Pessoa.prototype.pescou = function () {
     return this.nome + ' Pescou um peixe';
};
