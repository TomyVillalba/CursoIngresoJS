function mostrar()
{

var sexo = prompt("ingrese f ó m .");

    while(sexo != "F" && sexo != "M")
    {
        sexo = prompt("Ingrese F o M");
    
    }



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN