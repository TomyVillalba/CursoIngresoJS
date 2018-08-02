function mostrar()

//edad = 0;
//if(edad > max)
//{
    //nombreEdadMaxima = nombre;
    //sexoEdadMaxima = sexo;
//}

{
    var nombre;
    var edad;
    var sexo;
    var contMujeres = 0;
    var contHombres = 0;
    var contador = 0;
 
    while(contador < 4)
    {
        contador ++;

        nombre = prompt("Ingrese su nombre");
    

    edad = parseInt(prompt("Ingrese su edad: "));

    while(edad < 0 || edad > 100 || isNaN(edad))
    {
        edad = parseInt(prompt("Ingrese una edad valida: "));
    }
    
        sexo = prompt("Ingrese un sexo que sea F o M: ");

        while(sexo !== "F" && sexo !== "M")
        {
            sexo = prompt("Ingrese una sexo valido: ");
        }
       if (sexo == "F")
       {
           contMujeres++;
       }
       else
       {
           contHombres++;
       }
       

       

        
    
    }
    document.write("Cantidad de mujeres: " + contMujeres + "<br>" );
    document.write("Cantidad de hombres: " + contHombres + "<br>" );
    document.write("Cantidad de mayores de edad: " + nombreEdadMaxima + "<br>" );
    document.write("Cantidad de menores de edad: ");
    document.write("La edad mas baja: ");
    document.write("La edad mas alta: ");
    document.write("Promedio de edad de mujeres: ");
    document.write("Promedio de edad de hombres: ");
    document.write("Promedio de edad total: ");
    document.write("Nombre del mas viejo: ");
    document.write("Nombre del mas joven: ");
    document.write("Sexo del mas viejo: " + sexoEdadMaxima + "<br>");

}
