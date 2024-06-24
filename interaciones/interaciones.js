/* UNA INTERACCION ES REPETIR ALGO*/

let suma = 0;
const hastaDondeSumar = prompt("Hasta que número quiere sumar ?")

for (let i = 1; i <= hastaDondeSumar; i++) {
    suma = suma + i
}

alert("El resultado de la suma es:" + suma)