# Async Await

A palavra chave `async` indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar.

Ou seja ele faz as etapas semelhantes do fetch colocando dados em variáveis quando o fetch for resolvido.
```js
async  function  pegarDados() 
{
const  responseDados  =  await  fetch('./dados.json'); // aguardo a resposta e pego o resultado

const  jsonDados  =  await  responseDados.json(); // aguardo a resposta do JSON e pego o resultado

document.body.innerText  =  jsonDados.aula;
}
pegarDados();
```

### Diferença de fetch e async await
A principal razão é a sintaxe, deixando o código mais curto e mais facil de ser lido.
  
  
#### fetch

```js
function  iniciarFetch() {

fetch('./dados.json').then((r) =>

r.json().then((titulo) => {

document.body.innerText  =  titulo.aula;

		})

	);

}
iniciarFetch();

```

  #### async await
```js
async  function  iniciarAsync() {

const  respostaDados  =  await  fetch('./dados.json');

const  dadosJson  =  await  respostaDados.json();

  

document.body.innerText  +=  dadosJson.aula

}

iniciarAsync();
```

### Catch

```js
try {

const  respostaDados  =  await  fetch('./dados.json');

const  dadosJson  =  await  respostaDados.json();

document.body.innerText  =  dadosJson.aula;

} catch (erro) {

console.log('deu ruim', erro);

}
```