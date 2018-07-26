function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

    switch(mesDelAño)
    {
        case "Enero":  alert("Falta para el invierno");
         break;
        case "Febrero":  alert("Falta para el invierno");
         break;
        case "Marzo": alert("Falta para el invierno");
         break;
        case "Abril":  alert("Falta para el invierno");
         break;
        case "Mayo": alert("Falta para el invierno");
        break;
         
        case "Junio": alert("Abrigate hace frio");
        break;
        case "Julio": alert("Abrigate hace frio");
         break;
        case "Agosto": alert("Abrigate hace frio");

        break;

        case "Septiembre": alert("Ya paso el frio, ahora calor");
         break;                
        case "Octubre": alert("Ya paso el frio, ahora calor");
         break;
        case "Noviembre": alert("Ya paso el frio, ahora calor");
         break;
        case "Diciembre": alert("Ya paso el frio, ahora calor");
        break;
    }



}//FIN DE LA FUNCIÓN