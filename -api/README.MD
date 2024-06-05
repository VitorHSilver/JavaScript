# API

 - Aplicativo - Um servidor, aplicativo, objeto JavaScript ou qualquer outra coisa que você interaja através de comandos.
 - Programming - Programação, isso significa que um comando irá encadear uma cadeia de eventos pré-definidos.
- Interface - A interface são os comandos criados para permitir a interação com a aplicação. Ex: `'VIOLAO'.toLowerCase()` é um método que faz parte da interface do objeto String.

*diversos API*
https://github.com/toddmotto/public-apis?tab=readme-ov-file#index

## Url e  Method
Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como:

 - GET - Puxa informação, utilizado para pegar posts, usuários e etc.
 ```js
const url = 'https://jsonplaceholder.typicode.com/posts/';
fetch(url, {
  method: 'GET'
})
.then(r => r.json())
.then(r => console.log(r))
```
 - POST - Utilizado para criar posts, usuários e etc.
```js
const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))
```
 - PUT - Geralmente utilizado para atualizar informações.
```js
const url = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url, {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))
```
 - HEAD - Puxa apenas os headers.
 ```js
const url = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url, {
  method: 'HEAD',
})
.then(response => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});
```
 - DELETE - Deleta uma informação.

## CORS
É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin.