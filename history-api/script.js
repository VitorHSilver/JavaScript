const links = document.querySelectorAll('a');
/**
 * Adiciono todos os links um evento listener de click
 */
links.forEach((link) => {
     link.addEventListener('click', handleClick);
});

window.addEventListener('popstate', () => {
     fetchPage(window.location.href);
});
/** nesse evento eu pego o endereço href do click */
function handleClick(event) {
     event.preventDefault();
     fetchPage(event.target.href);
     window.history.pushState(null, null, event.target.href);
}

/**
 * agora eu crio a função que foi chamada no click
 * guardo a url do evento dentro da const
 * depois transformo em texto
 * fazendo com que a página mude sem necessidade de utilizar o history-api
 */
async function fetchPage(url) {
     document.querySelector('.content').innerText = 'carregando...';
     const pageResponse = await fetch(url);
     const pageText = await pageResponse.text();
     replaceContent(pageText);
}
/**
 * Manipulando o title da página
 */
function replaceContent(newText) {
     const newHtml = document.createElement('div');
     newHtml.innerHTML = newText;

     const oldContent = document.querySelector('.content');
     const newContent = newHtml.querySelector('.content');

     oldContent.innerHTML = newContent.innerHTML;
     document.title = newHtml.querySelector('title').innerText;
}
