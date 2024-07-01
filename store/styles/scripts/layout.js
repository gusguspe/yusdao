const navSelector = document.getElementById("nav");

 const options = [
 { title: "Ofertas de la semana", linkTo: "./details.html" },
 {title: "Cómo hacerlo", linkTo: "./index.html"},
 {title: "Impuestos", linkTo: "./details.html"},
 {title: "Ordenes", linkTo: "./details.html"},
 {title: "Garantía", linkTo: "./details.html"},
 ]

 for (let option of options) {
    const anchor = document.createElement ("a");
    anchor.className = "nav-button"
    anchor.textContent = option.text
    anchor.href = option.linkTo


    navSelector.appendChild(anchor);

 
 }
 





 const footerSelector = document.querySelector("#footer");
const options1 = [
    { 
        title: "Ofertas de la semana", 
        linkTo: "./details.html", 
        opts: ["Laptops", "Moviles", "Auriculares"] 
    },
    {
        title: "Cómo hacerlo",
        linkTo: "./index.html",
        opts: ["Formas de Pago", "Paypal", "Visa"]
    },
    {
        title: "Impuestos",
        linkTo: "./details.html",
        opts: ["Terminos y Condiciones", "Guia"]
    },
    {
        title: "Ordenes",
        linkTo: "./details.html",
        opts: ["Politicas", "Impuestos", "Garantia"]
    },
    {
        title: "Garantía",
        linkTo: "./details.html",
        opts: ["Pedidos", "Direcciones", "Lista de Deseos"]
    }
];



for (let option of options) {
   // Crear elemento de título
   const titleElement = document.createElement("h3");
   titleElement.textContent = option.title;
   titleElement.style.color = "white"; // Ejemplo de estilo

   // Crear lista para las opciones
   const optionsList = document.createElement("ul");

   // Iterar sobre las opciones de cada columna
   for (let opt of option.opts) {
       const optionItem = document.createElement("li");
       const link = document.createElement("a");
       link.textContent = opt;
       link.href = "#"; // Enlazar a alguna acción o página relevante
       optionItem.appendChild(link);
       optionsList.appendChild(optionItem);
   }

   // Crear contenedor para cada columna del footer
   const columnContainer = document.createElement("div");
   columnContainer.className = "col";
   columnContainer.appendChild(titleElement);
   columnContainer.appendChild(optionsList);

   // Agregar columna al footerSelector
   footerSelector.appendChild(columnContainer);
}
   