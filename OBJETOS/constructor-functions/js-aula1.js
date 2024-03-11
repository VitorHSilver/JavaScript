// const Dom = {
//      seletor: 'li',
//      element() {
//           return document.querySelector(this.seletor);
//      },
//      ativar() {
//           this.element().classList.add('ativar');
//      },
// };

// 2° Crio uma function para selecionar o parametro pedido no chamado da Dom. e acrescentar uma classe ativo EX.: ('li')
function Dom(seletor) {
     this.element = function () {
          return document.querySelector(seletor); // crio uma function pego o argumento abaixo e seleciono no html
     };
     this.ativar = function (nomeClasse) {
          // aqui é pego esse elemento selecionado e adiciono uma classe ativo;
          this.element().classList.add(nomeClasse);
     };
}
const li = new Dom('li'); // 1° Aqui eu declaro um novo elemento, bem semelhante a classe do java
li.ativar(); // aqui posso deixar vazio, assim ele puxa o nome da classe no .add('ativo') ou deixar declarado um nome quando chamar a funcao
