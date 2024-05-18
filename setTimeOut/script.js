const btn = document.querySelector('button');

function handleClick() {
     setTimeout(() => {
          this.classList.add('active');
     }, 3000);
}

btn.addEventListener('click', handleClick);

/**
 * Método assincrono que ativa o callback após tempo.
 */

function espera(texto) {
     console.log(texto);
}
setTimeout(espera, 50, 'depois de 1s');

// podemos fazer a função de modo anonônimo
setTimeout(() => {
     console.log('tempo de espera é de ');
}, 70);

// fazendo um setTimeout em forma de contagem

for (let i = 0; i < 20; i++) {
     setTimeout(() => {
          console.log(i);
     }, 1000 * i);
}

/**
 * setInterval mostra o valor a cada tempo
 *
 * clearInterval é para encerramento
 */

//loop a cada segundo
let i = 0;
const pause = setInterval(() => {
     console.log(i++);
     if (i > 20) {
          clearInterval(pause);
     }
}, 100);



