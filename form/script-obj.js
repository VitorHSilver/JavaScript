/**
 * Pegando todos as informações do formulario e passando para um objeto
 */
const form = document.getElementById('contato');
const dados = {}; //array

const texto = document.querySelector('.texto');

function handleChange(event) {
     dados[event.target.name] = event.target.value;
     /*
     pego os dados da array do target e coloco em seus respectivos nomes, email:teste@com / nome: teste / mensagem:mensagem
     FORMANDO UM OBJETO
     */
     console.log(dados);
}
form.addEventListener('change', handleChange);
