## REGULAR EXPRESSION

Regexp ou Regex são expressões utilizadas para realizarmos buscas/substituições de padrões em strings.


```js
const  padraoRegexp  = /J/;

const  texto  =  'JavaScript';
const  novoTexto  =  texto.replace(padraoRegexp, 'B');

console.log(novoTexto);
```



```js
// Procura: J seguido de a, v e a
const regexp = /Java/;
'JavaScript'.replace(regexp, 'Type');
// TypeScript   
```