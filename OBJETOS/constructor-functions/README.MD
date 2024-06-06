## função construtora

```js
function  Botao(texto, background) 
{
this.texto  =  texto;
this.background  =  background;
}


Botao.prototype.element  =  function () 
{

const  BotaoElement  =  document.createElement('button');
BotaoElement.innerText  =  this.texto;
BotaoElement.style.background  =  this.background;

return  BotaoElement;
};

const  btn  =  new  Botao('tiutulo', 'blue');

console.log(BotaoElement);