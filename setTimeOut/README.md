# setTimeOut (ideal para mostrar em 'atraso')

 *Método assincrono que ativa o callback após tempo*.

    setTimeout(() => {
    
    console.log('tempo de espera é de ');
    
    }, 70);

#### fazendo um setTimeout em forma de contagem

 
    for (let  i  =  0; i  <  20; i++) {
    
    setTimeout(() => {
    
    console.log(i);
    
    }, 1000  *  i);
    
    }

#### setInterval mostra o valor a cada tempo (ideal para repetir)

    setInterval(atualizandoMoeda, 30000);


Se não houver um break ou condição para encerramento como num FOR o setInterval segue fazendo sendo necessário 
#### clearInterval para encerramento

    let  i  =  0;
    
    const  pause  =  setInterval(() => {
    
    console.log(i++);
    
    if (i  >  20) {
    
    clearInterval(pause);
    
    }
    
    }, 100);

> 'elementoaqui'.setAttribute('disabled', ''); *para desativar um botão*
> 'elementoaqui'.removeAttribute('disabled', ''); *reativar*
> 
> 'elementoaqui'.addEventListener('dblclick', resetarTempo); '*dblclick*' *para ativar no click duplo*
