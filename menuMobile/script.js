const btn = document.querySelector('.menu-mobile');

function classeAtivar(e) {
     btn.classList.toggle('ativar');
}

btn.addEventListener('click', classeAtivar);
