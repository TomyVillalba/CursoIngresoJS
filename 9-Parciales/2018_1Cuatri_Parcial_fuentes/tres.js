function mostrar()
{
    var precio;
    
    var preciofinal;

    var descuento;

    var descuentoDinero;

    var iva;

    precio = prompt("Ingrese un importe: ");

    precio = parseInt(precio);

    descuento = prompt("Ingrese el descuento: ");

    decuento = parseInt(descuento);

    iva = precio * 21 / 100;

    descuentoDinero = (precio * decuento) / 100;

    preciofinal = (precio - descuento) + iva;

    alert("El precio final es " + preciofinal);


    





    

}
