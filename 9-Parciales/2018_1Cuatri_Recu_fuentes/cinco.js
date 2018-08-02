function mostrar()
{
   var dias;

   dias = prompt("Ingrese el dia de la semana: ");


   switch(dias)
   {
       case "Sabado":
       case "Domingo": alert("Buen finde");
       break;
       

       case "Lunes":
       case "Martes":
       case "Miercoles":
       case "Jueves":
       case "Viernes": alert("A trabajar");
       break;

       default: "No existis, kpo"
   }

  
}
