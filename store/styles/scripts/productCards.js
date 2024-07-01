// Define la función createCard que acepta un objeto product
function createCard(product) {
    // Construye el template string para una tarjeta de producto
    const cardTemplate = `
        <article class="product-card">
            <a class="product-card" href="./details.html">
                <img src="${product.image}" alt="${product.title}" class="product-img">
                <div class="product-info">
                    <span class="product-title">${product.title}</span>
                    <span class="product-description">${product.description}</span>
                    <div class="product-price-block">
                        <span class="price">$${product.price}</span>
                        <span class="discount">${product.discount}% off</span>
                    </div>
                    <div class="product-tax-policy">${product.taxPolicy}</div>
                </div>
            </a>
        </article>
    `;

    return cardTemplate; // Retorna el template string de la tarjeta de producto
}


const products = [
    {
        title: "Macbook Pro 13'1",
        description: "Space Gray",
        price: 850.00,
        discount: 50,
        taxPolicy: "Incluye I.G.V.",
        image: "./assets/mock2.jpg",
        linkTo: "./details.html"
    },



    {
        title: "Macbook Pro 13'1",
        description: "Space Gray",
        price: 850.00,
        discount: 50,
        taxPolicy: "Incluye I.G.V.",
        image: "./assets/mock2.jpg",
        linkTo: "./details.html"
    },

    {
        title: "Macbook Pro 13'1",
        description: "Space Gray",
        price: 850.00,
        discount: 50,
        taxPolicy: "Incluye I.G.V.",
        image: "./assets/mock2.jpg",
        linkTo: "./details.html"
    },


    {
        title: "Macbook Pro 13'1",
        description: "Space Gray",
        price: 850.00,
        discount: 50,
        taxPolicy: "Incluye I.G.V.",
        image: "./assets/mock2.jpg",
        linkTo: "./details.html"
    },

    {
        title: "Macbook Pro 13'1",
        description: "Space Gray",
        price: 850.00,
        discount: 50,
        taxPolicy: "Incluye I.G.V.",
        image: "./assets/mock2.jpg",
        linkTo: "./details.html"
    },
    {
        title: "Macbook Pro 13'1",
        description: "Space Gray",
        price: 850.00,
        discount: 50,
        taxPolicy: "Incluye I.G.V.",
        image: "./assets/mock2.jpg",
        linkTo: "./details.html"
    },
    {
        title: "Macbook Pro 13'1",
        description: "Space Gray",
        price: 850.00,
        discount: 50,
        taxPolicy: "Incluye I.G.V.",
        image: "./assets/mock2.jpg",
        linkTo: "./details.html"
    },

    {
        title: "Macbook Pro 13'1",
        description: "Space Gray",
        price: 850.00,
        discount: 50,
        taxPolicy: "Incluye I.G.V.",
        image: "./assets/mock2.jpg",
        linkTo: "./details.html"
    },
    // Agrega aquí más objetos para cada producto
];

// Define una variable para almacenar el contenido de todas las tarjetas de productos
let productsTemplate = '';

// Itera sobre el array de productos y construye el template de las tarjetas dinámicamente
for (let product of products) {
    productsTemplate += createCard(product); // Agrega cada tarjeta generada al template
}

// Selecciona el elemento donde se renderizarán las tarjetas de productos
const productsSelector = document.getElementById("products");

// Asigna el contenido del template a innerHTML del elemento seleccionado
productsSelector.innerHTML = productsTemplate;


// Define la función createCard que acepta un objeto product
function createCard(product) {
    // Construye el template string para una tarjeta de producto
    const cardTemplate = `
        <article class="product-card">
            <a class="product-card" href="${product.linkTo}">
                <img src="${product.image}" alt="${product.title}" class="product-img">
                <div class="product-info">
                    <span class="product-title">${product.title}</span>
                    <span class="product-description">${product.description}</span>
                    <div class="product-price-block">
                        <span class="price">$${product.price}</span>
                        <span class="discount">${product.discount}% off</span>
                    </div>
                    <div class="product-tax-policy">${product.taxPolicy}</div>
                </div>
            </a>
        </article>
    `;

    return cardTemplate; // Retorna el template string de la tarjeta de producto





}

// Define la función printCards que acepta un array de productos y un id de selector HTML
function printCards(arrayOfProducts, idSelector) {
    // Define una variable para almacenar el contenido de todas las tarjetas de productos
    let productsTemplate = '';

    // Itera sobre el array de productos y construye el template de las tarjetas dinámicamente
    for (let product of arrayOfProducts) {
        productsTemplate += createCard(product); // Agrega cada tarjeta generada al template
    }

    // Selecciona el elemento donde se renderizarán las tarjetas de productos
    const selectorElement = document.getElementById(idSelector);

    // Asigna el contenido del template a innerHTML del elemento seleccionado
    selectorElement.innerHTML = productsTemplate;
}

// Ejemplo de uso:
const products1 = [
    {
        title: "Macbook Pro 13'1",
        description: "Space Gray",
        price: 850.00,
        discount: 50,
        taxPolicy: "Incluye I.G.V.",
        image: "./assets/mock2.jpg",
        linkTo: "./details.html"
    },
    // Agrega más objetos para cada producto si es necesario
];

// Llama a la función printCards con el array de productos y el ID del selector HTML
printCards(products, "products"); // Aquí "products" es el ID del elemento donde se renderizarán las tarjetas
