### REST 
Método para colocar todos os clientes de uma forma mais pratica em uma array, ou seja é uma forma de acrescentar informações em apenas uma variavel como a de clients por exemplo.
```js
function  showList(empresa, ...clients) {

clients.forEach((e) => {

console.log(empresa, e);

	});

}

showList('Google', 'Vitor', 'Arthur', 'Miguel');
```
## SPREADS

Antes da conversão, os valores seriam do tipo NaN. No entanto, ao utilizarmos o operador spread, os valores são convertidos em um array e o Math.max() é aplicado para encontrar o maior número entre eles.

 ```js
const  numeros  = [1, 2, 4, 29, 32, 2, 45, 3];
const  maior  =  Math.max(...numeros);
console.log(maior);
```

### Métodos para visualizar esse array
```js
const  itens  =  document.querySelectorAll('li');

itens.forEach((e) => {

console.log(e);

});
```
  
### Poderia converter usando um Array.from()
```js  
const  itens  =  Array.from(document.querySelectorAll('li'));
```
Outra forma
 ```js
 const  novoArray  =  Array.from(itens);
console.log(novoArray);
```

### Utilizando o spread 
onde é permitido utilizar o map. que antes não estava indisponível
```js
const  itens  =  document.querySelectorAll('li');
[...itens].map((e) => {});
```

### Clonando

```js
const  carro  = 
{
cor:  'azul',
portas:  4,
ano:  2020,
};

const  cloneCarro  = 
{ 
...carro, 
turbo:  true, 
motor:  1.4 
};

console.log(cloneCarro);
```

## provando que não é tão clone assim

ele não puxa métodos e outras propriedades que um objeto normalmente trás
```js
class  Transporte {
constructor() {
this.terrestre  =  true;
}andar() {
console.log('andou');
	}
}

class  Carro  extends  Transporte {
constructor(cor, portas) {
super();
this.cor  =  cor;
this.portas  =  portas;

	}
}
const  carro  =  new  Carro('Azul', 4);
const  cloneCarro  = { ...carro };

console.log(carro, cloneCarro);
```