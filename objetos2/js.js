var nome = 'Vitor';

var numero = 11.9;
nome.length;

nome.charAt(); // caracter daquela matriz[]
nome.length; // quantas letras possui
nome.replace('t', 'g'); // muda os nome desejados

numero.toFixed(); // para arredontar os números

var btn = document.querySelector('.btn');
console.log(btn);

// btn.classList.add('ativo'); // adicionar uma classe ao elemento
btn.innerText; // mostrar o texto atribuido ao botão;
btn.addEventListener('click', function () {
          console.log('clicou'); // faz um evento que sobre o click || addEventListener, querySelector são api da web
          navigator.clipboard.writeText('www.google.com');
});

// nomeie 3 propriedades ou métodos de strings

// small(); - cria um elemento HTML <small>
// fontcolor(); - muda a cor da fonte no html
// slice(); - retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');

//btn.addEventListener - O objeto que recebe uma notificação quando um evento do tipo especificado ocorre.
//btn.innerHTML - quer dizer o HTML interno de algo, sendo esse último um objeto, ou seja, uma tag
//btn.replaceWith - substitui os elementos selecionados por um novo conteúdo
// btn.toggleAttribute - interface alterna um atributo booleano (removendo-o se for presente e adicionando-o se não estiver presente
// btn.insertBefore - inserir uma informação após

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
new Clipboard('.btns');
