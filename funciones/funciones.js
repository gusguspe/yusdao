function sumar(num1, num2) {
    const resultado = num1 + num2
    console.log("El resultado es: " + resultado);
    return resultado //return se utiliza para reutilizar los resultados para otras operaciones.
}

/* sumar(10,20) si no se asigna esta funcion, no va a funcionar las indicaciones que se dieron previamente*/

const primerSuma = sumar(10, 20)  //30
console.log(primerSuma);

const segundaSuma = sumar(1, 100)  //101
console.log(segundaSuma);

const terceraSuma = sumar(100, 200)  //300
console.log(terceraSuma);

const sumaTotal = primerSuma + segundaSuma + terceraSuma;
console.log("El resultado total es: " + sumaTotal);

const imprimirResultado = (num1, num2, operacion) => {
    if (operacion === "sumar") {
        const suma = num1 + num2
        console.log(suma);
        return suma

    } else if (operacion === "restar") {
        const resta = num1 - num2;
        console.log("El resultado de la resta es: " + resta);
        return resta;
    } //se añadió el comando restar con ELSE IF para adicionarlo y ahora si se asigna como comando valido para la operacion

}



imprimirResultado(10, 20, "sumar")
//imprimirResultado(10,20, "restar") , no es posible asignar esta orden debido a que restar no se encuentra disponible como operacion hasta que no se asigne else if
imprimirResultado(10, 20, "restar") // este comando fue añadido una vez que se colocó el ELSE IF, el cual logra ejecutar el resultado correctamente en la consola

const imprimirNumero = (numero) => console.log(numero);

imprimirNumero(20)
imprimirNumero(100)
imprimirNumero(300)