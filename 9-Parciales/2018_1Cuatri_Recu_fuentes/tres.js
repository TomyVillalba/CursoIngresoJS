function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    var iva;

    precioFinal = document.getElementById("precioFinal");

    precio = prompt("Ingrese el precio: ");
    descuento = prompt("Ingrese el descuento");

    descuento = precio * 21 / 100;
    
    alert("El descuento es " + descuento );

    document.getElementById("El IVA es " + iva + " y el precio final es " + precioFinal);



}
