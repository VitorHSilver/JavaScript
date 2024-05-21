## Promise

É uma classe construtora e precisa ser inicializada com new

é necessário uma condição para que faça sentido ser utilizada

assim retornando um erro ou a confirmação de uma ação assíncrona.
normalmente é utilizado `resolve` `reject`

```js
     const promessa = new Promise((resolvido, rejeitado) => {
     let condicao = true;
     if (condicao) resolvido({ nome: 'Vitor', idade: 28 });
     else {
          rejeitado(Error('Um erro aconteceu na Promise'));
     }
});
     console.log(promessa);
     promessa.then((resolucao) => console.log(resolucao));
```

### THEN()

O poder das Promises está no método `then()` do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida.

### THEN().THEN()

O método `then()` retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas.

```js
     const promessa = new Promise((resolve, reject) => {
     resolve('Etapa 1');
});

promessa
     .then((resolucao) => {
          console.log(resolucao); // 'Etapa 1';
          return 'Etapa 2';
     })
     .then((resolucao) => {
          console.log(resolucao); // 'Etapa 2';
          return 'Etapa 3';
     })
     .then((r) => r + 4)
     .then((r) => {
          console.log(r); // Etapa 34
     });
```

### CATCH()

O método `catch()`, do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja `rejeitada`

```js
    .catch((rejeitada) => {
    console.log(rejeitada);
    });
```

Catch é a ação quando a Premise é rejeitada, ou seja é um jeito de trabalhar com informações do erro

Podemos também utilizar dessa forma com a segundo argumento de then

```js
    .then((resolucao) => {
    console.log(resolucao);
    })
    ,rejeitada  => {
    console.log('CATCH');
    console.log(rejeitada);
    });
```

### FINALLY()

`finally()` executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.

    .finally(() => {
    console.log('executar uma função ou texto');
    });

### PROMISE.ALL()

Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada.

```js
    const  login  =  new  Promise((resolve) => {
    setTimeout(() => {
    resolve('Usuário logado');
	    },1000);
    });

    const  dados  =  new  Promise((resolve) => {
    setTimeout(() => {
    resolve('Dados carregados');
	    },1000);
    });

    const  carregouTudo = Promise.all([login, dados]);
    carregouTudo.then(resolucao) =>
    resolucao.forEach((e) => {
    console.log(e); // Assim podendo manipular e mostrar todos os valores por linha
   });


```

### PROMISE.RACE()

Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.

```js
    const carregouPrimeiro = Promise.race([login, dados]);

    carregouPrimeiro.then((resposta) => {
    console.log(resposta);
});
```
