


let nombre= prompt ("Ingrese su nombre") ;
let respuesta = prompt ("Buenos dias " + nombre  + " desea comprar?")   

if (respuesta.toLocaleLowerCase() === "si"){ 

    let producto = mostrarMenu () ;
    let i = producto ; 
    subtotal = 0 ; 
    while (producto.toLocaleLowerCase() !="finalizar") {
        let precio_unitario = 0; 
        let producto_cantidad = 0; 

        switch (producto.toLocaleLowerCase()) {
            case "cerveza":
                precio_unitario = 2500;
                break;
            case "pan":
                precio_unitario = 300;
                break;
            case "leche":
                precio_unitario = 1500;
                break;
            case "gaseosa":
                precio_unitario = 3000;
                break;
            case "arroz":
                precio_unitario = 1300;
                break;
            case "fideos":
                precio_unitario = 1000;
                break;
            case "yogurt":
                precio_unitario = 1400;
                break;
            default: 
                alert("Datos incorrectos. Por favor ingrese datos válidos o escriba 'Finalizar' para terminar su compra");
                producto = mostrarMenu(); 
                continue; 
        }

        producto_cantidad = parseInt(prompt("Ingrese la cantidad que desea"), 10);

        if (!isNaN(producto_cantidad) && producto_cantidad > 0) {
            subtotal += calcularprecio(precio_unitario, producto_cantidad);
            alert("El valor actual de la compra es " + subtotal);
        } else {
            alert("Cantidad no válida. Intente de nuevo.");
        }
        producto = mostrarMenu();
    }

    alert("El total a pagar es: " + subtotal);
       
}    
    
else if (respuesta.toLocaleLowerCase() === "no") {
    console.log ("Gracias por ingresar, esperamos verlo nuevamente")

}
else {
    console.log ("Respuesta invalida, por favor ingrese Si o No")
}

function calcularprecio(precio_unitario, producto_cantidad){
    precio= producto_cantidad * precio_unitario
    return precio 
    
}
function mostrarMenu() {
    return prompt("Seleccione el artículo que quiere agregar a su carrito:\n1. cerveza \n2. pan \n3. leche \n4. gaseosa \n5. arroz \n6. fideos \n7. yogurt \n8. helado (o escriba 'Finalizar' para terminar)");
}

