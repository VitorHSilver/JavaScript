# Form, em objeto

Capturando todas as informações do formulário e passando para um objeto

```javascript
const form = document.getElementById('contato');
const dados = {};

const texto = document.querySelector('.texto');

function handleChange(event) {
    dados[event.target.name] = event.target.value;
    /*
    Pegando os dados da array do target e colocando em seus respectivos nomes,
    email: teste@com / nome: teste / mensagem: mensagem
    FORMANDO UM OBJETO
    */
    console.log(dados);
}

form.addEventListener('change', handleChange);

# Pegando os valores Individuais
const form = document.getElementById('contato');

function handleKeyUp(event) {
    console.log(event.target.value);
}

form.addEventListener('keyup', handleKeyUp);

#Mostrando mensagem de erro

function handleChange(event) {
    texto.innerHTML += `<p>${event.target.value}</p>`;
    const target = event.target;

    // Tipo de verificação, se o target for diferente de true
    if (!target.checkValidity()) {
        target.setCustomValidity('mensagem');
        target.classList.add('invalido');

        // nextElementSibling é o próximo elemento após o evento com required, no caso o span
        // Pego e adiciono um innerText e coloco o resultado do erro no browser
        target.nextElementSibling.innerText = target.validationMessage;
    }
}

#Alterando cor de fundo
function handleChange(event) {
    document.body.style.background = event.target.value;
}

form.addEventListener('change', handleChange);

function handleChange(event) {
    if (event.target.checked) {
        console.log(event.target.value);
    }
}
