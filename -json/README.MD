# Json	
é um formato de organização de dados, como um objeto, sempre utilizado em aspas duplas.
```json
{
	  "id": 1,
	  "nome": "Vitor",
	  "email": "vitor@email.com"
}
```
Acessando meus dados
```js
fetch('./dados.json').then((r) =>
r.json().then((meuJson) => { //console.log(meuJson[0])
meuJson.forEach((e) => {
console.log(e.nome);
		});
	})
);
```
## .parse() e .stringify()

`JSON.parse()` irá transformar um texto JSON em um objeto JavaScript. `JSON.stringify()` irá transformar um objeto JavaScript em uma string no formato JSON.


utilizando o JSON.stringify()

```js
/** Transformando objeto em String Json */

const  configuracoes  = {

player:  'Google',

tempo:  25.5,

aula:  '2.1 JavaScript',

};

  
  

localStorage.config  =  JSON.stringify(configuracoes); //salvando no localStorage

  

console.log(JSON.parse(localStorage.config)) // convertendo informações salvas no localStorage para JSON
```