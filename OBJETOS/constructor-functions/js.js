const carro = {
     marca: 'Marca',
     nome: 'nome',
     preco: 0,
};

function Carro() {
     this.marca = 'Marca ';
     this.preco = 0;
}
// estou instanciando um objeto carro , para usar em outras marcas
const honda = new Carro('honda', 30000);
const fiat = new Carro('fiat', 130000);

function Camisa() {
     this.marca;
     this.preco;
}
const lacoste = new Camisa('Lacoste', 150.0);
lacoste.marca = 'Lacoste';
lacoste.preco = '150,0';

// foi criado Carro2  pego marca, e precoInicial dos argumentos da function Incluo na function e acrescento taxa
function Carro2(marca, precoInicial) {
     const taxa = 1.2;
     const precoFinal = precoInicial * taxa;
     this.marca = marca;
     this.preco = precoFinal;
     console.log(precoFinal);
}
const ferrari = new Carro2('ferrari', 2000);
