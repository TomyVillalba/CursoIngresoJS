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
    var mayores = 0;
    var menores = 0;
    var contador = 0;


    while(contador < 4)
    {
        nombre = prompt("Ingrese su nombre");
    

    edad = parseInt(prompt("Ingrese su edad: "));

    while(!(edad > 0 || edad < 100))
    {
        edad = parseInt(prompt("Ingrese una edad valida: "));
    }
    if(edad > 17)
    {
        mayores ++;
    }
    else{
        menores ++;
    }

        sexo = prompt("Ingrese un sexo que sea F o M: ");

        while(sexo !== "F" && sexo !== "M")
        {
            sexo = prompt("Ingrese una sexo valido: ");
        }
        switch(sexo)
        {
            case "M": sexo = "Masculino";
            break;

            case "F": sexo = "Femenino";

        }
    
    }
}
