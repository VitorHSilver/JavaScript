/**
 * PEGANDO OS VALORES INDIVIDUAIS, KEYUP E CHANGE , ALTERANDO MENSAGEM DE ACORDO COM ERRO.
 * ALTERANDO COR DE FUNDO COM OPTION E TAMBEM COM PALHETA DE COR MUDANDO DE FORMA DINAMICA
 * CHECANDO SE VALOR DE CHECKBOX E RADIO FOI SELECIONADO E FAZENDO VALIDAÇÃO SOMENTE EM CASO DE CHECKED
 */
// console.log(document.forms[0]); mostrando o primeiro form do html

const contato = document.querySelector('#contato');
console.log(contato.elements[0].value);
// posso chamar por número como um array ou como objeto contato.elements.nome
console.log(contato.elements.nome.value);

/**
 * Posso pegar os valores do input de diferentes formas duas delas são a
 * KeyUp que é quando o usuário estiver digitando
 * e com o change quando ir para outro input
 * 
                        const form = document.getElementById('contato');

                        function handleKeyUp(event) {
                            console.log(event.target.value);
                        }

                        form.addEventListener('keyup', handleKeyUp);

 */
const form = document.getElementById('contato');
const texto = document.querySelector('.texto');

function handleChange(event) {}
form.addEventListener('change', handleChange);

/* Função mostrando e sinalizando o campo que não está correto com mensagem

function handleChange(event) {

    ** Mostrando o que foi escrito na tela

    texto.innerHTML += ` <p> ${event.target.value}</p>`;
    const target = event.target;

    **  tipo de verificação, se o target for diferente de true
    
    if (!target.checkValidity()) {
    
        ** target.setCustomValidity('mensagem') para alterar a mensagem de texto
        target.classList.add('invalido');
    
        ** nextElementSibling é o proximo elemento após o evento com required no caso o span
        
        ** pego e adiciono um innerText e coloco o resultado do erro no browser

         target.nextElementSibling.innerText = target.validationMessage;
    }
}
/*


/*posso alterar a cor de background pelo escolha do usuário
criando uma select do index e as options ou posso alterar com input color

function handleChange(event) {
            document.body.style.background = event.target.value
            }
form.addEventListener('change', handleChange);
*/

/**
 * 
function handleChange(event) {
            if (event.target.checked) {// posso mostrar se foi selecionado um checkbox ou radio
                console.log(event.target.value);
            }
}
 */
