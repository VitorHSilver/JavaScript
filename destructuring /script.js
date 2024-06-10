function handleMouseMove({ clientX, clientY }) {
     console.log(clientX, clientY);
}
document.documentElement.addEventListener('mousemove', handleMouseMove);

// handleMouseMove();

const frutas = ['Banana', 'Uva'];

const [fruta1, fruta2] = frutas;

console.log(frutas);
