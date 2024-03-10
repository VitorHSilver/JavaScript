const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
function callback() {
     console.log('Clicou');
}
img.addEventListener('click', callback); // boas praticas, separar function dos chamados

//O primeiro parâmetro do callback é referente ao evento que ocorreu.

const img2 = document.querySelector('img');

function callback(event) {
     console.log(event);
}

img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
     const currentTarget = event.currentTarget; // this , mostra o elemento direto
     const target = event.target; // onde o clique ocorreu
     const type = event.type; // tipo de evento
     const path = event.path;
     console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
     event.preventDefault(); // evita ir para o link direto, assim apenas informando os dados do link
     console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

const h1 = document.querySelector('h1');

function handleEvent(event) {
     console.log(event.type, event);
}
// h1.addEventListener('click', handleEvent); // evento de click
// h1.addEventListener('mouseenter', handleEvent); // evento quando o mouse está em cima do elemento selecionado
// h1.addEventListener('mousemove', handleEvent); // evento quando o mouse está se movendo

// window.addEventListener('scroll', handleEvent); // evento geral de scroll

// evento de ao realizar uma tecla fazer tal evento
function handleKeyboard(event) {
     if (event.key === 'a') {
          document.body.classList.toggle('azul'); // toggle cria ou remove uma classe
          console.log(event.key); // aqui chamo o evento e mostro qual tecla foi pressionado
     }
}
window.addEventListener('keydown', handleKeyboard); // evento geral do teclado, digitado
