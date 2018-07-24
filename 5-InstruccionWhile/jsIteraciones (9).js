function mostrar()
{

	var contador=0;
	// declarar variables
	var max;
	var min;
	var numero;
	var respuesta='si';
	var flag=true;

	while(respuesta!='no')
	{
		numero = parseInt(prompt("Ingrese un numero"));

		if(flag)
		{
			flag = false;

			max = numero;

			min = numero;
		}		

		if(numero > max)
		{
			max = numero;
		}

		if(numero < min)
		{
			min = numero
		}
	
	}

	respuesta = prompt("¿Desea continuar?");




}//FIN DE LA FUNCIÓN