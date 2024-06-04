fetch('/-json/dados.json').then((r) =>
     r.json().then((meuJson) => {
          meuJson.forEach((materia) => {
               console.log(materia.id);
          });
     })
);

/** Transformando objeto em String Json */
const configuracoes = {
     player: 'Google',
     tempo: 25.5,
     aula: '2.1 JavaScript',
};


localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config)) // convertendo informações salvas no localStorage para JSON