
## HISTORY

É possível acessarmos o histórico de acesso do browser em uma sessão específica através do  `window.history`. O objeto history possui diferentes métodos e propriedades.

```js
window.history;
window.history.back(); // vai para a anterior
window.history.forward(); // vai para a próxima
```
### PushState( )

posso renomear minha url.

    window.history.pushState(null,null,'seurl.html');


### PopState( )
```js
window.history.pushState(null, null, 'sobre.html');

PopState() posso ativar um evento quando a pessoa entrar nesse pushState

window.addEventListener('popstate', () => {
console.log('teste');
});
```
## Deixando a página mais fluida

```js
const  links  =  document.querySelectorAll('a');

links.forEach((link) => {

link.addEventListener('click', handleClick);

});
 

window.addEventListener('popstate', () => {

fetchPage(window.location.href);

});


function  handleClick(event) {

event.preventDefault();

fetchPage(event.target.href);

window.history.pushState(null, null, event.target.href);

}

  

async  function  fetchPage(url) {
document.querySelector('.content').innerText  =  'carregando...'; // adicionar um texto na transição

const  pageResponse  =  await  fetch(url);

const  pageText  =  await  pageResponse.text();

replaceContent(pageText);

}

function  replaceContent(newText) {

const  newHtml  =  document.createElement('div');

newHtml.innerHTML  =  newText;

  

const  oldContent  =  document.querySelector('.content');

const  newContent  =  newHtml.querySelector('.content');

  

oldContent.innerHTML  =  newContent.innerHTML;

document.title  =  newHtml.querySelector('title').innerText;

}

```