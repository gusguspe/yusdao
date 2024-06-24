const producto1 = {
    nombre: "celular",
    precio: 100000,
    stock: 2
};

producto1.id = "id123";
producto1['foto'] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log(producto1);
console.log(producto1.nombre);

class Product4 {
    constructor(id, title, price, stock, images, onsale, units, supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this.units = units;
        this._supplier = supplier;

    }

    get supplier() {
        return this._supplier;
    }
    set supplier(nuevaEdad) {
        this._supplier = nuevaEdad;
    }


    sellUnits(units) {
        this.stock = this.stock - units
        console.log(`Se vendieron ${units} unidades`);
    }
}


const product4 = new Product4('Articulo', 'Totebag', 15, 12, ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbrQ2FMP1CQ5plKFEG-GlICD0xvaKBTId3UVcoDvDXA&s"], true, 10, 35);
console.log(product4.id);
console.log(product4.title);
console.log(product4.price);
console.log(product4.stock);
console.log(product4.images);
console.log(product4.onsale);
console.log(product4.supplier);
console.log(product4.units);


product4.sellUnits(10)
product4.sellUnits(5)
















class Product5 {
    constructor(id, title, price, stock, images, onsale) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
    }
}

const Prod5 = new Product5();






class Product2 {
    constructor(id, title, price, stock, images, onsale) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
    }
}

const prod2 = new Product2("Super Audifonos", "JBL", 300, 10, ["https://oechsle.vteximg.com.br/arquivos/ids/16995335-1000-1000/image-b45b194f7b3443e390616fe0d171b7e0.jpg?v=638378545353900000"], false);







class Product3 {
    constructor(id, title, price, stock, images, onsale) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
    }
}

const prod3 = new Product3("Super Mouse", "Logitec", 150, 10, ["https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-black.png?v=1"], true);


console.log(Product4, Product2, Product3)
console.log(prod2.id);
console.log(prod2.title);

console.log(prod3.id);
console.log(prod3.onsale);


