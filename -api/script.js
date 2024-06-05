url2 = 'https://pokeapi.co/api/v2/pokemon/1';
fetch(url2).then((r) =>
     r.json().then((poke) => {
          console.log(poke.name);
     })
);

/**
 * Método de fazer envios falsos para esse site, podendo fazer get também
 * A forma abaixo é mais simplificado e organizado
 */
const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
     method: 'POST',
     headers: {
          'Content-Type': 'application/json; charset=utf-8',
     },
     body: '"aula": "JavaScript"',
};

fetch(url, options)
     .then((response) => response.json())
     .then((json) => {
          console.log(json);
     });
