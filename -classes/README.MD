## função construtora

```js
class botao {
     constructor(name, background) {
          this.name = name;

          this.background = background;
     }

     element() {
          const btnElement = document.createElement('button');

          btnElement.innerText = this.name;

          btnElement.style.background = this.background;

          return btnElement;
     }
}

const newBtn = new botao('titulo', 'blue');

console.log(newBtn.element());
```

### Uma classe que acrescenta um elemento no local desejado

```js
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
```

### Classe que adiciona um objeto

```js
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
```

## Static x Prototype

Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave `static`.

```js
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
```

## Get e Set

### GET

No GET só ira mostrar ao usuário sem forma de ser alterado

```js
const  abutton  = 
{

get  tamanho() {

return  this._numero  ||  100; // posso deixar um valor default 100

},

// acionando o método get
console.log(button.tamanho);

```

### SET

No SET retorna um valor alterável para o get

```js
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
```

### Método GET

```js
class _Button {
     constructor(text, color) {
          this.text = text;

          this.color = color;
     }

     get element() {
          const buttonElement = document.createElement('button');

          buttonElement.innerText = this.text;

          buttonElement.style.color = this.color;

          return buttonElement;
     }
}
const botaoAzul = new _Button('Comprar', 'green');
```
