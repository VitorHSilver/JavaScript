// Mude a cor da tela para azul e depois para vermelho a cada 2s

/**
 * Minha Alternativa
 * 
let azul = true;

setInterval(() => {
     if (azul) {
          document.body.style.backgroundColor = 'blue';
     } else {
          document.body.style.backgroundColor = 'red';
     }
     azul = !azul;
}, 100000);
*/

/**
 * Alternativa correta do video
 */
// function mudarClasse() {
//      document.body.classList.toggle('active');
// }

// setInterval(mudarClasse,1000000);

// Crie um cronometro utilizando o setInterval , deve ser possivel
// Iniciar, pausar o resetar(duplo clique no pausar)

const start = document.querySelector('.inic');
const pause = document.querySelector('.paus');
const reset = document.querySelector('.rese');
const textTempo = document.querySelector('.tempo');

start.addEventListener('click', iniciarTempo);
pause.addEventListener('click', pausarTempo);
pause.addEventListener('dblclick', resetarTempo);
reset.addEventListener('click', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
     timer = setInterval(() => {
          textTempo.innerText = i++;
     }, 100);
     start.setAttribute('disabled', '');
}

function pausarTempo() {
     clearInterval(timer);
     start.removeAttribute('disabled', '');
}

function resetarTempo() {
     clearInterval(timer);
     textTempo.innerText = 0;
     i = 0;
     start.removeAttribute('disabled', '');
}
