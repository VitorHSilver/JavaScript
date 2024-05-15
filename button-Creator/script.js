/**
 * CRIANDO UMA PAGINA QUE MOSTRA AS TRANSFORMAÇÕES DOS ELEMENTOS
 */
const controles = document.forms[0];
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

/**
 * Aqui eu crio um objeto que recebe o valor dos elementos e aplica no botao
 * dentro desse objeto coloco element:btn
 * ou seja toda vez que eu chamar this estou falando do objeto
 * e no caso do element o btn
 *
 */
const handleStyle = {
     element: btn,
     texto(value) {
          this.element.innerHTML = value;
     },
     color(value) {
          this.element.style.color = value;
     },
     backgroundColor(value) {
          this.element.style.backgroundColor = value;
     },
     height(value) {
          this.element.style.height = value + 'px';
     },
     width(value) {
          this.element.style.width = value + 'px';
     },
     border(value) {
          this.element.style.border = value;
     },
     borderRadius(value) {
          this.element.style.borderRadius = value + 'px';
     },
     fontFamily(value) {
          this.element.style.fontFamily = value;
     },
     fontSize(value) {
          this.element.style.fontSize = value + 'rem';
     },
     textTransform(value) {
          this.element.style.textTransform = value;
     },
};

function handleChange(event) {
     const name = event.target.name;
     const value = event.target.value;
     handleStyle[name](value);
     saveValues(name, value);
     showCss();
}
/**
 * LocalStorage onde é armazenado informações após o fechamento do browser do usuário
 */
function saveValues(name, value) {
     localStorage[name] = value;
}
function setValues() {
     const properties = Object.keys(localStorage);
     properties.forEach((propertie) => {
          handleStyle[propertie](localStorage[propertie]);
          controles.elements[propertie].value = localStorage[propertie];
     });
     showCss();
}
setValues();

function showCss() {
     cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}
