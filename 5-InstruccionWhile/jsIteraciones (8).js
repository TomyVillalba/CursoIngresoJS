function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador=0;
	var numero;
	var respuesta='si';

	while(respuesta == "si")
	{
		contador++;

		numero = parseInt(prompt("Ingrese un numero"));

		if(numero >= 0)
		{
			acumulador += numero;
		}else{

			acumulador *= numero;

		}

		respuesta = prompt("¿Desea continuar?");
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN