/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;

    var precio2;

    var precio3;

    var preciofinal;

    precio1 = parseInt(document.getElementById("PrecioUno").value);

    precio2 = parseInt(document.getElementById("PrecioDos").value);

    precio3 = parseInt(document.getElementById("PrecioTres").value);
    
    preciofinal = precio1 + precio2 + precio3;

    alert(preciofinal);
}
function Promedio () 
{
	var precio1;

    var precio2;

    var precio3;

    var preciofinal;

    precio1 = parseInt(document.getElementById("PrecioUno").value);

    precio2 = parseInt(document.getElementById("PrecioDos").value);

    precio3 = parseInt(document.getElementById("PrecioTres").value);
    
    preciofinal = precio1 + precio2 + precio3 / 3;

    alert(preciofinal);
}
function PrecioFinal () 
{
	var precio1;

    var precio2;

    var precio3;

    var preciofinal;

    var iva;

    precio1 = parseInt(document.getElementById("PrecioUno").value);

    precio2 = parseInt(document.getElementById("PrecioDos").value);

    precio3 = parseInt(document.getElementById("PrecioTres").value);
    
    preciofinal = precio1 + precio2 + precio3;

    preciofinal = precio1 + precio2 + precio3 * 21 / 100;

    alert(preciofinal);
}