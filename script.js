// Catálogo de productos
const productos = [
    { id: 1, nombre: "Higenol DH", precio: 2300, categoria: "Limpieza y Perfumería" },
    { id: 2, nombre: "Ala 400gr", precio: 750, categoria: "Limpieza y Perfumería" },
    { id: 3, nombre: "Jabón Líquido Skip", precio: 5000, categoria: "Limpieza y Perfumería" },
    { id: 4, nombre: "Desodorante Rexona", precio: 900, categoria: "Limpieza y Perfumería" },
    { id: 5, nombre: "Media Tarde", precio: 1100, categoria: "Galletas" },
    { id: 6, nombre: "Don Satur", precio: 800, categoria: "Galletas" },
    { id: 7, nombre: "Cofler Block Chocolate", precio: 1100, categoria: "Galletas" },
    { id: 8, nombre: "Diversión Surtidas", precio: 1500, categoria: "Galletas" },
    { id: 9, nombre: "Carnes", precio: 9000, categoria: "Productos Frescos" },
    { id: 10, nombre: "Yogurt Bebible", precio: 1800, categoria: "Productos Frescos" },
    { id: 11, nombre: "Hamburguesa PATY", precio: 2250, categoria: "Productos Frescos" },
    { id: 12, nombre: "Queso Cremoso", precio: 6800, categoria: "Productos Frescos" },
    { id: 13, nombre: "Talca 3L", precio: 1600, categoria: "Bebidas" },
    { id: 14, nombre: "Coca Cola 3L", precio: 3300, categoria: "Bebidas" },
    { id: 15, nombre: "Cerveza Quilmes 1.2L", precio: 2700, categoria: "Bebidas" },
    { id: 16, nombre: "Cerveza Salta 1.2L", precio: 2400, categoria: "Bebidas" },
];



// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find((prod) => prod.id === idProducto);
    if (producto) {
        carrito.push(producto);
        alert(`Se agregó al carrito: ${producto.nombre}`);
    } else {
        alert("Producto no encontrado.");
    }
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensaje = "Productos en el carrito:\n";
    let total = 0; // Variable para almacenar el total

    // Recorrer los productos del carrito
    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
        total += producto.precio; // Sumar el precio del producto al total
    });

    // Agregar el total al mensaje
    mensaje += `\nTotal: $${total}`;

    // Mostrar el mensaje con los productos y el total
    alert(mensaje);
}


// Asociar eventos a los botones "Agregar al carrito"
document.querySelectorAll(".agregar-carrito").forEach((boton) => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        const idProducto = parseInt(boton.getAttribute("data-id"));
        agregarAlCarrito(idProducto);
    });
});

// Botón del carrito
const botonCarrito = document.querySelector("button img[src*='carrito_compras']");
botonCarrito?.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarCarrito();
});


// Función para buscar productos por nombre y categoría
function findProductos(nombre, categoria) {
    return productos.filter(producto => {
        const coincideNombre = producto.nombre.toLowerCase().includes(nombre.toLowerCase());
        const coincideCategoria = categoria ? producto.categoria === categoria : true;
        return coincideNombre && coincideCategoria;
    });
}

// Función para mostrar los resultados de búsqueda en el body
function mostrarResultados(productosFiltrados) {
    const divResultados = document.getElementById("resultados");
    divResultados.innerHTML = ""; // Limpiar los resultados anteriores

    if (productosFiltrados.length > 0) {
        productosFiltrados.forEach(producto => {
            const divProducto = document.createElement("div");
            divProducto.classList.add("resultado");
            divProducto.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
            `;
            divResultados.appendChild(divProducto);
        });
    } else {
        divResultados.innerHTML = "<p>No se encontraron productos.</p>";
    }
}

// Función que se ejecuta cuando se hace clic en el botón de búsqueda
document.getElementById("btnBuscar").addEventListener("click", (event) => {
    event.preventDefault(); // Evitar que la página se recargue

    const nombreProducto = document.getElementById("buscarInput").value;
    const categoriaSeleccionada = document.getElementById("categoriaSelect").value;
    
    // Buscar productos filtrados por nombre y categoría
    const productosFiltrados = findProductos(nombreProducto, categoriaSeleccionada);
    
    // Mostrar los resultados
    mostrarResultados(productosFiltrados);
});