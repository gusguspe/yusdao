/* prompt lo que hace es solicitar ciertos datos adicionales*/

const temperatura = prompt("podrias indicarme la temperatura?");

if (temperatura > 30) {
    alert("Hace mucho calor")

} else if (temperatura > 18) {
    alert("hace una temperatura agradable")
}
else {
    alert("Es un valor menor ó No es un valor númerico");

}

/*con alert se generó un cuadro adicional en el cual se muestra un mensaje si el valor es mayor a 30*/
/* if (temperatura>30) , esto determino que si el valor es inferior saltaria el mensaje*/
/* con else se dio una alerta que al colocar un valor en letras y no numeros que no este dentro delos valores previos indicados, mostrara el mensaje que se ha colocado)*/

