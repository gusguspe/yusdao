const footerSelector = document.querySelector("#footer");


document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar los elementos nav y footer
    const navSelector = document.getElementById("nav");
    const footerSelector = document.getElementById("footer");

    // Definir las opciones con la nueva propiedad opts
    const options = [
        { title: "Ofertas de la semana", linkTo: "./outlet.html", opts: ["Descuento 1", "Descuento 2"] },
        { title: "Cómo hacerlo", linkTo: "./how.html", opts: ["Guía 1", "Guía 2"] },
        { title: "Impuestos", linkTo: "./tax.html", opts: ["Impuesto 1", "Impuesto 2"] },
        { title: "Ordenes", linkTo: "./orders.html", opts: ["Orden 1", "Orden 2"] },
        { title: "Garantía", linkTo: "./warranty.html", opts: ["Garantía 1", "Garantía 2"] },
    ];

    // Crear los botones de navegación
    for (let option of options) {
        const anchor = document.createElement("a");
        anchor.className = "nav-button";
        anchor.textContent = option.title;
        anchor.href = option.linkTo;
        navSelector.appendChild(anchor);
    }

    // Crear las columnas del pie de página
    for (let option of options) {
        const div = document.createElement("div");
        div.className = "footer-column";

        const title = document.createElement("h3");
        title.textContent = option.title;
        div.appendChild(title);

        const ul = document.createElement("ul");
        for (let opt of option.opts) {
            const li = document.createElement("li");
            li.textContent = opt;
            ul.appendChild(li);
        }
        div.appendChild(ul);
        footerSelector.appendChild(div);
    }
});








