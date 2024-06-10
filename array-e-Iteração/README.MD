## filter()

incluindo apenas as strings que possuem R$
o que retornar verdadeiro vai para o array final

```js
const precos = ['Crédito', 'R$ 200', 'R$ 400', 'Contas Pagar', 'R$ 300', 'R$ 400', 'Meus dados'];

const precoFiltrado = precos.filter((preco) => {
     return preco.includes('R$');
});

console.log(precoFiltrado);
```

## Map()

transformando preços em números e os limpando

```js
const precosNumeros = precoFiltrado.map((e) => {
     return +e.replace('R$ ', '');
});
console.log(precosNumeros);
```

## Reduce()

somando todos os itens

```js
const total = precosNumeros.reduce((anterior, atual) => {
     console.log(anterior, atual);
     return anterior + atual;
}, 0);
console.log(total);
```
