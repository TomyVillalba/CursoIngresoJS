function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta=true;
	var numero;
	var acumneg = 0;
	var acumpos = 0;
	var contNeg = 0;
	var contPos = 0;
	var contCeros = 0;
	var contPares = 0;
	var promPos;
	var promNeg;
	var dierencia;


	while(respuesta==true)
	{
		
		numero = parseInt(prompt("Ingrese un numero: "));

		if(numero > 0)
		{
			acumneg = acumneg + numero;

			contNeg++;
		}
		else
		
			if(numero < 0)
			{

			acumpos = acumpos + numero;

			contPos++;

			
		}	
		else
		{
			contCeros++;
		}

		if((numero % 2)== 0 && numero != 0)
		{

			contPares++;
		}

		diferencia = acumPos + acumNeg;
		
		respuesta = confirm("¿Desea continuar?");

	}

	document.write("1. Suma negativos: " + acumneg + "<br>");
	document.write("2. Suma positivos: " + acumpos + "<br>");
	document.write("3. Cantidad de negativos: " + contNeg + "<br>");
	document.write("4. Cantidad de positivos: " + contPos + "<br>");
	document.write("5. Cantidad de ceros: " + contCeros + "<br>");
	document.write("6. cantidad de pares: " + contPares + "<br>");
	if(contPos != 0)
	{
		promPos = acumpos / contPos;
		document.write("7. Promedio de los positivos: " + promPos + "<br>");
	}
	else
	{
		document.write("7. Promedio de los positivos: No se pudo calcular <br>");
	}

	if(contNeg != 0)
	{
		promNeg = acumneg / contNeg;
		document.write("8. Promedio de los negativos: " + promNeg + "<br>");
	}
	else
	{
		document.write("8. Promedio de los negativos: No se pudo calcular <br>");
	}

	document.write("9. Dierencia: " + dierencia + "<br>");


}//FIN DE LA FUNCIÓN