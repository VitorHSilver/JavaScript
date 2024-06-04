# Form

## Pegando todos as informações do formulário e passando para um objeto*

```js
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

```

### PEGANDO OS VALORES INDIVIDUAIS

#### KEYUP 
```js
      const form = document.getElementById('contato');

         function handleKeyUp(event) {
           console.log(event.target.value);
         }

	   form.addEventListener('keyup', handleKeyUp);

```

#### CHARGE e mostrando a mensagem de erro

```js
    function handleChange(event) {
    texto.innerHTML += ` <p> ${event.target.value}</p>`;
    const target = event.target;
```
  tipo de verificação, se o target for diferente de true
 ```js   
    if (!target.checkValidity()) {
    
       target.setCustomValidity('mensagem')
       target.classList.add('invalido');
 ```
   *nextElementSibling é o proximo elemento após o evento com required no caso o span*
        
  pego e adiciono um innerText e coloco o resultado do erro no browser
```js
         target.nextElementSibling.innerText = target.validationMessage; 
         }   
        }

```
#### Alterando background color 

```js
        function handleChange(event) {
	     document.body.style.background = event.target.value
     }
     
    form.addEventListener('change', handleChange);
   
    function handleChange(event) {
                if (event.target.checked) {
                    console.log(event.target.value);
                }
    }
```
