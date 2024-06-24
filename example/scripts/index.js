/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";


const entrada = prompt("¿Qué producto desea comprar?");

console.log(entrada);

alert(entrada);


const mensaje = prompt ("Bienvenido"+ entrada);