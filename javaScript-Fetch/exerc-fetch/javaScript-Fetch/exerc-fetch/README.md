## Exercícios utilizando o .fetch 


### Mostrando as informações do CEP digitado

    function  handleClick(e) {
    
    e.preventDefault();
    
    const  cep  =  document.getElementById('cep').value;
    
    buscaCep(cep);
    
    }

`btnCep.addEventListener('click', handleClick);` // posso usar o keyup para que toda alteração aconteça uma mudança, mudar pelo input ao inves do btn

  

    function  buscaCep(cep) {
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((r) =>
    
    r.text().then((body) =>
    {
    res.innerText  =  body;
		    })
	    );
	}

  
### Utilizando API e recebendo valores do bitcoin
Atualizando a cada 30 segundos.

    const  res2  =  document.querySelector('.res2');
    
    function  atualizandoMoeda() {
    
    fetch('https://blockchain.info/ticker').then((r) =>
    
    r.json().then((btnJson) => {
    
    res2.innerText  +=  `R$ ${btnJson.BRL.buy}`.replace('.', ',');
    
    })
    
    );
    
    }
    
    atualizandoMoeda();

  

### Toda vez que clicar no botão é atualizado a piada

    const  btnProxima  =  document.querySelector('#joke');
    
    const  paragrafoPiada  =  document.querySelector('.piadaSite');
    
    function  puxarPiada() {
    
    fetch('https://api.chucknorris.io/jokes/random').then((r ) =>
    
    r.json().then((piada) => {
    
    paragrafoPiada.innerText  =  piada.value;
    
			    })
    
		    );
    
	   }
    
    btnProxima.addEventListener('click', puxarPiada);
