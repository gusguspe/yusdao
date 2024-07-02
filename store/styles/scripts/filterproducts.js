// Definición de la función para imprimir las tarjetas de productos inicialmente
function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = '';
    for (let product of arrayOfProducts) {
        productsTemplate += createCard(product);
    }
    document.getElementById(idSelector).innerHTML = productsTemplate;
}

// Función para crear una tarjeta de producto
function createCard(product) {
    return `
        <div class="product-card">
            <img src="${product.imgUrl}" alt="${product.title}" class="product-img">
            <div class="product-info">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-description">${product.description}</p>
                <div class="product-price-block">
                    <span class="price">$${product.price}</span>
                    ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ''}
                </div>
                <p class="product-tax-policy">${product.taxPolicy}</p>
            </div>
        </div>
    `;
}

// Función para capturar el texto del input, filtrar y actualizar la vista
function captureText(event) {
    const searchText = event.target.value.toLowerCase(); // Captura el texto ingresado y conviértelo a minúsculas
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchText)
    );
    updateProductCards(filteredProducts, 'products'); // Llama a la función para actualizar las tarjetas de productos
}

// Función para actualizar las tarjetas de productos en la vista
function updateProductCards(filteredProducts, idSelector) {
    let productsTemplate = '';
    for (let product of filteredProducts) {
        productsTemplate += createCard(product);
    }
    document.getElementById(idSelector).innerHTML = productsTemplate;
}

// Array de productos (simulado)
const products = [
    { title: 'Macbook Pro 13,1', description: 'Space Gray', price: 850, taxPolicy: 'Tax included', imgUrl: './assets/mock1.jpg' },   //se modifico los datos de esta seccion para que al insertar nombres en la barra de navegacion arroje el producto a buscar
    { title: 'Macbook Single Edition', description: 'Space Blue', price: 830, taxPolicy: 'Tax excluded', imgUrl: './assets/mock1.jpg' },
    { title: 'iMac 27inch', description: 'Space Black', price: 999, taxPolicy: 'Tax included', imgUrl: './assets/mock1.jpg' },
    // Agrega más productos según sea necesario
];

// Imprimir las tarjetas de productos inicialmente al cargar la página
printCards(products, 'products');

// Selector del input de búsqueda
const searchSelector = document.querySelector('input[type="text"]');

// Escuchar el evento keyup en el input de búsqueda
searchSelector.addEventListener("keyup", captureText);



