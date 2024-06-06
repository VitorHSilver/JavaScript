## Extends
É um forma de pegar atributos, de uma classe por exemplo de carros e motos, pegando a função acelerar de ambos()

```js
class  Veiculo 
{

constructor(rodas, combustivel) {

this.rodas  =  rodas;

this.combustivel  =  combustivel;

}

acelerar() {

console.log('acelerou');

	}

}

  
class  Moto  extends  Veiculo 
{

constructor(rodas, combustivel, capacete) {

super(rodas, combustivel); // sempre que adicionar algo no constructor da classe pai deve ser chamada no super

this.capacete  =  capacete;

}

acelerar() {

super.acelerar();

console.log('acelerou e muito');

}

empinou() {

super.acelerar();

console.log(`moto empinou com duas ${this.rodas} rodas`);

	}


}

const  honda  =  new  Moto(2, true, 12);

honda.acelerar();
```