/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;

    var ancho;

    var cantidadAlambre;

    largo = parseInt(document.getElementById("Largo"). value);

    ancho = parseInt(document.getElementById("Ancho"). value);

    cantidadAlambre = largo * 2 + ancho * 2;

    alert(cantidadAlambre);

}
function Circulo () 
{
	var radio;

    var cantidadAlambre;

    radio = parseInt(document.getElementById("Radio").value);

    cantidadAlambre = radio * 2 * 3.14 * 3; 

    alert("La cantidad a comprar es: " + cantidadAlambre);
}
function Materiales () 
{
	var largo;

    var ancho;

    var superficie;

    var cemento = 2;

    var cal = 3;

    largo = parseInt(document.getElementById("Largo").value);

    ancho = parseInt(document.getElementById("Ancho").value);

    superficie = largo * ancho;

    cal = superficie * 3;

    cemento = superficie * 2;

    alert("La cantidad de bolsas de cemento es " + cemento + " la cantdiad de bolsas de cal es  " + cal);

}