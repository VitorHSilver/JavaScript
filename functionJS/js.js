function Dom(seletor) {
     this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
     this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);

// Criar uma função construtora de Button
// que deverá conter
// - class e text como parâmetros

function Button(text, classe) {
     this.element = document.createElement('button');
     this.element.innerText = text;
     this.element.classList.add(classe);
     this.element.addEventListener('click', function () {
          alert(text);
     });
}
