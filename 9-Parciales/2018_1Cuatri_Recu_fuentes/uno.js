
function mostrar()
{
    var base;
    var altura;
    var superficie;
    var perimetro;
    
    base = prompt("Ingrese la base: ");
    
    altura = prompt("Ingrese la altura: ");

    superficie = base * altura;

    perimetro = (base * altura) / superficie;

    alert("La superficie es " + superficie + " y el perimetro es " + perimetro);

}
