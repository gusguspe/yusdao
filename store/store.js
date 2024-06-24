const comprar = () => {
    let totalApagar = 0; // inicialización de la variable que acumula total a pagar//

    for (let index = 1; index <= 3; index++) {
        const nombre = prompt("Qué producto desea llevar?");

        let cantidad = Number(prompt("Cuantas unidades?"));

        let precio = Number(prompt("Cuánto sale cada unidad"));

        const subtotal = cantidad * precio;
        totalApagar = totalApagar + subtotal;

    }

    console.log(totalApagar);
    return totalApagar;
}


const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;

//const total = comprar() + comprar() + comprar();  ESTA TAMBIEN ES UNA MANERA PARA PODER SUMAR EL TOTAL DE UNA MANERA FACIL


alert("El valor total es $" + total);

