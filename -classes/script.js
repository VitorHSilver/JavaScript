class botao {
     constructor(name, background, color) {
          this.name = name;
          this.background = background;
          this.color = color;
     }

     element() {
          const btnElement = document.createElement('button');
          btnElement.innerText = this.name;
          btnElement.style.background = this.background;
          btnElement.style.color = this.color;
          return btnElement;
     }
     appendTo(target) {
          const targetElement = document.querySelector(target);
          targetElement.appendChild(this.element());
          return targetElement;
     }
}
const newBtn = new botao('clicarBotao', 'green', 'white');
console.log(newBtn.appendTo('body'));

class button {
     constructor(propriedades) {
          this.propriedades = propriedades;
     }
}
const blueOptions = {
     background: 'blue',
     color: 'white',
     text: 'Clique',
     borderRadius: '4px',
};
const blueBtn = new botao(blueOptions);

class Button {
     constructor(text) {
          this.text = text;
     }
     static create(background) {
          const elementButton = document.createElement('button');
          elementButton.style.background = background;
          elementButton.innerText = 'Clique';
          return elementButton;
     }
}

const blueButton = Button.create('blue');

//   GET e SET

/**
 * No GET só ira mostrar ao usuário sem forma de ser alterado
 */
const abutton = {
     get tamanho() {
          return this._numero || 100; // posso deixar um valor default 100
     },
     /**
      * No SET retorna um valor alteravel para o get
      */
     set tamanho(numero) {
          this._numero = numero * 2;
     },
};
// adicionando o método get

console.log(button.tamanho);

const frutas = {
     lista: [],
     set nova(fruta) {
          this.lista.push(fruta);
     },
};
/** Método get e set é acionado como uma propriedade e não como função() */
frutas.nova = 'Banana';
frutas.nova = 'Maçã';

console.log(frutas);

class _Button {
     constructor(text, color) {
          this.text = text;
          this.color = color;
     }
     get element() {
          const type = this._elementType || 'button';
          const buttonElement = document.createElement(type);
          buttonElement.innerText = this.text;
          buttonElement.style.color = this.color;
          return buttonElement;
     }
     set element(type) {
          this._elementType = type;
     }
}

const botaoAzul = new _Button('Comprar', 'green');
