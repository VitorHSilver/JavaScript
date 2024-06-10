## sintaxe é uma expressão JavaScript que torna possível descompactar valores de matrizes, ou propriedades de objetos, em variáveis distintas.


O que é feito abaixo é tirando as propriedades e colocando as em variaveis, ou seja pegando o evento de cada eixo e deixando 
```js
function handleMouseMove({ clientX, clientY }) {
     console.log(clientX, clientY);
}
document.documentElement.addEventListener('mousemove', handleMouseMove);

handleMouseMove();
```

## Com arrays

A desestruturação de arrays permite "desempacotar" os elementos de um array em variáveis individuais.

```js
const frutas = ['Banana', 'Uva'];

const [fruta1, fruta2] = frutas;

console.log(frutas);
````