function mostrar()
//(IF)Pedir dos números y mostrar el resultado: 
//Si son iguales los muestro concatenados. 
//Si el primero es mayor, los divido, 
//de lo contrario los sumo. 
//Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
//"la suma es xxx y es menor a 50".//
{
    var num1;
    var num2;
    var resultado;
    
    num1 = parseInt(prompt("Ingrese el primer numero: "));
    num2 = parseInt(prompt("Ingrese el segundo numero: "));

    if(num1 > num2)
    {
        resultado = num1 / num2;
    }
   if(num1 < num2)
    {
        num1 + num2;
    }
    if(resultado < 50)
    {
        alert("La suma es " + resultado + " y es menor a 50");
    }
    
}
