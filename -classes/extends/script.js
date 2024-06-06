class Veiculo {
     constructor(rodas, combustivel) {
          this.rodas = rodas;
          this.combustivel = combustivel;
     }
     acelerar() {
          console.log('acelerou');
     }
}

class Moto extends Veiculo {
     constructor(rodas, combustivel, capacete) {
          super(rodas, combustivel);
          this.capacete = capacete;
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

const honda = new Moto(2, true, 12);
honda.acelerar();
