
//TEMPLATE STRING
//Un template string es una característica en JavaScript que facilita la creación de cadenas de texto que incluyen expresiones embebidas. Se reconocen por el uso de backticks (`) en lugar de las comillas simples o dobles que se usan tradicionalmente para las cadenas de texto. Dentro de un template string, puedes insertar variables y expresiones directamente, lo que lo hace muy útil para construir cadenas de forma más dinámica y legible.
const idMisDatos = 'Mis Datos';
const nombre = `Gustavo`;
const edad = 26;
const profesion = `Auditor en una logística`
const ubicación = `Lima`
const hobby = `Escuchar Música, Leer ó dibujar`

const mensaje = `Hola, me llamo ${nombre} , tengo ${edad} , actualmente yo laboro como ${profesion} , estoy viviendo en la ciudad de ${ubicación} , las cosas que me gustan hacer en mis ratos libre son ${hobby}. `;
console.log(mensaje);



// isOnline es una variable booleana, se usa con los valores True ó false

let isOnline = false;

let entrada = prompt('Te estás conectando? Escribe "SI" ó "NO"');
let respuesta = entrada ?? "No indica";
if (respuesta.toUpperCase() == "SI" || respuesta.toUpperCase() == "NO") {
    if (respuesta.toUpperCase() == "SI" && isOnline === false) {
        isOnline = true;
        if (isOnline) {
            let hobby = "leer", nombre = "Gustavo", ubicación = "Lima";
            alert("Usuario Conectado");
            console.log(`Hola ${nombre} como está el clima hoy en ${ubicación}, espero estes disfrutando de ${hobby} tu libro favorito`);
        }
        else {
            alert("El usuario no está conectado en esta ocasión")
        }
    } else {
        alert("Decidiste no conectarte esta vez")
    }
} else {
    alert(`${respuesta}`);
}

//class MisDatosPersonales {
//constructor(Gustavo, doce, Lima, Azul) {
//this.nombre = Gustavo,
//this.edad = doce,
//this.ubicación = Lima,
//  this.color = Azul;}
//}

let elementoPre;

if (idMisDatos) {
    elementoPre = document.getElementById(idMisDatos);
} else {
    elementoPre = document.getElementsByTagName('pre')[2];
}

if (elementoPre) {
    elementoPre.innerText = mensaje;
} else {
    console.error('No se encontró ningún elemento con el ID proporcionado.');
} 