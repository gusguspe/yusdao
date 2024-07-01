// products.js

// Definición de la clase Product
class Product {
    constructor(title, description, imageUrl, price, discount) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.discount = discount;
    }
}

// Crear instancias de Product
const product1 = new Product(
    "Macbook Pro 13'1",
    "Space Gray",
    "./assets/mock2.jpg",
    850.00,
    "50% off"
);

const product2 = new Product(
    "iPhone 12 Pro",
    "Pacific Blue",
    "./assets/mock2.jpg",
    999.00,
    "30% off"
);

const product3 = new Product(
    "Samsung Galaxy S21",
    "Phantom Black",
    "./assets/mock2.jpg",
    799.00,
    "25% off"
);

const product4 = new Product(
    "Dell XPS 15",
    "Silver",
    "./assets/mock2.jpg",
    1200.00,
    "15% off"
);

const product5 = new Product(
    "Sony WH-1000XM4",
    "Wireless Headphones",
    "./assets/mock2.jpg",
    349.00,
    "10% off"
);

const product6 = new Product(
    "Canon EOS R5",
    "Mirrorless Camera",
    "./assets/mock2.jpg",
    3499.00,
    "20% off"
);

// Array con las instancias de Product
const products = [product1, product2, product3, product4, product5, product6];

// Exportar el array products (opcional dependiendo de cómo lo uses)
export default products;



const productsSelector = document.getElementById("products");

const productsTemplate = `
<article class="product-card">
    <a class="product-card" href="./details.html">
        <img src="./assets/mock2.jpg" alt="MacBookPro" class="product-img">
        <div class="product-info">
            <span class="product-title"> Macbook Pro 13'1</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
                <span class="price">$850.00</span>
                <span class="discount">50% off</span>
            </div>
            <div class="product-tax-policy"> Incluye I.G.V.</div>
        </div>
    </a>
</article> 
`



// Asigna el contenido del template a innerHTML del elemento seleccionado
productsSelector.innerHTML = productsTemplate;
