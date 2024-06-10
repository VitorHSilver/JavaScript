const precos = ['Crédito', 'R$ 200', 'R$ 400', 'Contas Pagar', 'R$ 300', 'R$ 400', 'Meus dados'];

// incluindo apenas os que possuem R$
const precoFiltrado = precos.filter((preco) => {
     return preco.includes('R$');
});
console.log(precoFiltrado);

// transformando preços em números e limpando
// Map()

const precosNumeros = precoFiltrado.map((e) => {
     return +e.replace('R$ ', '');
});

console.log(precosNumeros);

// Reduce()

const total = precosNumeros.reduce((anterior, atual) => {
     console.log(anterior, atual);
     return anterior + atual;
}, 0);

console.log(total);
