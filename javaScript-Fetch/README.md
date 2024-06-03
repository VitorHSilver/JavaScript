# Fetch

fornece para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas.

    fetch('./arquivo.txt').then(function(response) {
      return response.text();
    }).then(function(corpo) {
      console.log(corpo);
    });

Posso utilizar o fetch para pegar os dados de uma requisição, ou seja consigo pegar a resposta dessa forma:
é usado um response como resposta, dela eu pego um .text()
e dessa resposta faço um .then com argumento e mostro ele no log.

## .JSON

Pegando informações de cep

    const cep = fetch('https://viacep.com.br/ws/09195090/json');

    cep.then((resposta) =>  resposta.json()).then((body) =>
    {
        const  cidade  = document.querySelector('.conteudo');
        cidade.innerText  +=  body.localidade;
     });

Com JSON consigo pegar dados como se fosse um objeto.

## .Text()

Quando quero mostra o texto do jeito que ele é de fato, como por exemplo mostrar os dados do json, html e até mesmo um css.

    return response.text();

#### CSS

    const  css  =  fetch('./style.css');

    css.then((r) =>  r.text()).then((body) =>
    {
    const  conteudo  =  document.querySelector('.conteudo');
    const  style  =  document.createElement('style');
    style.innerHTML  =  body;
    conteudo.appendChild(style);
    });

#### HTML

mostrando os elementos do html direto da sua página

    const  sobre  =  fetch('./sobre.html');
    const  div  =  document.createElement('div');

    sobre.then((r) =>  r.text()).then((body) =>
    {
    div.innerHTML  =  body;
    // posso falar com os elementos desse novo html
    const  titulo  =  div.querySelector('h1');
    document.querySelector('h1').innerText  =  titulo.innerText;
    });

#### .blob

Trás informações sobre uma imagem como tamanho, type , URL

    imgInfo.then((r) =>  r.blob()).then((body) =>
    {
    const  blobUrl  =  URL.createObjectURL(body); // me da um url unico
    const  imagemDom  =  document.querySelector('img');
    imagemDom.src  =  blobUrl; // aqui estou pegando esse elemento e colocando url

    console.log(imagemDom);
    });

#### .status

Mostrando o status da conexão

    imgInfo.then((r) => {

    console.log(r.status);

    });

#### .clone()

para duplicar uma informação do fetch, o fetch não permite usar text e json em seguida com clone é possivel

    fetch('https://viacep.com.br/ws/01001000/json/')
    .then((response) =>
    {
    const  cloneResponse  =  response.clone();
    response.json().then((json) =>
    {
    console.log(json);
    });

        cloneResponse.text().then((text) =>
        {
        console.log(text);
        });
    });
